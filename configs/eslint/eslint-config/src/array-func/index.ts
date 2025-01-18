import PluginArrayFunc from 'eslint-plugin-array-func';
import { createConfig } from "../create-config"

export const arrayFunc = createConfig({
  name: "@sphere/array-func",
  plugins: {
    'array-func': PluginArrayFunc,
  },
  rules: {
    'array-func/from-map': 'error',
    'array-func/no-unnecessary-this-arg': 'error',
    'array-func/prefer-array-from': 'error',
    'array-func/avoid-reverse': 'error',
    'array-func/prefer-flat-map': 'off',
    'array-func/prefer-flat': 'off',
  }
}) 