import type { ESLintConfig } from "./typings"

export type Promisable<T> = T | Promise<T>;

export type Arrayable<T> = T | T[];

export function createConfig(config) {
  return typeof config === 'function'
    ? config
    : (() => config);
}
