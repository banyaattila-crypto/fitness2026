import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { VERSION } from '../src/version.js';

const read = (rel: string) => readFileSync(new URL(rel, import.meta.url), 'utf8');
const pkg = JSON.parse(read('../package.json')) as { version: string };

describe('verziószám', () => {
  it('a VERSION semver alakú', () => {
    expect(VERSION).toMatch(/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/);
  });

  it('a package.json verziója semver alakú', () => {
    expect(pkg.version).toMatch(/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/);
  });

  it('a generált data.js a package.json verzióját tartalmazza (nem maradt el a build)', () => {
    expect(read('../data.js')).toContain(JSON.stringify(pkg.version));
  });

  it('az index.html átveszi és megjeleníti a verziót', () => {
    const html = read('../index.html');
    expect(html).toContain('dayTotals, VERSION} = window.BF');
    expect(html).toContain('getElementById(\'app-ver\')');
    expect(html).not.toMatch(/BODY FITNESS 2026 v\d/);
  });
});
