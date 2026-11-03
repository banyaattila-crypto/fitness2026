import type { DayType, TrainingDay } from '../types.js';
import { TRAIN, PMULT } from '../content/training.js';

/** Melyik edzésterv tartozik az adott naphoz. */
export function trainDay(type: DayType, key: string): TrainingDay {
  if (type === 'rest') return TRAIN.Rest;
  if (key === 'Mon') return TRAIN.Mon;
  if (key === 'Tue') return TRAIN.Tue;
  if (key === 'Thu') return TRAIN.Thu;
  return TRAIN.Fri;
}

/** Bázissúly a fázis-szorzóval, pl. "69 kg" vagy "—". */
export function fmtKg(base: number | null, phase: number): string {
  if (base === null) return '—';
  return `${Math.round(base * PMULT[phase - 1])} kg`;
}
