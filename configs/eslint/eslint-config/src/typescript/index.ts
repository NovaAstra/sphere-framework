import type { ESLintConfig } from "../typings"
import { createConfig } from "../create-config"

export const typescript = createConfig(async () => {
  const configs: ESLintConfig[] = []

  return configs;
})