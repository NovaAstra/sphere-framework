import type { Array } from "../array"

export type Function<T extends Array = Array, R = any> = (...args: T) => R;
