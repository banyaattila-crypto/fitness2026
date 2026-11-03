import { describe, it, expect } from 'vitest';
import { buildWeeks, phaseFor, isRepeatDay, dayPattern } from '../src/domain/progression.js';

describe('buildWeeks', () => {
  const weeks = buildWeeks();

  it('8 hetet ad', () => {
    expect(weeks).toHaveLength(8);
  });

  it('minden hét 7 napos', () => {
    weeks.forEach((w) => expect(w.days).toHaveLength(7));
  });

  it('a fázisok páronként lépnek: 1,1,2,2,3,3,4,4', () => {
    expect(weeks.map((w) => w.phase)).toEqual([1, 1, 2, 2, 3, 3, 4, 4]);
  });

  it('az első hét a kezdődátumnál indul', () => {
    expect(weeks[0].dates).toBe('9. jún. — 15. jún.');
    expect(weeks[0].days[0].dateStr).toBe('9. jún.');
    expect(weeks[0].days[0].name).toBe('Hétfő');
  });

  it('az utolsó nap augusztus 3.', () => {
    expect(weeks[7].days[6].dateStr).toBe('3. aug.');
  });

  it('kedd, csütörtök, szombat ismétlő nap', () => {
    expect(weeks[0].days.map((d) => d.isRepeat)).toEqual([
      false,
      true,
      false,
      true,
      false,
      true,
      false,
    ]);
  });

  it('a menük 1-től 4-ig, majd 5-től 7-ig rotálnak', () => {
    expect(weeks[0].days.map((d) => d.dm)).toEqual([1, 1, 2, 2, 3, 3, 4]);
    expect(weeks[4].days.map((d) => d.dm)).toEqual([5, 5, 6, 6, 7, 7, 4]);
  });

  it('a napok típusa hétfőtől: edzés, edzés, pihenő, ...', () => {
    expect(weeks[0].days.map((d) => d.type)).toEqual([
      'train',
      'train',
      'rest',
      'train',
      'train',
      'rest',
      'rest',
    ]);
  });
});

describe('segédfüggvények', () => {
  it('phaseFor két hétre bont', () => {
    expect([0, 1, 2, 3, 4, 5, 6, 7].map(phaseFor)).toEqual([1, 1, 2, 2, 3, 3, 4, 4]);
  });

  it('isRepeatDay csak a 2., 4., 6. napon igaz', () => {
    expect([0, 1, 2, 3, 4, 5, 6].map(isRepeatDay)).toEqual([
      false,
      true,
      false,
      true,
      false,
      true,
      false,
    ]);
  });

  it('a 4. hét után más menü-rotáció jön', () => {
    expect(dayPattern(3)).toEqual([1, 1, 2, 2, 3, 3, 4]);
    expect(dayPattern(4)).toEqual([5, 5, 6, 6, 7, 7, 4]);
  });
});
