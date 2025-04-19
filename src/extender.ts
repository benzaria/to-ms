import tms from '.'

type TmsExtend<T extends PropertyDescriptorMap> = { [K in keyof T]: number }
declare global { interface String extends TmsExtend<typeof defTmsMap> { } }

const defTmsMap = {
    ms: { get(this: `${number}`) { return tms(`${this}ms`) } },
    s: { get(this: `${number}`) { return tms(`${this}s`) } },
    m: { get(this: `${number}`) { return tms(`${this}m`) } },
    h: { get(this: `${number}`) { return tms(`${this}h`) } },
    d: { get(this: `${number}`) { return tms(`${this}d`) } },
    w: { get(this: `${number}`) { return tms(`${this}w`) } },
    M: { get(this: `${number}`) { return tms(`${this}M`) } },
    Y: { get(this: `${number}`) { return tms(`${this}y`) } },
} as const satisfies PropertyDescriptorMap

/**
 * Extend the String Prototype with custom props to change string to ms.
 * ```typescript
 * console.log('10'.s) //=> 10000
 * ```
 *   - `s` for seconds
 *   - `m` for minutes
 *   - `h` for hours
 *   - `d` for days
 *   - `w` for weeks
 *   - `M` for months
 *   - `Y` for years
 *   - `ms`
 * @param {T} [tmsMap]
 * @return {TmsExtend<T>} {TmsExtend<T>} Type to extend the String interface,
 * In case of using your Custom Props. add this line: 
 * ```typescript
 * declare global { interface String extends TmsExtend<typeof tmsMap> {} }
 * //or
 * const extender = tmsExtender(tmsMap)
 * declare global { interface String extends typeof extender {} }
 * ```
 */
function tmsExtender<T extends PropertyDescriptorMap>(
    tmsMap?: T
): TmsExtend<T> {
    Object.defineProperties(
        String.prototype,
        tmsMap ?? defTmsMap
    )
    return {} as TmsExtend<T>
}

tmsExtender(defTmsMap)
export {
    type TmsExtend,
    tmsExtender,
    defTmsMap
}
