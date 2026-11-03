import type { Food } from '../types.js';

/**
 * Étel-katalógus. Ez az egyetlen igazságforrás: a menük, a receptek
 * és a bevásárlólista is ebből származik.
 *
 * A `purchase` mező a bolti kiszerelést adja meg, hogy a generált lista
 * vásárolható egységben jelenjen meg (pl. 4 gerezd fokhagyma -> 1 fej).
 */
export const FOODS = {
  // --- reggeli ---
  zabpehely: { name: 'Zabpehely', category: 'Gabona', unit: 'g' },
  felzsirtosTej: { name: 'Félzsíros tej', category: 'Tejtermék', unit: 'ml' },
  tej: { name: 'Tej', category: 'Tejtermék', unit: 'ml' },
  protein: { name: 'Protein por', category: 'Fehérje', unit: 'g' },
  banan: { name: 'Banán', category: 'Gyümölcs', unit: 'db' },
  fahej: { name: 'Fahéj', category: 'Fűszer', unit: 'csipet', pantry: true },
  tojas: { name: 'Tojás', category: 'Fehérje', unit: 'db' },
  teljesKiorlesuKenyer: { name: 'Teljes kiőrlésű kenyér', category: 'Gabona', unit: 'szelet' },
  kenyer: { name: 'Kenyér', category: 'Gabona', unit: 'szelet' },
  turo: { name: 'Túró', category: 'Tejtermék', unit: 'g' },
  tejfol: { name: 'Tejföl', category: 'Tejtermék', unit: 'g' },
  gorogJoghurt: { name: 'Görög joghurt', category: 'Tejtermék', unit: 'g' },
  muzli: { name: 'Müzli', category: 'Gabona', unit: 'g' },
  afonya: { name: 'Áfonya', category: 'Gyümölcs', unit: 'g' },
  mez: { name: 'Méz', category: 'Egyéb', unit: 'ml' },
  kefir: { name: 'Kefir', category: 'Tejtermék', unit: 'ml' },
  fagyasztottEper: { name: 'Fagyasztott eper', category: 'Gyümölcs', unit: 'g' },
  avokado: { name: 'Avokádó', category: 'Zöldség', unit: 'db' },
  citromle: { name: 'Citromlé', category: 'Egyéb', unit: 'ml' },
  eper: { name: 'Eper', category: 'Gyümölcs', unit: 'g' },
  chiaMag: { name: 'Chia mag', category: 'Egyéb', unit: 'g' },

  // --- ebéd ---
  csirkemell: { name: 'Csirkemell', category: 'Fehérje', unit: 'g' },
  rizs: { name: 'Rizs', category: 'Gabona', unit: 'g' },
  barnaRizs: { name: 'Barna rizs', category: 'Gabona', unit: 'g' },
  brokkoli: { name: 'Brokkoli', category: 'Zöldség', unit: 'g' },
  fokhagyma: {
    name: 'Fokhagyma',
    category: 'Zöldség',
    unit: 'gerezd',
    purchase: { unit: 'fej', size: 4 },
  },
  daraltPulyka: { name: 'Darált pulyka', category: 'Fehérje', unit: 'g' },
  teszta: { name: 'Tészta', category: 'Gabona', unit: 'g' },
  paradicsomszosz: { name: 'Paradicsomszósz', category: 'Egyéb', unit: 'ml' },
  hagyma: { name: 'Hagyma', category: 'Zöldség', unit: 'db' },
  teljesKiorlesuTortilla: { name: 'Teljes kiőrlésű tortilla', category: 'Gabona', unit: 'db' },
  fejesSalata: { name: 'Fejes saláta', category: 'Zöldség', unit: 'g' },
  joghurtosOntet: { name: 'Joghurtos öntet', category: 'Egyéb', unit: 'ml' },
  ontet: { name: 'Öntet', category: 'Egyéb', unit: 'ml' },
  voroslencse: { name: 'Vöröslencse', category: 'Gabona', unit: 'g' },
  sargarepa: { name: 'Sárgarépa', category: 'Zöldség', unit: 'db' },
  tonhalKonzerv: {
    name: 'Tonhal konzerv',
    category: 'Fehérje',
    unit: 'g',
    purchase: { unit: 'db', size: 140 },
  },
  quinoa: { name: 'Quinoa', category: 'Gabona', unit: 'g' },
  uborka: { name: 'Uborka', category: 'Zöldség', unit: 'db' },
  pulykaszelet: { name: 'Pulykaszelet', category: 'Fehérje', unit: 'g' },
  feherbabKonzerv: { name: 'Fehérbab konzerv', category: 'Fehérje', unit: 'g' },
  zoldsegAlaple: { name: 'Zöldség alaplé', category: 'Egyéb', unit: 'ml' },

  // --- uzsonna ---
  alma: { name: 'Alma', category: 'Gyümölcs', unit: 'db' },
  dio: { name: 'Dió', category: 'Egyéb', unit: 'g' },
  mogyorovaj: { name: 'Mogyoróvaj (100% természetes)', category: 'Egyéb', unit: 'g' },
  rizsGaletta: { name: 'Rizs galetta', category: 'Gabona', unit: 'db' },

  // --- vacsora ---
  pulykamell: { name: 'Pulykamell', category: 'Fehérje', unit: 'g' },
  burgonya: { name: 'Burgonya', category: 'Zöldség', unit: 'g' },
  paprika: { name: 'Paprika', category: 'Zöldség', unit: 'db' },
  paradicsom: { name: 'Paradicsom', category: 'Zöldség', unit: 'db' },
  olivaolaj: { name: 'Olívaolaj', category: 'Egyéb', unit: 'ml' },
  lazacfile: { name: 'Lazacfilé', category: 'Fehérje', unit: 'g' },
  edesburgonya: { name: 'Édesburgonya', category: 'Zöldség', unit: 'g' },
  csirkecomb: { name: 'Csirkecomb (csont nélkül)', category: 'Fehérje', unit: 'g' },
  bulgur: { name: 'Bulgur', category: 'Gabona', unit: 'g' },
  cukkini: { name: 'Cukkini', category: 'Zöldség', unit: 'g' },
  reszeltSajt: { name: 'Reszelt sajt', category: 'Tejtermék', unit: 'g' },
  zoldbab: { name: 'Zöldbab', category: 'Zöldség', unit: 'g' },
  kapribogyo: { name: 'Kapribogyó', category: 'Egyéb', unit: 'ek' },
} as const satisfies Record<string, Food>;

export type FoodId = keyof typeof FOODS;

/** Katalógus-lekérdezés hibaüzenettel, hogy egy elgépelt id azonnal kiderüljön. */
export function getFood(id: string): Food {
  const food = (FOODS as Record<string, Food>)[id];
  if (!food) throw new Error(`Ismeretlen étel a katalógusban: "${id}"`);
  return food;
}

export const FOOD_IDS = Object.keys(FOODS) as FoodId[];
