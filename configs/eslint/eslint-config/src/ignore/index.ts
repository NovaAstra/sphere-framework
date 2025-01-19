import { createConfig } from "../create-config"
import { ESLintConfig } from "../typings";

export const ignore = createConfig(() => {
  const configs: ESLintConfig[] = []

  return configs;
})