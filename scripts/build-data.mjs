// A statikus oldal adatrétegét generálja: src/bridge.ts -> data.js (IIFE).
// Így a deploy továbbra is build nélküli statikus hosting marad.
import { build } from 'esbuild';
import { readFileSync } from 'node:fs';

const pkgPath = new URL('../package.json', import.meta.url);
const outPath = new URL('../data.js', import.meta.url);

const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
const SEMVER = /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/;
if (typeof pkg.version !== 'string' || !SEMVER.test(pkg.version)) {
  throw new Error(`package.json: érvénytelen verzió (${pkg.version})`);
}

await build({
  entryPoints: ['src/bridge.ts'],
  outfile: 'data.js',
  bundle: true,
  format: 'iife',
  globalName: 'BF',
  target: 'es2020',
  legalComments: 'none',
  define: { __APP_VERSION__: JSON.stringify(pkg.version) },
  banner: {
    js: `// GENERÁLT FÁJL — ne szerkeszd kézzel. Forrás: src/, build: npm run build\n// Verzió: ${pkg.version}`,
  },
});

// Őr: a bundle valóban tartalmazza-e a verziót (define elírás esetén itt bukik el).
const bundle = readFileSync(outPath, 'utf8');
if (!bundle.includes(JSON.stringify(pkg.version))) {
  throw new Error('data.js nem tartalmazza a verziót — a build hibás');
}

console.log(`data.js elkészült — v${pkg.version}`);
