import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

import pkg from './package.json';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: false
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: false
    }
  ],
  plugins: [
    external(),
    nodeResolve({
      browser: true
    }),
    typescript({
      exclude: '**/__tests__/**'
    }),
    commonjs({
      include: ['node_modules/**']
    }),
    terser()
  ]
};
