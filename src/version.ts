/**
 * Az alkalmazás verziószáma.
 *
 * Egyetlen forrása a `package.json` `version` mezője: a build
 * (`scripts/build-data.mjs`) injektálja `__APP_VERSION__` néven, így a
 * bundle-be kerülő érték nem tud elcsúszni a csomag verziójától.
 * Teszt/tsc alatt (build nélkül) a fallback él.
 */
declare const __APP_VERSION__: string;

export const VERSION: string =
  typeof __APP_VERSION__ === 'string' ? __APP_VERSION__ : '0.0.0-dev';

/** Igaz, ha a futó kód build útján kapta a valódi verziót. */
export const IS_RELEASE_BUILD: boolean = typeof __APP_VERSION__ === 'string';
