import { msUnits } from './index.js';

type TmsExtend<T extends PropertyDescriptorMap> = {
    [K in keyof T]: number;
};
declare global {
    interface String extends TmsExtend<typeof defTmsMap> {
    }
}
declare const defTmsMap: Record<msUnits, PropertyDescriptor>;
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
declare function tmsExtender<T extends PropertyDescriptorMap>(tmsMap?: T): TmsExtend<T>;

export { type TmsExtend, defTmsMap, tmsExtender };
