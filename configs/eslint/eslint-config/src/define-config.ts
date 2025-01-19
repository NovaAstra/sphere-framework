import type { Arrayable } from "@sphere/typing"
import type { ESLintConfig } from "./typings"

import { toArray } from "@sphere/shared"

export interface ESLintOptions {

}

export async function defineConfig(
  config: Arrayable<ESLintConfig> = [],
  options: ESLintOptions = {}
) {
  const configs: ESLintConfig[] = []

  if (Object.keys(config).length > 0)
    configs.push(...toArray(config))

  return configs;
}