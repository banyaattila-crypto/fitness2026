import { describe, it, expect } from 'vitest';
import {
  macrosToKcal,
  menuTotals,
  dayTotals,
  kcalDeviation,
  nutritionAudit,
  weekTotals,
} from '../src/domain/nutrition.js';
import { MEALS } from '../src/content/meals.js';
import type { Meal, PlanDay } from '../src/types.js';
import { buildWeeks } from '../src/domain/progression.js';

const day = (dm: number, type: PlanDay['type']): PlanDay => ({
  name: 'Hétfő',
  key: 'Mon',
  dateStr: '1. jan.',
  type,
  dm,
  isRepeat: false,
});

describe('macrosToKcal', () => {
  it('4/4/9 kcal per gramm', () => {
    expect(macrosToKcal({ p: 10, c: 10, f: 10 })).toBe(170);
  });
});

describe('menuTotals', () => {
  it('összeadja a menü négy ételét', () => {
    // B1 640 + L1 690 + S1 320 + D1 650
    const t = menuTotals(1);
    expect(t.kcal).toBe(2300);
    expect(t.p).toBe(44 + 55 + 28 + 52);
  });

  it('menü azonosító helyett objektummal is működik', () => {
    expect(menuTotals({ meals: ['B1'] }).kcal).toBe(640);
  });

  it('minden menüre van értelmes összeg', () => {
    for (let dm = 1; dm <= 7; dm++) {
      const t = menuTotals(dm);
      expect(t.kcal).toBeGreaterThan(1800);
      expect(t.kcal).toBeLessThan(3000);
      expect(t.p).toBeGreaterThan(120);
    }
  });
});

describe('dayTotals', () => {
  it('edzésnapon hozzáadja a shake-et', () => {
    const train = dayTotals(day(1, 'train'));
    const rest = dayTotals(day(1, 'rest'));
    expect(train.kcal - rest.kcal).toBe(120);
    expect(train.p - rest.p).toBe(24);
    expect(train.c).toBe(rest.c);
    expect(train.f).toBe(rest.f);
  });

  it('a hét minden napjára konzisztens', () => {
    const week = buildWeeks()[0];
    const totals = weekTotals(week);
    expect(totals).toHaveLength(7);
    totals.forEach((t, i) => {
      const expected = menuTotals(week.days[i].dm);
      const extra = week.days[i].type === 'train' ? 120 : 0;
      expect(t.kcal).toBe(expected.kcal + extra);
    });
  });
});

describe('kcalDeviation', () => {
  it('előjeles százalékot ad', () => {
    expect(kcalDeviation(100, 110)).toBeCloseTo(10);
    expect(kcalDeviation(100, 90)).toBeCloseTo(-10);
  });

  it('nulla osztásnál nem robban el', () => {
    expect(kcalDeviation(0, 100)).toBe(0);
  });
});

describe('tartalmi audit: kimondott vs. számolt kalória', () => {
  const entries = Object.entries(MEALS as Record<string, Meal>).map(([id, meal]) => ({ id, ...meal }));
  const audit = nutritionAudit(entries);

  it('minden ételt vizsgál', () => {
    expect(audit).toHaveLength(Object.keys(MEALS).length);
    expect(audit).toHaveLength(25);
  });

  it('egyetlen étel sem tér el 12%-nál jobban', () => {
    const worst = [...audit].sort((a, b) => Math.abs(b.deviationPct) - Math.abs(a.deviationPct))[0];
    expect(Math.abs(worst.deviationPct)).toBeLessThan(12);
  });

  it('a legnagyobb eltérés az L4 (alulszámolt) és az S2 (túlszámolt)', () => {
    const byId = Object.fromEntries(audit.map((a) => [a.id, a]));
    expect(byId.L4.deviationPct).toBeCloseTo(-11.4, 0);
    expect(byId.S2.deviationPct).toBeCloseTo(9.0, 0);
  });
});
