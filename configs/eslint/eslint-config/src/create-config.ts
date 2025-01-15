import type { ESLintConfig } from "./typings"

export type Promisable<T> = T | Promise<T>;

export type Arrayable<T> = T | T[];


export function createConfig<T extends object>(config: T): () => ESLintConfig;

export function createConfig<T>(config: (options?: T) => ESLintConfig): (options?: T) => ESLintConfig;

export function createConfig<T>(config: (options?: T) => Promise<ESLintConfig>): (options?: T) => Promise<ESLintConfig>;

export function createConfig(config) {
  return typeof config === 'function'
    ? config
    : (() => config);
}

const a = createConfig({})

const b = createConfig(() => ({}))

const c = createConfig(async () => ({}))