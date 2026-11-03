import { describe, it, expect } from 'vitest';
import { MEALS, getMeal } from '../src/content/meals.js';
import { MENUS, getMenu } from '../src/content/menus.js';
import { getFood } from '../src/content/foods.js';
import { TRAIN } from '../src/content/training.js';
import { trainDay, fmtKg } from '../src/domain/training.js';
import type { Meal } from '../src/types.js';

const meals = Object.entries(MEALS as Record<string, Meal>);

describe('tartalom integritás', () => {
  it('25 étel (7 reggeli, 7 ebéd, 4 uzsonna, 7 vacsora) és 7 napi menü van', () => {
    expect(meals).toHaveLength(25);
    expect(Object.keys(MENUS)).toHaveLength(7);
  });

  it('minden hozzávaló létezik az étel-katalógusban', () => {
    for (const [id, meal] of meals) {
      for (const ing of meal.ingredients) {
        expect(() => getFood(ing.food), `${id} / ${ing.food}`).not.toThrow();
      }
    }
  });

  it('minden menü 4 ételt tartalmaz, és mindegyik létezik', () => {
    for (let dm = 1; dm <= 7; dm++) {
      const menu = getMenu(dm);
      expect(menu.meals).toHaveLength(4);
      for (const id of menu.meals) expect(() => getMeal(id)).not.toThrow();
    }
  });

  it('minden menüben van reggeli, ebéd, uzsonna és vacsora', () => {
    for (let dm = 1; dm <= 7; dm++) {
      const labels = getMenu(dm).meals.map((id) => getMeal(id).label);
      expect(labels).toEqual(['REGGELI', 'EBÉD', 'UZSONNA', 'VACSORA']);
    }
  });

  it('a D7 receptjében szereplő kapribogyó a hozzávalók között is ott van', () => {
    expect(MEALS.D7.ingredients.some((i) => i.food === 'kapribogyo')).toBe(true);
  });

  it('a hozzávalók mennyisége pozitív', () => {
    for (const [id, meal] of meals) {
      for (const ing of meal.ingredients) {
        expect(ing.amount, `${id} / ${ing.food}`).toBeGreaterThan(0);
      }
    }
  });

  it('minden recept számozott lépésekkel kezdődik', () => {
    for (const [id, meal] of meals) {
      expect(meal.recipe.trim().startsWith('1.'), id).toBe(true);
    }
  });
});

describe('edzésterv', () => {
  it('a napokhoz a megfelelő edzésterv tartozik', () => {
    expect(trainDay('train', 'Mon')).toBe(TRAIN.Mon);
    expect(trainDay('train', 'Tue')).toBe(TRAIN.Tue);
    expect(trainDay('train', 'Thu')).toBe(TRAIN.Thu);
    expect(trainDay('train', 'Fri')).toBe(TRAIN.Fri);
    expect(trainDay('rest', 'Wed')).toBe(TRAIN.Rest);
  });

  it('a súly a fázis szorzójával nő', () => {
    expect(fmtKg(60, 1)).toBe('60 kg');
    expect(fmtKg(60, 4)).toBe('69 kg'); // 60 × 1.15
    expect(fmtKg(null, 2)).toBe('—');
  });

  it('a pihenőnapon nincs gyakorlat', () => {
    expect(TRAIN.Rest.ex).toHaveLength(0);
  });
});
