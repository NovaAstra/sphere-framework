import type { Arrayable } from "@sphere/typing"

export function toArray<T>(value: Arrayable<T>): T[] {
  return Array.isArray(value) ? value : [value];
}