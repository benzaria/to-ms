/* eslint-disable no-console */
export type msUnits = 'ms' | 's' | 'm' | 'h' | 'd' | 'w' | 'M' | 'y'

/**
 * A type representing the input parameter type for the `tms` function.
 */
export type msInput = Parameters<typeof tms>[0]
// | `${number}` | number
// | `${number}${msUnits}`

const s = 1e3, m = s * 60, h = m * 60, d = h * 24, w = d * 7, M = d * 30.436875, y = d * 365.25

/**
 * A record mapping time units to their corresponding millisecond values.
 */
export const msVal: Record<msUnits, number> = { ms: 1, s, m, h, d, w, M, y }

/**
 * Converts a time string with units to milliseconds.
 * @param {msInput} input - A string representing the time with units. Supported formats are:
 *   - `${number}s` for seconds
 *   - `${number}m` for minutes
 *   - `${number}h` for hours
 *   - `${number}d` for days
 *   - `${number}w` for weeks
 *   - `${number}M` for months
 *   - `${number}y` for years
 * @param {boolean} [catchError]  
 * @returns {number} The equivalent time in milliseconds.
 * @throws {Error} If the input string is in an invalid format.
 * @throws {TypeError} If the input is not a string.
 */
export default function tms(input: //? for IntelliSens
    | `${number}s`
    | `${number}m`
    | `${number}h`
    | `${number}d`
    | `${number}w`
    | `${number}M`
    | `${number}y`
    | `${number}ms`
    | `${number}`
    | number,
    catchError: boolean = false
): number {
    if (typeof input === "string") {
        const match = input.match(/^\s*([-+]?\s*\d*\.?\d+)\s*(ms|[smhdwMy]?)\s*$/)
        if (!match) {
            const formatError = 'Invalid time format, support:' + JSON.stringify(Object.keys(msVal))
            if (!catchError) throw new Error(formatError)
            return console.error(formatError), 0
        }
        return +match[1] * (msVal[match[2] as msUnits] ?? 1)
    }

    if (typeof input === 'number')
        return console.warn(`The Input was a number, no need for converting`), input

    const typeError = `Input must be a string or number. Received: ${input}, with typeof ${typeof input}`
    if (!catchError) throw new TypeError(typeError)
    return console.error(typeError), 0
}
