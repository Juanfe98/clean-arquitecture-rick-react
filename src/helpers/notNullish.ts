/**
 * A filter function to reject null or undefined values. Narrows the type
 * correctly for use in `array.filter()`
 */
 export default function notNullish<T>(
  value: T | null | undefined,
): value is T {
  return value != null;
}
