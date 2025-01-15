import type { Function } from "./function"

export type Promisify<F extends Function> =
  (...args: Parameters<F>) => Promise<ReturnType<F>>