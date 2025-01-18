import type { Promisable, Arrayable } from "@sphere/typing"
import type { ESLintConfig } from "./typings"
import { FlatConfigComposer } from 'eslint-flat-config-utils';
import { arrayFunc } from "./array-func"

export function defineConfig(): FlatConfigComposer<ESLintConfig> {
  const configs: Promisable<Arrayable<ESLintConfig>>[] = [];

  const a = [arrayFunc()]

  configs.push(a)

  let composer = new FlatConfigComposer<ESLintConfig, any>();

  composer = composer
    .append(...configs);

  return composer;
}