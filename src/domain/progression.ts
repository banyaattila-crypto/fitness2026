import type { PlanWeek, PlanDay } from '../types.js';
import {
  START,
  MONTHS,
  DAY_NAMES_HU,
  DAY_KEYS,
  DAY_TYPES,
  MENU_PATTERN_14,
  MENU_PATTERN_58,
  WEEK_COUNT,
} from '../content/plan.js';

/** Az adott hét (0-tól) menü-rotációja. */
export function dayPattern(weekIndex: number): readonly number[] {
  return weekIndex < 4 ? MENU_PATTERN_14 : MENU_PATTERN_58;
}

/** 1-től számozott edzésfázis: két hét = egy fázis. */
export function phaseFor(weekIndex: number): number {
  return Math.floor(weekIndex / 2) + 1;
}

/** Kedd, csütörtök, szombat: ugyanaz a menü, mint az előző napon. */
export function isRepeatDay(dayIndex: number): boolean {
  return dayIndex === 1 || dayIndex === 3 || dayIndex === 5;
}

function addDays(base: Date, days: number): Date {
  const d = new Date(base);
  d.setDate(d.getDate() + days);
  return d;
}

function shortDate(d: Date): string {
  return `${d.getDate()}. ${MONTHS[d.getMonth()]}`;
}

/** A teljes 8 hetes terv, a kezdődátumból számolva. */
export function buildWeeks(weekCount: number = WEEK_COUNT): PlanWeek[] {
  const weeks: PlanWeek[] = [];
  for (let w = 0; w < weekCount; w++) {
    const pattern = dayPattern(w);
    const first = addDays(START, w * 7);
    const last = addDays(START, w * 7 + 6);
    const days: PlanDay[] = [];
    for (let d = 0; d < 7; d++) {
      const date = addDays(START, w * 7 + d);
      days.push({
        name: DAY_NAMES_HU[d],
        key: DAY_KEYS[d],
        dateStr: shortDate(date),
        type: DAY_TYPES[d],
        dm: pattern[d],
        isRepeat: isRepeatDay(d),
      });
    }
    weeks.push({
      label: `${w + 1}. hét`,
      dates: `${shortDate(first)} — ${shortDate(last)}`,
      days,
      phase: phaseFor(w),
    });
  }
  return weeks;
}

export const WEEKS: readonly PlanWeek[] = buildWeeks();
