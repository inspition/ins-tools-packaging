import resolve from 'rollup-plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default {
  input: './src/index.ts', // 入口文件
  output: [
    {
      format: 'cjs', // 打包为commonjs格式
      file: 'dist/ins-utils.cjs.js', // 打包后的文件路径名称
      name: 'insTools' // 打包后的默认导出文件名称
    },
    {
      format: 'esm', // 打包为esm格式
      file: 'dist/ins-utils.esm.js',
      name: 'insTools'
    },
    {
      format: 'umd', // 打包为umd通用格式
      file: 'dist/ins-utils.umd.js',
      name: 'insTools',
      minifyInternalExports: true
    }
  ],
  plugins: [typescript({ tsconfig: './tsconfig.json' }), resolve()]
}
