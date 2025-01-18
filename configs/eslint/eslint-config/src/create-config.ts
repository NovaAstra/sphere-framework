import type { Promisable, Arrayable } from "@sphere/typing"
import type { ESLintConfig } from "./typings"

export type CreateConfigFunction<
  O = void,
  E extends ESLintConfig = ESLintConfig> =
  O extends void
  ? () => Arrayable<E>
  : (options?: O) => Promisable<Arrayable<E>>

export function createConfig<
  E extends ESLintConfig,
  T extends Arrayable<E>,
  F extends CreateConfigFunction<void, ESLintConfig>
>(config: T): () => (T extends ESLintConfig[] ? E[] : E)


export function createConfig(config: any) {
  return typeof config === 'function'
    ? config
    : () => config
}

const a = createConfig({})
const b = createConfig([])
// const c = createConfig(() => ({}))
// const d = createConfig(() => ([]))
// const e = createConfig(async () => ({}))
// const f = createConfig(async () => ([])) 