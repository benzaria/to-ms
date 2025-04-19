import tms, { type msUnits, msVal } from '.'

type TmsExtend<T extends PropertyDescriptorMap> = { [K in keyof T]: number }
declare global { interface String extends TmsExtend<typeof defTmsMap> { } }

const defTmsMap = Object.fromEntries(
    (Object.entries(msVal) as any).map(([key]: [msUnits]) => [
        key,
        { get(this: `${number}`) { return tms(`${this}${key}`) } }
    ])
) as Record<msUnits, PropertyDescriptor> satisfies PropertyDescriptorMap

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
