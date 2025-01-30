/* eslint-disable no-console */
var msVal = { ms: 1, s: 1e3, m: 6e4, h: 36e5, d: 864e5, w: 6048e5, M: 2629746e3, y: 315576e5 };
function tms(input, catchError = !1) {
  if (typeof input == "string") {
    let match = input.match(/^\s*([-+]?\s*\d*\.?\d+)\s*(ms|[smhdwMy]?)\s*$/);
    if (!match) {
      let formatError = "Invalid time format, support:" + JSON.stringify(Object.keys(msVal));
      if (!catchError) throw new Error(formatError);
      return console.error(formatError);
    }
    return +match[1] * (msVal[match[2]] ?? 1);
  } else if (typeof input == "number")
    return console.warn("The Input was a number, no need for converting"), input;
  let typeError = `Input must be a string or number. Received: ${input}, with typeof ${typeof input}`;
  if (!catchError) throw new TypeError(typeError);
  return console.error(typeError);
}
export { tms as default, msVal };
