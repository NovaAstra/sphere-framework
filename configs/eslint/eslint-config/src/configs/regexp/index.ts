import type { ESLintConfig } from "../../typings"

import PluginRegexp from 'eslint-plugin-regexp'
import { createConfig } from "../../create-config"


export const regexp = createConfig(() => {
  const configs: ESLintConfig[] = []

  configs.push({
    name: '@sphere/regexp/rules',
    rules: {
      "no-control-regex": "error",
      "no-misleading-character-class": "error",
      "no-regex-spaces": "error",
      "prefer-regex-literals": "error",
      "no-invalid-regexp": "off",
      "no-useless-backreference": "off",
      "no-empty-character-class": "off",
    }
  })

  configs.push({
    name: '@sphere/regexp/rules/setup',
    plugins: {
      "regexp": PluginRegexp
    },
    rules: {
     
    }
  })

  return configs
})