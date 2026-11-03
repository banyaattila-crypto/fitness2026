/**
 * A teljes alkalmazás adatmodellje.
 *
 * Alapszabály: származtatott adatot (bevásárlólista, napi makró-összeg,
 * heti súlyok) SOHA nem tárolunk, mindig a forrásadatokból számoljuk.
 */

/** Mértékegységek, amikben a receptek és a bevásárlólista számol. */
export type Unit = 'g' | 'ml' | 'db' | 'szelet' | 'gerezd' | 'fej' | 'ek' | 'tk' | 'csipet';

export type FoodCategory =
  | 'Fehérje'
  | 'Gabona'
  | 'Tejtermék'
  | 'Zöldség'
  | 'Gyümölcs'
  | 'Egyéb'
  | 'Fűszer';

/** A bevásárlólista kategória-sorrendje (a Fűszer sosem jelenik meg: pantry). */
export const CATEGORY_ORDER: readonly FoodCategory[] = [
  'Fehérje',
  'Gabona',
  'Tejtermék',
  'Zöldség',
  'Gyümölcs',
  'Egyéb',
];

export interface Food {
  readonly name: string;
  readonly category: FoodCategory;
  /** alap egység, amiben a receptek számolnak */
  readonly unit: Unit;
  /** alapfűszer / tartós kellék: nem kerül a bevásárlólistára */
  readonly pantry?: boolean;
  /** bolti kiszerelés: ennyi alap-egység egy megvásárolható egység */
  readonly purchase?: { readonly unit: Unit; readonly size: number };
}

export interface Ingredient {
  /** a FOODS kulcsa */
  readonly food: string;
  readonly amount: number;
  /** eltérő megjelenített név (pl. "Rizs (száraz)") */
  readonly label?: string;
}

export type MealLabel = 'REGGELI' | 'EBÉD' | 'UZSONNA' | 'VACSORA';

export interface Meal {
  readonly label: MealLabel;
  readonly time: string;
  readonly name: string;
  readonly kcal: number;
  readonly p: number;
  readonly c: number;
  readonly f: number;
  readonly ingredients: readonly Ingredient[];
  /** a recept lépései, soronként "1. ..." */
  readonly recipe: string;
}

export interface Menu {
  readonly meals: readonly string[];
}

export type DayType = 'train' | 'rest';

export interface Exercise {
  readonly n: string;
  readonly det: string;
  /** sorozatszám */
  readonly s: number;
  /** ismétlés (szöveg, mert lehet "max 6–10" vagy "45 mp") */
  readonly r: string;
  /** bázissúly kg-ban, null = saját testsúly / gép nélkül */
  readonly base: number | null;
}

export type TrainingTag = 'push' | 'pull' | 'shoulders' | 'legs' | 'rest';

export interface TrainingDay {
  readonly focus: string;
  readonly tag: TrainingTag;
  readonly wu: string | null;
  readonly ex: readonly Exercise[];
  readonly cd: string | null;
}

export interface PlanDay {
  readonly name: string;
  readonly key: string;
  readonly dateStr: string;
  readonly type: DayType;
  /** melyik napi menü (MENUS kulcsa) */
  readonly dm: number;
  readonly isRepeat: boolean;
}

export interface PlanWeek {
  readonly label: string;
  readonly dates: string;
  readonly days: readonly PlanDay[];
  readonly phase: number;
}

export interface Supplement {
  readonly icon: string;
  readonly color: string;
  readonly name: string;
  readonly when: string;
  readonly desc: string;
}

/** Bevásárlólista-elem: [megjelenített név, mennyiség]. */
export type ShoppingItem = readonly [string, string];

export interface ShoppingCategory {
  readonly cat: string;
  readonly items: readonly ShoppingItem[];
}
