import type { Arrayable } from "@sphere/typing"
import type { ESLintConfig } from "./typings"

import { toArray } from "@sphere/shared"
import { unicorn, comments, promise, imports } from "./configs"

export interface ESLintOptions {

}

export async function defineConfig(
  config: Arrayable<ESLintConfig> = []
) {
  const configs: ESLintConfig[] = []

  configs.push(
    ...unicorn(),
    ...comments(),
    ...imports(),
    promise()
  )

  if (Object.keys(config).length > 0)
    configs.push(...toArray(config))

  return configs;
}