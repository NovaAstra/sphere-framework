import type { Array } from "../array/_api"

export type Function<T extends Array = Array, R = any> = (...args: T) => R;
