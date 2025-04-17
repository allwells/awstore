/**
 * Asserts that a value is defined and returns it, otherwise throws an error.
 *
 * @typeParam T - The expected type of the value.
 * @param value - The value to assert.
 * @param errorMessage - The error message to throw if the value is undefined.
 * @returns The non-undefined value.
 * @throws Will throw an error if the value is undefined.
 */
export function assertValue<T>(value: T | undefined, errorMessage: string): T {
  if (value === undefined) {
    throw new Error(errorMessage);
  }
  return value;
}
