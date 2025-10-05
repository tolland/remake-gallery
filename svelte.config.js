import adapter from '@sveltejs/adapter-static'
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', '.md', '.svx'],
    preprocess: [
        vitePreprocess(),

        mdsvex({
            extensions: ['.md', '.svx'],
        })
    ],

    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: 'app.html',
            precompress: false,
        }),
        alias: {
            $assets: './src/lib/assets',
            $data: './src/lib/data',
            $helpers: './src/lib/helpers',
            $lib: './src/lib',
        },
    },
}

export default config
