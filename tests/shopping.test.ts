import { describe, it, expect } from 'vitest';
import { buildShoppingList, formatAmount, flattenShoppingList } from '../src/domain/shopping.js';

function asMap(menuId: number) {
  return Object.fromEntries(flattenShoppingList(buildShoppingList(menuId)));
}

describe('formatAmount', () => {
  it('a gramm és milliliter értéket szóköz nélkül írja', () => {
    expect(formatAmount(80, 'g')).toBe('80g');
    expect(formatAmount(250, 'ml')).toBe('250ml');
  });

  it('a fél darabot olvashatóan írja', () => {
    expect(formatAmount(0.5, 'db')).toBe('fél db');
    expect(formatAmount(1, 'db')).toBe('1 db');
    expect(formatAmount(2, 'db')).toBe('2 db');
  });

  it('a csipet és az evőkanál mennyiséget szövegesen adja', () => {
    expect(formatAmount(1, 'csipet')).toBe('csipet');
    expect(formatAmount(1, 'ek')).toBe('1 ek');
    expect(formatAmount(4, 'gerezd')).toBe('4 gerezd');
    expect(formatAmount(2, 'szelet')).toBe('2 szelet');
  });

  it('nem hagy lebegőpontos zajt', () => {
    expect(formatAmount(0.1 + 0.2, 'g')).toBe('0.3g');
  });
});

describe('buildShoppingList', () => {
  it('két napra összesít, mert a menü két naponta ismétlődik', () => {
    const list = asMap(1);
    expect(list['Csirkemell']).toBe('360g'); // L1 180g × 2
    expect(list['Pulykamell']).toBe('400g'); // D1 200g × 2
    expect(list['Zabpehely']).toBe('160g'); // B1 80g × 2
    expect(list['Rizs']).toBe('240g');
    expect(list['Félzsíros tej']).toBe('500ml');
    expect(list['Túró']).toBe('400g');
    expect(list['Brokkoli']).toBe('500g');
    expect(list['Burgonya']).toBe('500g');
    expect(list['Banán']).toBe('2 db');
    expect(list['Alma']).toBe('2 db');
    expect(list['Dió']).toBe('60g');
    expect(list['Paradicsom']).toBe('2 db');
    expect(list['Paprika']).toBe('2 db');
    expect(list['Protein por']).toBe('60g');
    // kézzel írt listában 20ml szerepelt, pedig L1 + D1 valójában 40ml
    expect(list['Olívaolaj']).toBe('40ml');
  });

  it('a bolti kiszerelésre kerekít (fokhagyma: 4 gerezd = 1 fej)', () => {
    const list = asMap(1);
    expect(list['Fokhagyma']).toBe('1 fej');
    expect(list['Fokhagyma']).not.toContain('gerezd');
  });

  it('a tonhalat konzervben számolja (140 g / db)', () => {
    const list = asMap(5);
    expect(list['Tonhal konzerv']).toBe('4 db'); // L5 280g × 2 = 560g
    expect(list['Mogyoróvaj (100% természetes)']).toBe('80g');
    expect(list['Rizs galetta']).toBe('4 db');
    expect(list['Paradicsomszósz']).toBe('400ml');
    expect(list['Hagyma']).toBe('2 db');
    expect(list['Citromlé']).toBe('20ml');
    expect(list['Zabpehely']).toBe('100g');
  });

  it('nem tartalmaz olyan tételt, ami nincs a menüben', () => {
    const names = Object.keys(asMap(5));
    expect(names).not.toContain('Túró');
    expect(names).not.toContain('Mandula');
    expect(names).not.toContain('Mix saláta');
    expect(names).not.toContain('Zabkeksz');
  });

  it('a fél avokádóból egy egész darab lesz két napra', () => {
    expect(asMap(6)['Avokádó']).toBe('1 db');
  });

  it('kihagyja a kamraterméket (fahéj)', () => {
    const names = Object.keys(asMap(1));
    expect(names).not.toContain('Fahéj');
  });

  it('a dm2 listában nincs saláta, mert a menü nem tartalmaz salátát', () => {
    const names = Object.keys(asMap(2));
    expect(names.some((n) => n.includes('Saláta'))).toBe(false);
    expect(names).toContain('Brokkoli');
    expect(asMap(2)['Citromlé']).toBe('30ml');
  });

  it('csak nem üres kategóriákat ad vissza, a katalógus sorrendjében', () => {
    const list = buildShoppingList(1);
    expect(list.length).toBeGreaterThan(0);
    for (const cat of list) expect(cat.items.length).toBeGreaterThan(0);
    expect(list.map((c) => c.cat)).toEqual(['Fehérje', 'Gabona', 'Tejtermék', 'Zöldség', 'Gyümölcs', 'Egyéb']);
  });

  it('minden menüre generálható lista', () => {
    for (let dm = 1; dm <= 7; dm++) {
      expect(flattenShoppingList(buildShoppingList(dm)).length).toBeGreaterThan(5);
    }
  });

  it('ismeretlen menüre hibát dob', () => {
    expect(() => buildShoppingList(99)).toThrow(/Ismeretlen napi menü/);
  });
});
