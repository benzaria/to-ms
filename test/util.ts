/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

// Native way
function echo(...args: any[]) {
    console.log(...args)
}

echo.warn = console.warn
echo.err = console.error

const fn = function (this: any, cb?: (err: any, ...res: any[]) => void) {
    setTimeout(() => {
        if (cb)
            cb(null, this.str.toUpperCase());
    }, 1e3);
};

const obj = {

    fn: fn,
    str: 'string'

}

export { echo, fn, obj }