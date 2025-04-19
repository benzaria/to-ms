/* eslint-disable no-console */

/**
 * A type representing the input Units type for the `tms` function.
 */
type msUnits = 'ms' | 's' | 'm' | 'h' | 'd' | 'w' | 'M' | 'Y'

/**
 * A type representing the input parameter type for the `tms` function.
 */
type msInput =
    | `${number}` | number
    | `${number}${msUnits}`

const
    s = 1e3,
    m = s * 60,
    h = m * 60,
    d = h * 24,
    w = d * 7,
    M = d * 30.436875,
    Y = d * 365.25

/**
 * A record mapping time units to their corresponding millisecond values.
 */
const msVal: Record<msUnits, number> = { ms: 1, s, m, h, d, w, M, Y }

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
function tms(input: //? for IntelliSens
    | `${number}s`
    | `${number}m`
    | `${number}h`
    | `${number}d`
    | `${number}w`
    | `${number}M`
    | `${number}Y`
    | `${number}ms`
    | `${number}`
    | number,
    catchError: boolean = false
): number {
    if (typeof input === "string") {
        const match = input.match(/^\s*([-+]?\s*\d*\.?\d+)\s*(ms|[smhdwMY]?)\s*$/)
        if (match)
            return +match[1] * (msVal[match[2] as msUnits] ?? 1)

        const formatError = `Invalid time format ${input}, support: ${JSON.stringify(Object.keys(msVal))}`
        if (!catchError) throw new Error(formatError)
        return console.error(formatError), -1
    }

    if (typeof input === 'number')
        return console.warn(`The Input was a number, no need for converting`), input

    const typeError = `Input must be a string or number. Received: ${input}, with typeof ${typeof input}`
    if (!catchError) throw new TypeError(typeError)
    return console.error(typeError), -1
}

export {
    tms,
    msVal,
    tms as default,
    type msInput,
    type msUnits,
}