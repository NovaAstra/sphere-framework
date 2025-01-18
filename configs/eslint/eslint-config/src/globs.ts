export const GLOB_SRC_EXT = "?([cm])[jt]s?(x)";

export const GLOB_SRC = "**/*.?([cm])[jt]s?(x)";

export const GLOB_TESTS: Array<string> = [
	`**/__tests__/**/*.${GLOB_SRC_EXT}`,
	`**/*.spec.${GLOB_SRC_EXT}`,
	`**/*.test.${GLOB_SRC_EXT}`,
	`**/*.bench.${GLOB_SRC_EXT}`,
	`**/*.benchmark.${GLOB_SRC_EXT}`,
];
