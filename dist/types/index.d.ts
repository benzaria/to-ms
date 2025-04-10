/**
 * A type representing the input Units type for the `tms` function.
 */
type msUnits = 'ms' | 's' | 'm' | 'h' | 'd' | 'w' | 'M' | 'y';
/**
 * A type representing the input parameter type for the `tms` function.
 */
type msInput = `${number}` | number | `${number}${msUnits}`;
/**
 * A record mapping time units to their corresponding millisecond values.
 */
declare const msVal: Record<msUnits, number>;
/**
 * Converts a time string with units to milliseconds.
 * @param {msInput} input A string representing the time with units. Supported formats are:
 *   - `${number}s` for seconds
 *   - `${number}m` for minutes
 *   - `${number}h` for hours
 *   - `${number}d` for days
 *   - `${number}w` for weeks
 *   - `${number}M` for months
 *   - `${number}y` for years
 *   - `${number}ms`
 * @param {boolean} [catchError] Handle and Log Errors insted of throw.
 * @returns {number} The equivalent time in milliseconds or `-1` on Error.
 * @throws {Error} If the input string is in an invalid format.
 * @throws {TypeError} If the input is not a string or number.
 */
declare function tms(input: `${number}s` | `${number}m` | `${number}h` | `${number}d` | `${number}w` | `${number}M` | `${number}y` | `${number}ms` | `${number}` | number, catchError?: boolean): number;

export { tms as default, type msInput, type msUnits, msVal, tms };
