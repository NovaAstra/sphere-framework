import type { Arrayable } from "@sphere/typing"
import type { ESLintConfig } from "./typings"
import { typescript } from "./typescript"

export interface ESLintOptions {
  vue?: boolean;
  jsx?: boolean;
  gitignore?: boolean;
}

export function defineConfig() {
  const configs: Arrayable<ESLintConfig> = [];

  configs.push(...(typescript({ typescript: true })) as ESLintConfig[])

  return configs;
}