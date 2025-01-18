import type { Linter,ESLint } from 'eslint';

export type ESLintPlugin = ESLint.Plugin

export type ESLintConfig = Omit<Linter.Config<Linter.RulesRecord>, 'plugins'> & {
  name?: string;

  plugins?: Record<string, ESLintPlugin>;
}