import type { Meal, PlanDay, Menu, PlanWeek } from '../types.js';
import { getMeal } from '../content/meals.js';
import { getMenu, SHAKE } from '../content/menus.js';

export interface MacroTotals {
  readonly kcal: number;
  readonly p: number;
  readonly c: number;
  readonly f: number;
}

const ZERO: MacroTotals = { kcal: 0, p: 0, c: 0, f: 0 };

/** Egy étel tápértékei. */
export function mealTotals(meal: Meal): MacroTotals {
  return { kcal: meal.kcal, p: meal.p, c: meal.c, f: meal.f };
}

function sum(meals: readonly Meal[]): MacroTotals {
  return meals.reduce<MacroTotals>(
    (acc, m) => ({
      kcal: acc.kcal + m.kcal,
      p: acc.p + m.p,
      c: acc.c + m.c,
      f: acc.f + m.f,
    }),
    ZERO,
  );
}

/** Egy napi menü tápértékei (shake nélkül). */
export function menuTotals(menu: Menu | number): MacroTotals {
  const m = typeof menu === 'number' ? getMenu(menu) : menu;
  return sum(m.meals.map((id) => getMeal(id)));
}

/** A nap összesítése; edzésnapon a shake is hozzáadódik. */
export function dayTotals(day: Pick<PlanDay, 'dm' | 'type'>): MacroTotals {
  const base = menuTotals(day.dm);
  if (day.type !== 'train') return base;
  return { ...base, kcal: base.kcal + SHAKE.kcal, p: base.p + SHAKE.p };
}

/** Makrókból számított energia (4/4/9 kcal per gramm). */
export function macrosToKcal(t: Pick<MacroTotals, 'p' | 'c' | 'f'>): number {
  return t.p * 4 + t.c * 4 + t.f * 9;
}

/** Számított vs. kimondott kalória eltérése százalékban (előjeles). */
export function kcalDeviation(declared: number, computed: number): number {
  if (declared === 0) return 0;
  return ((computed - declared) / declared) * 100;
}

export interface NutritionDeviation {
  readonly id: string;
  readonly declared: number;
  readonly computed: number;
  readonly deviationPct: number;
}

/**
 * Tartalmi audit: minden étel kimondott kcal-ja vs. a makrókból számolt érték.
 * A tervben a kettő nem mindig egyezik — ez a lista teszi láthatóvá, hol.
 */
export function nutritionAudit(meals: readonly (Meal & { id: string })[]): NutritionDeviation[] {
  return meals.map((meal) => {
    const computed = macrosToKcal(meal);
    return {
      id: meal.id,
      declared: meal.kcal,
      computed,
      deviationPct: kcalDeviation(meal.kcal, computed),
    };
  });
}

/** Egy hét összesített menü-táblázata (a heti nézet fejlécéhez). */
export function weekTotals(week: PlanWeek): MacroTotals[] {
  return week.days.map((d) => dayTotals(d));
}
