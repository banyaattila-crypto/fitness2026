import type { DayType } from '../types.js';

/** A terv kezdete: 2026. június 9. (hétfő) */
export const START = new Date(2026, 5, 9);

export const MONTHS = [
  'jan.',
  'febr.',
  'márc.',
  'ápr.',
  'máj.',
  'jún.',
  'júl.',
  'aug.',
  'szept.',
  'okt.',
  'nov.',
  'dec.',
] as const;

export const DAY_NAMES_HU = [
  'Hétfő',
  'Kedd',
  'Szerda',
  'Csütörtök',
  'Péntek',
  'Szombat',
  'Vasárnap',
] as const;

export const DAY_KEYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as const;

/** A hét napjainak típusa (hétfőtől). */
export const DAY_TYPES: readonly DayType[] = ['train', 'train', 'rest', 'train', 'train', 'rest', 'rest'];

/** Menü-rotáció az 1–4. héten. */
export const MENU_PATTERN_14 = [1, 1, 2, 2, 3, 3, 4] as const;

/** Menü-rotáció az 5–8. héten (a 4-es menü a könnyítő hét). */
export const MENU_PATTERN_58 = [5, 5, 6, 6, 7, 7, 4] as const;

export const WEEK_COUNT = 8;
