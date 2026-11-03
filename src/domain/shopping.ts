import type { Unit, ShoppingCategory, ShoppingItem } from '../types.js';
import { CATEGORY_ORDER } from '../types.js';
import { getFood } from '../content/foods.js';
import { getMeal } from '../content/meals.js';
import { getMenu } from '../content/menus.js';

/** Két tizedesre kerekít, hogy ne jelenjen meg 0.30000000000000004. */
function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

/** Megjelenített mennyiség, pl. "80g", "250ml", "2 db", "fél db", "csipet". */
export function formatAmount(amount: number, unit: Unit): string {
  const n = round2(amount);
  if (unit === 'g' || unit === 'ml') return `${n}${unit}`;
  if (unit === 'csipet') return 'csipet';
  if (unit === 'db' && n === 0.5) return 'fél db';
  return `${n} ${unit}`;
}

/**
 * Bevásárlólista egy napi menüre, `days` napra összesítve.
 *
 * A menü két naponta ismétlődik, ezért az alapértelmezés 2 nap — így a
 * lista egy tényleges bevásárlást fed le. A bolti kiszerelés (`purchase`)
 * alapján felfelé kerekítünk (pl. 4 gerezd fokhagyma -> 1 fej).
 */
export function buildShoppingList(menuId: number, days = 2): ShoppingCategory[] {
  const menu = getMenu(menuId);
  const totals = new Map<string, number>();

  for (let d = 0; d < days; d++) {
    for (const mealId of menu.meals) {
      for (const ing of getMeal(mealId).ingredients) {
        totals.set(ing.food, (totals.get(ing.food) ?? 0) + ing.amount);
      }
    }
  }

  const byCategory = new Map<string, ShoppingItem[]>();

  for (const [foodId, total] of totals) {
    const food = getFood(foodId);
    if (food.pantry) continue;

    let qty: string;
    if (food.purchase) {
      const count = Math.ceil(round2(total / food.purchase.size));
      qty = formatAmount(count, food.purchase.unit);
    } else {
      qty = formatAmount(total, food.unit);
    }

    const items = byCategory.get(food.category) ?? [];
    items.push([food.name, qty]);
    byCategory.set(food.category, items);
  }

  const order: readonly string[] = CATEGORY_ORDER;
  return order
    .filter((cat) => byCategory.has(cat))
    .map((cat) => ({ cat, items: byCategory.get(cat)! }));
}

/** Egy kategória összes tétele egyetlen listában (tesztekhez, kereséshez). */
export function flattenShoppingList(list: readonly ShoppingCategory[]): ShoppingItem[] {
  return list.flatMap((c) => c.items);
}
