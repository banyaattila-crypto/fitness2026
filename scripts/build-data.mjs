// A statikus oldal adatrétegét generálja: src/bridge.ts -> data.js (IIFE).
// Így a deploy továbbra is build nélküli statikus hosting marad.
import { build } from 'esbuild';

await build({
  entryPoints: ['src/bridge.ts'],
  outfile: 'data.js',
  bundle: true,
  format: 'iife',
  globalName: 'BF',
  target: 'es2020',
  legalComments: 'none',
  banner: {
    js: '// GENERÁLT FÁJL — ne szerkeszd kézzel. Forrás: src/, build: npm run build',
  },
});

console.log('data.js elkészült');
