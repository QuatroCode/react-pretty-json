// rollup.config.js
import typescript from 'rollup-plugin-typescript';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: './src/json-view.tsx',
  dest: './index.js', 
  format: 'cjs',
  exports: 'named',
  plugins: [
    typescript({
      typescript: require('typescript')
    }),
    uglify()
  ]
}