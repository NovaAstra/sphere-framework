import type { Arrayable, Promisable } from "@sphere/typing"
import type { ESLintConfig } from "./typings"

export function createConfig<O = void, E extends ESLintConfig = ESLintConfig>(
  config: (options: O) => ESLintConfig
): (options: O) => E
export function createConfig<O = void, E extends ESLintConfig = ESLintConfig>(
  config: (options: O) => ESLintConfig[]
): (options: O) => E[]

export function createConfig<O = void, E extends ESLintConfig = ESLintConfig>(
  config: (options: O) => Promise<ESLintConfig>
): (options: O) => Promise<E>
export function createConfig<O = void, E extends ESLintConfig = ESLintConfig>(
  config: (options: O) => Promise<ESLintConfig[]>
): (options: O) => Promise<E[]>

export function createConfig<E extends ESLintConfig = ESLintConfig>(config: ESLintConfig): () => E
export function createConfig<E extends ESLintConfig = ESLintConfig>(config: ESLintConfig[]): () => E[]

export function createConfig<O = void>(
  config: Arrayable<ESLintConfig>
    | ((options: O) => Promisable<Arrayable<ESLintConfig>>)
) {
  return typeof config === 'function'
    ? config
    : () => config
}
