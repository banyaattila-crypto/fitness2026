/**
 * Átmeneti adapter a generált adatok és a meglévő UI között.
 *
 * Az index.html jelenleg a régi (kézzel írt) adatstruktúrára épül:
 * `M[id].lbl / .ing / .rec` stb. Ezt a nézetet itt állítjuk elő a domain
 * modulokból, így a UI átírása nélkül is egy forrásból származik minden.
 */
import type { Meal } from './types.js';
import { MEALS } from './content/meals.js';
import { MENUS, SHAKE } from './content/menus.js';
import { SUPPS } from './content/supplements.js';
import { MENU_PATTERN_14, MENU_PATTERN_58 } from './content/plan.js';
import { getFood } from './content/foods.js';
import { WEEKS } from './domain/progression.js';
import { trainDay, fmtKg } from './domain/training.js';
import { dayTotals, menuTotals } from './domain/nutrition.js';
import { formatAmount, buildShoppingList } from './domain/shopping.js';

interface LegacyMeal {
  lbl: string;
  time: string;
  name: string;
  kcal: number;
  p: number;
  c: number;
  f: number;
  ing: [string, string][];
  rec: string;
}

/** Régi formátum: a hozzávaló [név, mennyiség] párként, kész szövegként. */
export const M: Record<string, LegacyMeal> = {};
for (const [id, meal] of Object.entries(MEALS as Record<string, Meal>)) {
  M[id] = {
    lbl: meal.label,
    time: meal.time,
    name: meal.name,
    kcal: meal.kcal,
    p: meal.p,
    c: meal.c,
    f: meal.f,
    ing: meal.ingredients.map((ing) => {
      const food = getFood(ing.food);
      return [ing.label ?? food.name, formatAmount(ing.amount, food.unit)];
    }),
    rec: meal.recipe,
  };
}

export {
  MENUS as DM,
  SHAKE,
  SUPPS,
  WEEKS,
  MENU_PATTERN_14 as W14,
  MENU_PATTERN_58 as W58,
  trainDay,
  fmtKg,
  buildShoppingList as buildShopList,
  dayTotals,
  menuTotals,
  formatAmount,
};

declare global {
  // eslint-disable-next-line no-var
  var BF: Record<string, unknown>;
}

globalThis.BF = {
  M,
  DM: MENUS,
  SHAKE,
  SUPPS,
  WEEKS,
  W14: MENU_PATTERN_14,
  W58: MENU_PATTERN_58,
  trainDay,
  fmtKg,
  buildShopList: buildShoppingList,
  dayTotals,
  menuTotals,
  formatAmount,
};
