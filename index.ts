type units = 'ms' | 's' | 'm' | 'h' | 'd' | 'w' | 'M' | 'y'

/**
 * A type representing the input parameter type for the `qms` function.
 */
export type msType = Parameters<typeof qms>[0]

const s = 1e3, m = s * 60, h = m * 60, d = h * 24, w = d * 7, M = d * 30.44, y = d * 365.25

/**
 * A record mapping time units to their corresponding millisecond values.
 */
export const units: Record<units, number> = { ms: 1, s, m, h, d, w, M, y }

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
export default function qms(input:
    | `${number}`
    | `${number}s`
    | `${number}m`
    | `${number}h`
    | `${number}d`
    | `${number}w`
    | `${number}M`
    | `${number}y`
    | `${number}ms`
): number {
    if (typeof input === "string") {
        const match = input.match(/^\s*([-+]?\s*\d*\.?\d+)\s*(ms|[smhdwMy]?)\s*$/)
        if (!match) throw new Error('Invalid time format, support:' + JSON.stringify(Object.keys(units)))

        return (+match[1]) * (units[match[2] as units] ?? 1)
    }
    else if (typeof input === 'number') {
        console.warn(`The Input was a number, no need for converting`)
        return input
    }

    throw new TypeError(`Input must be a string or number. Received: ${input}, with typeof ${typeof input}`)
}
