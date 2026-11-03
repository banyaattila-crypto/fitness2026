import type { Supplement } from '../types.js';

export const SUPPS: readonly Supplement[] = [
  {
    icon: 'fa-jar',
    color: 'var(--gold)',
    name: 'Scitec Whey Protein',
    when: 'Edzés után 30 percen belül',
    desc: '30g fehérjepor 250ml vízzel vagy tejjel. Edzésmentes napokon is fogyasztható reggel vagy uzsonnaként. A leucin-tartalom optimálisan stimulálja az izomnövekedést.',
  },
  {
    icon: 'fa-tablets',
    color: 'var(--cyan)',
    name: 'Magnézium (Mg) 375mg',
    when: 'Lefekvés előtt 30–60 perccel',
    desc: 'Magnézium-biszglicinát forma a legjobb felszívódáshoz. Segíti az izomrelaxációt, csökkenti az esti görcsöket, javítja az alvásminőséget.',
  },
  {
    icon: 'fa-capsules',
    color: 'var(--gold2)',
    name: 'Kalcium (Ca) 500mg',
    when: 'Reggel étkezés közben',
    desc: 'Étkezéssel együtt szedendő. NEM szedendő magnéziummal egy időben — egymás felszívódását zavarják.',
  },
  {
    icon: 'fa-fire',
    color: 'var(--green)',
    name: 'Kreatin (opcionális)',
    when: 'Bármikor, naponta 5g',
    desc: 'Kreatin-monohidrát 5g/nap, minden nap. Töltési fázis nem szükséges. 3–4 hét után teljes hatás: erőnövekedés, rövidebb regeneráció.',
  },
];
