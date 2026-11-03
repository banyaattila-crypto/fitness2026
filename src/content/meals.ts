import type { Meal } from '../types.js';

/**
 * Ételek. A kcal / p / c / f a terv szerinti érték; a hozzávalók
 * strukturáltak, hogy a bevásárlólista és az összesítés számolható legyen.
 */
export const MEALS = {
  B1: {
    label: 'REGGELI',
    time: '07:00',
    name: 'Protein zabpehely',
    kcal: 640,
    p: 44,
    c: 78,
    f: 12,
    ingredients: [
      { food: 'zabpehely', amount: 80 },
      { food: 'felzsirtosTej', amount: 250 },
      { food: 'protein', amount: 30 },
      { food: 'banan', amount: 1 },
      { food: 'fahej', amount: 1 },
    ],
    recipe:
      '1. Zabot tejjel felfőzzük, 3 percig keverjük.\n2. Levesszük a tűzről, protein port belekeverjük.\n3. Banánszeleteket ráteszük, fahéjjal megszórjuk.',
  },
  B2: {
    label: 'REGGELI',
    time: '07:00',
    name: 'Tojásos reggeli szendvics',
    kcal: 580,
    p: 36,
    c: 52,
    f: 20,
    ingredients: [
      { food: 'tojas', amount: 3 },
      { food: 'teljesKiorlesuKenyer', amount: 2 },
      { food: 'paradicsom', amount: 1 },
      { food: 'olivaolaj', amount: 10 },
    ],
    recipe:
      '1. Tojásokat felverjük, sózzuk, borsozzuk.\n2. Olajon közepes lángon lágyra sütjük.\n3. Kenyér mellette pirósítva, friss paradicsom.',
  },
  B3: {
    label: 'REGGELI',
    time: '07:00',
    name: 'Túrós zabpalacsinta',
    kcal: 610,
    p: 42,
    c: 62,
    f: 16,
    ingredients: [
      { food: 'turo', amount: 200 },
      { food: 'tojas', amount: 2 },
      { food: 'zabpehely', amount: 60 },
      { food: 'tejfol', amount: 30 },
    ],
    recipe:
      '1. Összes hozzávalót botmixerrel simára keverjük.\n2. Teflonserpenyőben olajtalan kis palacsintákat sütünk.\n3. Görög joghurttal tálalunk.',
  },
  B4: {
    label: 'REGGELI',
    time: '07:00',
    name: 'Joghurttál + müzli',
    kcal: 540,
    p: 30,
    c: 70,
    f: 10,
    ingredients: [
      { food: 'gorogJoghurt', amount: 300 },
      { food: 'muzli', amount: 80 },
      { food: 'afonya', amount: 100 },
      { food: 'mez', amount: 15 },
    ],
    recipe:
      '1. Joghurtot tálba öntjük.\n2. Müzlit és áfonyát rátesszük.\n3. Mézzel megcseppegtjük.',
  },
  B5: {
    label: 'REGGELI',
    time: '07:00',
    name: 'Protein smoothie tál',
    kcal: 590,
    p: 40,
    c: 72,
    f: 12,
    ingredients: [
      { food: 'kefir', amount: 250 },
      { food: 'protein', amount: 25 },
      { food: 'banan', amount: 1 },
      { food: 'zabpehely', amount: 50 },
      { food: 'fagyasztottEper', amount: 100 },
    ],
    recipe:
      '1. Kefirt, protein port és epret turmixolunk.\n2. Smoothie tálba öntjük.\n3. Zabot és banánszeleteket rátesszük.',
  },
  B6: {
    label: 'REGGELI',
    time: '07:00',
    name: 'Avokádós tojás kenyérrel',
    kcal: 620,
    p: 28,
    c: 44,
    f: 30,
    ingredients: [
      { food: 'tojas', amount: 2 },
      { food: 'avokado', amount: 0.5 },
      { food: 'teljesKiorlesuKenyer', amount: 2 },
      { food: 'citromle', amount: 5 },
    ],
    recipe:
      '1. Tojásokat keményre főzzük (8 perc).\n2. Avokádót villával összezúzzuk citromlével, sóval.\n3. Kenyérre kenjük, tojásszeleteket rátesszük.',
  },
  B7: {
    label: 'REGGELI',
    time: '07:00',
    name: 'Zabkása gyümölccsel',
    kcal: 570,
    p: 36,
    c: 74,
    f: 12,
    ingredients: [
      { food: 'zabpehely', amount: 90 },
      { food: 'tej', amount: 200 },
      { food: 'gorogJoghurt', amount: 150 },
      { food: 'eper', amount: 150 },
      { food: 'chiaMag', amount: 10 },
    ],
    recipe:
      '1. Zabot tejjel 4 percig főzzük.\n2. Tálba öntjük, rátesszük a joghurtot.\n3. Epret felvágjuk, chia magot szórunk rá.',
  },
  L1: {
    label: 'EBÉD',
    time: '12:30',
    name: 'Csirkemell rizs + brokkoli',
    kcal: 690,
    p: 55,
    c: 78,
    f: 14,
    ingredients: [
      { food: 'csirkemell', amount: 180 },
      { food: 'rizs', amount: 120, label: 'Rizs (száraz)' },
      { food: 'brokkoli', amount: 250 },
      { food: 'olivaolaj', amount: 10 },
      { food: 'fokhagyma', amount: 2 },
    ],
    recipe:
      '1. Csirkemellet befűszerezzük, serpenyőben 12 perc alatt megsütjük.\n2. Rizst kétszeres sózott vízben 18 percig főzzük.\n3. Brokkolit 5 percig pároljuk olajban, fokhagymával.',
  },
  L2: {
    label: 'EBÉD',
    time: '12:30',
    name: 'Bolognese tészta',
    kcal: 700,
    p: 48,
    c: 85,
    f: 16,
    ingredients: [
      { food: 'daraltPulyka', amount: 180 },
      { food: 'teszta', amount: 130 },
      { food: 'paradicsomszosz', amount: 200 },
      { food: 'hagyma', amount: 1 },
      { food: 'fokhagyma', amount: 2 },
    ],
    recipe:
      '1. Hagymán, fokhagymán üvegesre pirítjuk.\n2. Darált pulykát hozzáadjuk, 8 percig sütjük.\n3. Paradicsomszósszal 10 percig rotyogtatjuk.\n4. Főtt tésztával összeforgatjuk.',
  },
  L3: {
    label: 'EBÉD',
    time: '12:30',
    name: 'Csirke wrap saláta',
    kcal: 660,
    p: 50,
    c: 65,
    f: 18,
    ingredients: [
      { food: 'csirkemell', amount: 160 },
      { food: 'teljesKiorlesuTortilla', amount: 2 },
      { food: 'fejesSalata', amount: 100 },
      { food: 'paradicsom', amount: 1 },
      { food: 'joghurtosOntet', amount: 50 },
    ],
    recipe:
      '1. Csirkemellet csíkokra vágjuk, serpenyőben megsütjük.\n2. Tortillát mikroban 30 mp-ig melegítjük.\n3. Saláta, paradicsom, csirke, öntet — göngyöljük be.',
  },
  L4: {
    label: 'EBÉD',
    time: '12:30',
    name: 'Vöröslencsefőzelék',
    kcal: 650,
    p: 36,
    c: 90,
    f: 8,
    ingredients: [
      { food: 'voroslencse', amount: 150 },
      { food: 'sargarepa', amount: 2 },
      { food: 'hagyma', amount: 1 },
      { food: 'fokhagyma', amount: 2 },
      { food: 'kenyer', amount: 2 },
    ],
    recipe:
      '1. Hagymán, fokhagymán olajban dinsztelünk.\n2. Sárgarépa, lencse hozzáad, alaplével felöntjük.\n3. 20 percig főzzük, botmixerrel turmixoljuk.\n4. Kenyérrel tálalunk.',
  },
  L5: {
    label: 'EBÉD',
    time: '12:30',
    name: 'Tonhálsaláta + quinoa',
    kcal: 640,
    p: 52,
    c: 68,
    f: 14,
    ingredients: [
      { food: 'tonhalKonzerv', amount: 280 },
      { food: 'quinoa', amount: 100 },
      { food: 'uborka', amount: 1 },
      { food: 'paradicsom', amount: 1 },
      { food: 'citromle', amount: 10 },
      { food: 'olivaolaj', amount: 10 },
    ],
    recipe:
      '1. Quinoát dupla sózott vízben 15 percig főzzük.\n2. Zöldségeket felkockázzuk.\n3. Mindent összekeverünk, citromlével és olajjal locsoljuk.',
  },
  L6: {
    label: 'EBÉD',
    time: '12:30',
    name: 'Pulyka + barna rizs saláta',
    kcal: 700,
    p: 56,
    c: 80,
    f: 14,
    ingredients: [
      { food: 'pulykaszelet', amount: 200 },
      { food: 'barnaRizs', amount: 120 },
      { food: 'fejesSalata', amount: 150 },
      { food: 'paradicsom', amount: 1 },
      { food: 'ontet', amount: 40 },
    ],
    recipe:
      '1. Pulykaszeletet besózzuk, serpenyőben 2x5 perc alatt megsütjük.\n2. Barna rizst 40 perc alatt főzzük.\n3. Saláta + paradicsom + rizs + pulyka + öntet.',
  },
  L7: {
    label: 'EBÉD',
    time: '12:30',
    name: 'Fehérbab leves + pulyka',
    kcal: 720,
    p: 56,
    c: 82,
    f: 14,
    ingredients: [
      { food: 'feherbabKonzerv', amount: 400 },
      { food: 'pulykaszelet', amount: 150 },
      { food: 'hagyma', amount: 1 },
      { food: 'sargarepa', amount: 2 },
      { food: 'zoldsegAlaple', amount: 500 },
    ],
    recipe:
      '1. Zöldségeket kockázzuk, olajban dinsztelünk.\n2. Alaplével felöntjük, babbal 15 percig főzzük.\n3. Pulykaszeletet külön megsütjük, leves mellé tálalunk.',
  },
  S1: {
    label: 'UZSONNA',
    time: '15:30',
    name: 'Túró + alma + dió',
    kcal: 320,
    p: 28,
    c: 28,
    f: 12,
    ingredients: [
      { food: 'turo', amount: 200 },
      { food: 'alma', amount: 1 },
      { food: 'dio', amount: 30 },
    ],
    recipe: '1. Túrót tálba tesszük.\n2. Almát felkockázzuk, dióval rátesszük.',
  },
  S2: {
    label: 'UZSONNA',
    time: '15:30',
    name: 'Görög joghurt + méz + dió',
    kcal: 290,
    p: 22,
    c: 30,
    f: 12,
    ingredients: [
      { food: 'gorogJoghurt', amount: 250 },
      { food: 'mez', amount: 15 },
      { food: 'dio', amount: 25 },
    ],
    recipe: '1. Joghurtot tálba öntjük.\n2. Mézzel megcseppegtjük, dióval megszórjuk.',
  },
  S3: {
    label: 'UZSONNA',
    time: '15:30',
    name: 'Mogyoróvaj + banán',
    kcal: 340,
    p: 14,
    c: 42,
    f: 14,
    ingredients: [
      { food: 'mogyorovaj', amount: 40 },
      { food: 'banan', amount: 1 },
      { food: 'rizsGaletta', amount: 2 },
    ],
    recipe:
      '1. Rizs galettára kenjük a mogyoróvajat.\n2. Banánszeleteket rátesszük.',
  },
  S4: {
    label: 'UZSONNA',
    time: '15:30',
    name: 'Főtt tojás + zöldségrudak',
    kcal: 250,
    p: 22,
    c: 8,
    f: 14,
    ingredients: [
      { food: 'tojas', amount: 2 },
      { food: 'uborka', amount: 1 },
      { food: 'sargarepa', amount: 2 },
    ],
    recipe:
      '1. Tojásokat keményre főzzük (8 perc), lehűtjük, meghámozzuk.\n2. Zöldségeket rudakra vágjuk.',
  },
  D1: {
    label: 'VACSORA',
    time: '19:00',
    name: 'Pulykamell + párolt burgonya',
    kcal: 650,
    p: 52,
    c: 65,
    f: 16,
    ingredients: [
      { food: 'pulykamell', amount: 200 },
      { food: 'burgonya', amount: 250 },
      { food: 'paprika', amount: 1 },
      { food: 'paradicsom', amount: 1 },
      { food: 'olivaolaj', amount: 10 },
    ],
    recipe:
      '1. Burgonyát meghámozzuk, kockázzuk, 20 percig főzzük.\n2. Pulykát befűszerezzük, serpenyőben megsütjük (2x6 perc).\n3. Zöldségeket frissen tálalunk mellé.',
  },
  D2: {
    label: 'VACSORA',
    time: '19:00',
    name: 'Lazac + édesburgonya',
    kcal: 700,
    p: 48,
    c: 62,
    f: 26,
    ingredients: [
      { food: 'lazacfile', amount: 180 },
      { food: 'edesburgonya', amount: 300 },
      { food: 'citromle', amount: 15 },
      { food: 'brokkoli', amount: 150 },
      { food: 'olivaolaj', amount: 10 },
    ],
    recipe:
      '1. Édesburgonyát sütőben 200C-on 30 percig sütjük.\n2. Lazacot citromlével meglocsoljuk, 180C-on 12 perc.\n3. Brokkolit pároljuk, mindet együtt tálalunk.',
  },
  D3: {
    label: 'VACSORA',
    time: '19:00',
    name: 'Csirkecomb + bulgur',
    kcal: 660,
    p: 52,
    c: 64,
    f: 18,
    ingredients: [
      { food: 'csirkecomb', amount: 200 },
      { food: 'bulgur', amount: 120 },
      { food: 'brokkoli', amount: 200 },
      { food: 'fokhagyma', amount: 3 },
    ],
    recipe:
      '1. Csirkecombokat fokhagymás-rozmarinos olajba forgatjuk.\n2. 200C sütőben 30 percig sütjük.\n3. Bulgurt kétszeres vízben 15 percig főzzük, brokkolit pároljuk mellé.',
  },
  D4: {
    label: 'VACSORA',
    time: '19:00',
    name: 'Rakott pulykás zöldség',
    kcal: 620,
    p: 50,
    c: 52,
    f: 18,
    ingredients: [
      { food: 'daraltPulyka', amount: 200 },
      { food: 'cukkini', amount: 200 },
      { food: 'paradicsom', amount: 2 },
      { food: 'hagyma', amount: 1 },
      { food: 'tejfol', amount: 80 },
    ],
    recipe:
      '1. Hagymán olajban pirítjuk, pulykát hozzáad, 8 percig sütjük.\n2. Cukkinit és paradicsomot felszeleteljük, rétegezzük.\n3. Tejfölt kanalazzuk rá, 180C-on 20 percig sütjük.',
  },
  D5: {
    label: 'VACSORA',
    time: '19:00',
    name: 'Paradicsomos csirke + rizs',
    kcal: 680,
    p: 55,
    c: 76,
    f: 14,
    ingredients: [
      { food: 'csirkemell', amount: 200 },
      { food: 'rizs', amount: 120 },
      { food: 'paradicsomszosz', amount: 200 },
      { food: 'hagyma', amount: 1 },
      { food: 'fokhagyma', amount: 2 },
    ],
    recipe:
      '1. Csirkemellet felkockázzuk, serpenyőben megsütjük.\n2. Hagymát, fokhagymát hozzáadunk, paradicsomszósszal felöntjük.\n3. 10 percig főzzük, rizzsel tálalunk.',
  },
  D6: {
    label: 'VACSORA',
    time: '19:00',
    name: 'Zöldséges omlett + kenyér',
    kcal: 550,
    p: 38,
    c: 44,
    f: 22,
    ingredients: [
      { food: 'tojas', amount: 4 },
      { food: 'cukkini', amount: 150 },
      { food: 'paprika', amount: 1 },
      { food: 'reszeltSajt', amount: 40 },
      { food: 'kenyer', amount: 2 },
    ],
    recipe:
      '1. Zöldségeket felkockázzuk, olajban 4 percig pirítjuk.\n2. Felvert tojást ráöntjük, fedő alatt 5 percig sütjük.\n3. Sajtot reszélünk, kenyérrel tálalunk.',
  },
  D7: {
    label: 'VACSORA',
    time: '19:00',
    name: 'Sült lazac + zöldség + burgonya',
    kcal: 690,
    p: 50,
    c: 60,
    f: 26,
    ingredients: [
      { food: 'lazacfile', amount: 180 },
      { food: 'burgonya', amount: 200 },
      { food: 'zoldbab', amount: 150 },
      { food: 'citromle', amount: 10 },
      { food: 'kapribogyo', amount: 1 },
    ],
    recipe:
      '1. Burgonyát főzzük 20 percig.\n2. Lazacot citromlével, kapribogyóval 180C-on 15 percig sütjük.\n3. Zöldbabot pároljuk, mindent együtt tálalunk.',
  },
} as const satisfies Record<string, Meal>;

export type MealId = keyof typeof MEALS;

export function getMeal(id: string): Meal {
  const meal = (MEALS as Record<string, Meal>)[id];
  if (!meal) throw new Error(`Ismeretlen étel a menüben: "${id}"`);
  return meal;
}

export const MEAL_IDS = Object.keys(MEALS) as MealId[];
