import type { TrainingDay } from '../types.js';

/**
 * Heti edzésterv. A súlyok bázisértékek: a tényleges terhelést a
 * fázis-szorzó (PMULT) adja hozzá.
 */
export const TRAIN: Record<'Mon' | 'Tue' | 'Thu' | 'Fri' | 'Rest', TrainingDay> = {
  Mon: {
    focus: 'Mell + Tricepsz',
    tag: 'push',
    wu: '5 perc: 3×10 fekvőtámasz, vállmobilizáció, kárkörzés',
    ex: [
      { n: 'Fekvenyomás', det: 'Rúddal', s: 4, r: '8', base: 60 },
      { n: 'Dőlt pados nyomás', det: 'Kézisúlyok', s: 3, r: '10', base: 22 },
      { n: 'Tárogatás kábelen', det: 'Keresztezett', s: 3, r: '12', base: 15 },
      { n: 'Francia nyomás', det: 'EZ-rúd', s: 3, r: '10', base: 25 },
      { n: 'Tricepsz letolás', det: 'Kábel', s: 3, r: '12', base: 30 },
    ],
    cd: '5 perc nyújtás: mellizom, tricepsz',
  },
  Tue: {
    focus: 'Hát + Bicepsz',
    tag: 'pull',
    wu: '5 perc: vállmobilizáció, kézkörzés, előkészítő húzás',
    ex: [
      { n: 'Húzódzkodás', det: 'Semleges fogás', s: 3, r: 'max 6–10', base: null },
      { n: 'Evezés rúddal', det: 'Hajolt törzs', s: 4, r: '8', base: 50 },
      { n: 'Lat pulldown', det: 'Széles fogás', s: 3, r: '10', base: 55 },
      { n: 'Kézisúlyos evezés', det: 'Egykaros', s: 3, r: '12', base: 24 },
      { n: 'Bicepsz curl', det: 'Rúddal', s: 4, r: '10', base: 30 },
      { n: 'Kalapácsos curl', det: 'Kézisúlyok', s: 3, r: '12', base: 14 },
    ],
    cd: 'Nyújtás: széles hát, bicepsz, alkar',
  },
  Thu: {
    focus: 'Váll + Has',
    tag: 'shoulders',
    wu: '5 perc: oldalemelés könnyű súllyal, nyakkörzés',
    ex: [
      { n: 'Ülő vállnyomás', det: 'Kézisúlyok', s: 4, r: '8', base: 20 },
      { n: 'Oldalsó emelés', det: 'Kézisúlyok', s: 3, r: '12', base: 10 },
      { n: 'Előemelés', det: 'Kézisúlyok', s: 3, r: '12', base: 10 },
      { n: 'Hátsó deltoid gép', det: 'Hajolva', s: 3, r: '12', base: 20 },
      { n: 'Plank', det: 'Statikus tartás', s: 3, r: '45 mp', base: null },
      { n: 'Hasprés', det: 'Térd felhúzással', s: 3, r: '20', base: null },
      { n: 'Lábemeléses hasprés', det: 'Hanyatt fekve', s: 3, r: '15', base: null },
    ],
    cd: 'Nyújtás: váll, deréktáj, csípő',
  },
  Fri: {
    focus: 'Könnyű Láb + Összefoglaló',
    tag: 'legs',
    wu: '5 perc: helyben járás, lábkörzés, guggolás súly nélkül',
    ex: [
      { n: 'Lábnyomás (gép)', det: 'Könnyű súly!', s: 3, r: '12', base: 80 },
      { n: 'Lábhajlítás gép', det: 'Fekvő', s: 3, r: '12', base: 30 },
      { n: 'Vádliemelés', det: 'Állva, kézisúlyokkal', s: 4, r: '15', base: 20 },
      { n: 'Kettlebell swing', det: 'Csípőlendítés', s: 3, r: '15', base: 16 },
      { n: 'Pull-through', det: 'Kábel, alsó csúszda', s: 3, r: '12', base: 20 },
    ],
    cd: '10 perc nyújtás: comb, vádli, csípő',
  },
  Rest: { focus: 'Pihenőnap', tag: 'rest', wu: null, ex: [], cd: null },
};

/** Fázis-szorzók (1–4. fázis). */
export const PMULT = [1, 1.05, 1.1, 1.15] as const;
