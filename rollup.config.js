import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import peerDepsExternalPlugin from 'rollup-plugin-peer-deps-external';
import pkg from './package.json';

export default {
    input: './src/lib/index.js',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            name: 'example',
            globals: {
                'react': 'React',
                'prop-types': 'PropTypes',
                'styled-components': 'styled-components'
            },
        },
        {
            file: pkg.es,
            format: 'esm',
            globals: {
                'react': 'React',
                'prop-types': 'PropTypes',
                'styled-components': 'styled-components'
            },
        }
    ],
    external: [
        'react',
        'styled-components'
    ],
    plugins: [
        peerDepsExternalPlugin(),
        babel({
            exclude: 'node_modules/**',
        }),
        resolve(),
        commonjs(),
    ]
}


