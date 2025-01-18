import type { Array } from "../array/_api"

export type Function<T extends Array = any[], R extends any = any> = (...args: T) => R;
