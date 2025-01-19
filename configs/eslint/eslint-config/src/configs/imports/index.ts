import type { ESLintConfig } from "../../typings"

import PluginImports from 'eslint-plugin-import';
import { createConfig } from "../../create-config"

export interface ImportsOptions {
  stylistic?: boolean;
}

export const imports = createConfig((options: ImportsOptions = {}) => {
  const configs: ESLintConfig[] = []

  return configs
})