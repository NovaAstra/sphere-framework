import type { RegexpOptions } from "./typings"

export const stylistic = (options: RegexpOptions = {}) => {
  return {
    "regexp/grapheme-string-literal": "error",
    "regexp/hexadecimal-escape": ["error", options.strict ? 'always' : 'never'],
    "regexp/letter-case": [
      "error",
      {
        "caseInsensitive": "lowercase",
        "unicodeEscape": "uppercase",
        "hexadecimalEscape": "uppercase",
        "controlEscape": "uppercase"
      }
    ],
    "regexp/match-any": "error",
    "regexp/no-useless-escape": "error",
    "regexp/no-useless-non-capturing-group": "error",
    "regexp/prefer-character-class": "error",
    "regexp/prefer-d": "error",
    "regexp/prefer-lookaround": "error",
    "regexp/prefer-named-backreference": "error",
    "prefer-named-capture-group": "error",
    'regexp/prefer-named-replacement': 'error',
    'regexp/prefer-plus-quantifier': 'error',
    'regexp/prefer-question-quantifier': 'error',
    "regexp/prefer-result-array-groups": "error",
    'regexp/prefer-star-quantifier': 'error',
    "regexp/prefer-unicode-codepoint-escapes": "error",
    'regexp/prefer-w': 'error',
    'regexp/sort-character-class-elements': 'error',
    "regexp/sort-flags": "error",
    "regexp/unicode-escape": ["error", "unicodeEscape"],
    "regexp/unicode-property": [
      "error",
      {
        "generalCategory": "never",
        "key": "long",
        "property": "long"
      }
    ],
  }
}