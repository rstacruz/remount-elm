// rollup.config.js
import babel from 'rollup-plugin-babel'
import minify from 'rollup-plugin-babel-minify'

const MINIFY = minify({ comments: false })

const BABEL = babel({
  exclude: 'node_modules/**'
})

const DEFAULTS = {
  input: './src/index.js',
  external: ['remount']
}

const UMD = {
  format: 'umd',
  name: 'Remount',
  globals: { remount: 'Remount' }
}

export default [
  // ES Modules
  {
    ...DEFAULTS,
    output: { file: 'dist/remount-elm.esm.mjs', format: 'esm' }
  },

  {
    ...DEFAULTS,
    plugins: [MINIFY],
    output: { file: 'dist/remount-elm.esm.min.mjs', format: 'esm' }
  },

  // ES6
  {
    ...DEFAULTS,
    output: { file: 'dist/remount-elm.es6.js', ...UMD }
  },

  {
    ...DEFAULTS,
    plugins: [MINIFY],
    output: { file: 'dist/remount-elm.es6.min.js', ...UMD }
  },

  // ES5
  {
    ...DEFAULTS,
    plugins: [BABEL],
    output: { file: 'dist/remount-elm.es5.js', ...UMD }
  },

  {
    ...DEFAULTS,
    plugins: [BABEL, MINIFY],
    output: { file: 'dist/remount-elm.es5.min.js', ...UMD }
  }
]
