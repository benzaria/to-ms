import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/**/*'],
    format: ['esm'],
    bundle: true,
    splitting: false,
    sourcemap: false,
    clean: true,
    dts: true,
    minify: false,
    minifySyntax: true,
    external: [],
});
