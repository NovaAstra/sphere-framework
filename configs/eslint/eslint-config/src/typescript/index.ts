import tseslint from 'typescript-eslint'
import type { ESLintConfig } from "../typings";
import { createConfig } from "../create-config"
import { GLOB_TS, GLOB_TSX } from "../globs"

export interface TypescriptOptions {
  typescript?: boolean;
}

export const typescript = createConfig((options: TypescriptOptions = {}) => {
  const configs: ESLintConfig[] = []

  if (!options.typescript) return configs;

  configs.push(
    tseslint.config({
      extends: [...tseslint.configs.recommended],
      files: [GLOB_TS, GLOB_TSX],
      languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
          sourceType: 'module',
        },
      }
    }) as ESLintConfig
  )

  return configs;
})