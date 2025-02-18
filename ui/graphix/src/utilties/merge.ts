import { isArray, mergeWith } from "lodash-es"

const arrayCoverage = (_object: unknown, source: unknown) => {
  if (isArray(source)) {
    return source;
  }
};

export const mergeWithArrayCoverage = (...args) => {
  return mergeWith.call(null, ...args, arrayCoverage);
};
