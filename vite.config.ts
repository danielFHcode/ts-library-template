import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { name } from './package.json';

export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.ts',
            name: name
                .replace(/[ -][A-z]/g, (word, index) =>
                    index === 0 ? word.toLowerCase() : word.toUpperCase()
                )
                .replace(/[ -]/g, ''), // package name to camel case
            fileName: 'index',
        },
    },
    plugins: [dts({ rollupTypes: true })],
});
