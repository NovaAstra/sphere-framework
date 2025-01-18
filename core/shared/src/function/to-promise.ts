export function toPromise<T>(input: () => (T | Promise<T>)): Promise<T> {
  const result = input();
  if (result instanceof Promise) return result

  return Promise.resolve(result);
}