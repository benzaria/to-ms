import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    platform: 'neutral',
    target: ['esnext'],
    format: ['esm'],
    bundle: true,
    splitting: false,
    sourcemap: false,
    clean: true,
    dts: false,
    minify: false,
    minifySyntax: true,
    // outExtension: ({ format }) => ({ js: format === 'cjs' ? '.cjs' : '.mjs', dts: '.d.ts' }),
    outExtension: () => ({ js: '.js', dts: '.d.ts' }),
});