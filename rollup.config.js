// rollup.config.js
import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

const devServerActive = process.env.DEV_SERVER_ACTIVE

const addModule = (name) => ({
  input: `src/${name ? `${name}/` : ''}index.ts`,
  output: [
    {
      file: `dist/${name ? `${name}/` : ''}index.cjs.js`,
      format: 'cjs',
    },
    {
      file: `dist/${name ? `${name}/` : ''}index.esm.js`,
      format: 'es',
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
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      // eslint-disable-next-line no-console
      console.error(`(!) ${warning.message}`);
    }
  },
})

export default [
  addModule(),
]
