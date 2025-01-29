/**
 * A type representing the input parameter type for the `qms` function.
 */
type msType = Parameters<typeof qms>[0];
type units = 'ms' | 's' | 'm' | 'h' | 'd' | 'w' | 'M' | 'y';
/**
 * A record mapping time units to their corresponding millisecond values.
 */
declare const units: Record<units, number>;
/**
 * Converts a time string with units to milliseconds.
 * @param input - A string representing the time with units. Supported formats are:
 *   - `${number}s` for seconds
 *   - `${number}m` for minutes
 *   - `${number}h` for hours
 *   - `${number}d` for days
 *   - `${number}w` for weeks
 *   - `${number}M` for months
 *   - `${number}y` for years
 * @returns The equivalent time in milliseconds.
 * @throws {Error} If the input string is in an invalid format.
 * @throws {TypeError} If the input is not a string.
 */
declare function qms(input: `${number}` | `${number}s` | `${number}m` | `${number}h` | `${number}d` | `${number}w` | `${number}M` | `${number}y` | `${number}ms`): number;

export { qms as default, type msType, units };
