export function defineConfig() {
  return [
    {
      files: ["**/*.ts"],
      rules: {
        semi: ["error", "never"],
        "no-console": "warn"
      }
    }
  ]
}