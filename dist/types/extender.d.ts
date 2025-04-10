type TmsExtend<T extends PropertyDescriptorMap> = {
    [K in keyof T]: number;
};
declare global {
    interface String extends TmsExtend<typeof defTmsMap> { }
}
declare const defTmsMap: {
    readonly ms: { readonly get: (this: `${number}`) => number; };
    readonly s: { readonly get: (this: `${number}`) => number; };
    readonly m: { readonly get: (this: `${number}`) => number; };
    readonly h: { readonly get: (this: `${number}`) => number; };
    readonly d: { readonly get: (this: `${number}`) => number; };
    readonly w: { readonly get: (this: `${number}`) => number; };
    readonly M: { readonly get: (this: `${number}`) => number; };
    readonly y: { readonly get: (this: `${number}`) => number; };
};
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
 *   - `y` for years
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
