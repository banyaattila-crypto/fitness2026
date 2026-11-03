# fitness2026 – státuszjelentés

**Dátum:** 2026. november 3.
**Verzió:** v0.2.0 (F0 kész)
**Élő oldal:** https://banyaattila-crypto.github.io/fitness2026/

## Összefoglaló

A 8 hetes étrend- és edzésterv app továbbra is build nélküli statikus oldal (GitHub Pages), de az adatai már nem az `index.html`-be égetve élnek, hanem típusos TypeScript modulokban. A bevásárlólista nem kézzel írt másodpéldány, hanem az ételek hozzávalóiból számolódik, a naptár és a táplálkozási összesítés pedig szintén számított érték. A számításokra 46 unit teszt fut.

## Ami elkészült (F0)

| Terület | Fájl | Tartalom |
| --- | --- | --- |
| Típusok | `src/types.ts` | Food, Meal, Menu, PlanWeek, Exercise, TrainingDay, Supplement, ShoppingCategory |
| Verzió | `src/version.ts` | `VERSION` – a build injektálja a `package.json`-ból |
| Tartalom | `src/content/foods.ts` | étel-katalógus bolti kiszereléssel (`purchase`) és `pantry` jelöléssel |
| | `src/content/meals.ts` | 25 étel strukturált hozzávalókkal + recept |
| | `src/content/menus.ts` | 7 napi menü, SHAKE konstans |
| | `src/content/plan.ts` | kezdődátum, hónap/napnevek, menü-rotáció, 8 hét |
| | `src/content/training.ts` | edzésnapok, fázis-szorzók |
| | `src/content/supplements.ts` | kiegészítők |
| Domain | `src/domain/progression.ts` | fázisok, ismétlő napok, `buildWeeks` |
| | `src/domain/training.ts` | `trainDay`, `fmtKg` |
| | `src/domain/nutrition.ts` | menü/nap/hét összesítés, kcal-eltérés, audit |
| | `src/domain/shopping.ts` | `buildShoppingList`, `formatAmount` |
| Átvezetés | `src/bridge.ts` | a régi `M` nézet előállítása a domain modellből |
| Build | `scripts/build-data.mjs` | esbuild → `data.js` (`globalName: BF`) |
| Tesztek | `tests/*.test.ts` | 4 fájl, 46 teszt |

Az `index.html`-ből a 210 soros adatblokk helyére 3 soros shim került (`const {M, DM, …} = window.BF`), plusz egy `<script src="data.js">`. A `data.js` generált fájl, kézzel nem szerkesztendő: `npm run build` állítja elő, és verziózva van, így a deploy továbbra is build nélkül működik.

## Amitől a jelenlegi app helyesebb lett

- A kézi `SITEMS` lista törölve: megszűntek a fantomtételek (dm5: Túró / Mix saláta / Mandula / Zabkeksz, dm2: „Saláta", dm6: dupla avokádó).
- Javított mennyiségek: dm1 olívaolaj 20 ml → **40 ml**, fokhagyma 4 gerezd → **1 fej**, tonhal 560 g → **4 db**.
- A D7 receptjében szereplő kapribogyó bekerült a hozzávalók közé (`1 ek`).

## Ellenőrzések

- `npm test` → **50/50 zöld** (bevásárlólista, táplálkozás, naptár, tartalom-integritás, verzió)
- `npm run typecheck` → hiba nélkül (strict)
- `npm run build` után a munkakönyvtár tiszta → a commitolt `data.js` a forrásból reprodukálható
- jsdom-os DOM-füstteszt: 7 étkezési kártya, 7 edzéskártya, 63 bevásárlólista-tétel, 4 kiegészítő, a fejlécben `v0.2.0`, nulla JS hiba
- **Korlát:** a headless Chromium ebben a környezetben nem indult el, ezért valódi böngészős screenshot nem készült.

## Ismert adósság

- A kimondott kcal és a makrókból számolt érték nem mindenhol egyezik; legnagyobb eltérés L4 −11,4%, S2 +9,0%. A teszt 12%-os toleranciával rögzíti, a számok egyelőre nem lettek átírva.
- A bevásárlólista kategóriái külön „Gyümölcs" és „Egyéb" sorra váltak (korábban összevont „Gyümölcs + egyéb").
- A bevásárlólista tételsorrendje étel-sorrendet követ, nem ABC-t.
- A shop-note most accurately states: "A bevásárlólista tartalmazza az alapfűszereket (só, bors, olaj)".
- Régebbi, F0-on kívüli tételek: `user-scalable=no`, `--text2` kontraszt, inline `onclick` + `togCard`, hetenkénti checkbox-kulcsok, nincs export/import, nincs PWA, hardcode-olt 96 kg / 173 cm.

## Verziózás

A verziószámnak egyetlen forrása van: a `package.json` `version` mezője. A `npm run build` ezt injektálja a bundle-be (`__APP_VERSION__` → `BF.VERSION`), az `index.html` pedig ebből írja ki a fejlécet és a dokumentum címét — nincs több kézzel írt „v2". A build el is bukik, ha a verzió nem semver alakú, vagy ha nem került bele a `data.js`-be.

Új verzió kiadása:

```bash
npm version minor --no-git-tag-version   # patch / minor / major
npm run build                            # data.js újragenerálása
npm test                                 # 50 teszt
```

A `tests/version.test.ts` őrzi, hogy a `data.js` és a `package.json` verziója egyezzen (azaz ne maradjon el a build), és hogy az `index.html` valóban megjelenítse.

## Következő lépés

**F1:** az „aktuális hét" automatikus kiválasztása a mai dátum alapján (most a hét manuálisan lapozható).

## Fejlesztői parancsok

```bash
npm run build      # src/ → data.js
npm test           # 50 teszt
npm run typecheck  # tsc --noEmit
```
