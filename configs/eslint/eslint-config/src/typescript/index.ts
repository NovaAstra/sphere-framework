import type { ESLintConfig } from "../typings"
import { createConfig } from "../create-config"
import { interopDefault } from "../interop-default"

export const typescript = createConfig(async () => {
  const configs: ESLintConfig[] = []

  const [PluginTypescript, ParserTypescript] = await Promise.all([
    interopDefault(import("@typescript-eslint/eslint-plugin")),
    interopDefault(import("@typescript-eslint/parser")),
  ] as const);

  configs.push({
    name: "@sphere/typescript/setup",
    plugins: {
      "typescript": PluginTypescript,
    },
  })

  return configs;
})