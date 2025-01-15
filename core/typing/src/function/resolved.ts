import type { Promisable } from "./promisable"

export type Resolved<T> = T extends Promisable<infer U> ? U : never;