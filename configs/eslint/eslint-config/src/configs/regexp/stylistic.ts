import type { RegexpOptions } from "./typings"

export const stylistic = (options: RegexpOptions = {}) => {

  return {
    "regexp/grapheme-string-literal": "error",
    "regexp/hexadecimal-escape": ["error", options.strict ? 'always' : 'never'],
  }
}