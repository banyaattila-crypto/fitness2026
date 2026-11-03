import type { Menu } from '../types.js';

/**
 * Napi menük: 4 étel (reggeli, ebéd, uzsonna, vacsora).
 * A hét napja -> menü hozzárendelést a terv (plan) adja.
 */
export const MENUS = {
  1: { meals: ['B1', 'L1', 'S1', 'D1'] },
  2: { meals: ['B2', 'L2', 'S2', 'D2'] },
  3: { meals: ['B3', 'L3', 'S3', 'D3'] },
  4: { meals: ['B4', 'L4', 'S4', 'D4'] },
  5: { meals: ['B5', 'L5', 'S3', 'D5'] },
  6: { meals: ['B6', 'L6', 'S2', 'D6'] },
  7: { meals: ['B7', 'L7', 'S1', 'D7'] },
} as const satisfies Record<number, Menu>;

export type MenuId = keyof typeof MENUS;

export function getMenu(id: number): Menu {
  const menu = (MENUS as Record<number, Menu>)[id];
  if (!menu) throw new Error(`Ismeretlen napi menü: "${id}"`);
  return menu;
}

/** Edzés utáni protein shake, edzésnapokon. */
export const SHAKE = { kcal: 120, p: 24 } as const;
