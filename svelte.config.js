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
    base: '/remake-gallery/',

    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: 'app.html',
            precompress: false,
            strict: true
        }),
        alias: {
            $assets: './src/lib/assets',
            $data: './src/lib/data',
            $helpers: './src/lib/helpers',
            $lib: './src/lib',
        },
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/remake-gallery' : ''
        }
    },
}

export default config
