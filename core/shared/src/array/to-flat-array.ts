import type { Arrayable } from "@sphere/typing"

export function toFlatArray<T>(...values: Arrayable<T>[]): T[] {
  return values.flatMap(value => Array.isArray(value) ? value : [value]);
}
