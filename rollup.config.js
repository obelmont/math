// rollup.config.js
import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import pkg from './package.json' assert { type: 'json' }

const devServerActive = process.env.DEV_SERVER_ACTIVE

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
      },
      {
        file: pkg.module,
        format: 'es',
      },
      {
        file: pkg.browser,
        format: 'iife',
        name: pkg.name,
        // https://rollupjs.org/guide/en/#outputglobals
        globals: {},
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      devServerActive &&
        serve({
          open: true,
          contentBase: ['demo', 'dist'],
        }),
      devServerActive &&
        livereload({
          watch: ['dist', 'demo'],
        }),
    ],
  },
]
