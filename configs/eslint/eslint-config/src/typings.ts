import type { Linter, ESLint } from 'eslint';

export type ESLintConfig = Omit<Linter.Config<Linter.RulesRecord>, 'plugins'> & {
  name?: string;
}