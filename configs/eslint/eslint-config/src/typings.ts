import type { Linter } from 'eslint';

export type ESLintConfig = Omit<Linter.Config<Linter.RulesRecord>, 'plugins'> & {
  name?: string;
}

export type ESLintFlatConfig = ESLintConfig[]