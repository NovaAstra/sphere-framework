import type { ESLintConfig } from "./typings"

export type Promisable<T> = T | Promise<T>;

export type Arrayable<T> = T | T[];

export function createConfig<T>(
  config: T
): T extends void ? () => Promisable<any> : (options?: T) => Promisable<any> {
  return
}

createConfig({})