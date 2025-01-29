// quick-ms/index.ts
var units = { ms: 1, s: 1e3, m: 6e4, h: 36e5, d: 864e5, w: 6048e5, M: 2630016e3, y: 315576e5 };
function qms(input) {
  if (typeof input == "string") {
    let match = input.match(/^\s*([-+]?\s*\d*\.?\d+)\s*(ms|[smhdwMy]?)\s*$/);
    if (!match) throw new Error("Invalid time format, support:" + JSON.stringify(Object.keys(units)));
    return +match[1] * (units[match[2]] ?? 1);
  } else if (typeof input == "number")
    return console.warn("The Input was a number, no need for converting"), input;
  throw new TypeError(`Input must be a string or number. Received: ${input}, with typeof ${typeof input}`);
}
export { qms as default, units };
