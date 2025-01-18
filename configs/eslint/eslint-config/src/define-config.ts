import type { Arrayable } from "@sphere/typing"
import type { ESLintConfig } from "./typings"

export interface SphereESLintOptions {

}

export function defineConfig() {
  const configs: Arrayable<ESLintConfig> = [];

  return configs;
}