"use strict";
var { tms } = require("./index.cjs");
const defTmsMap = {
  ms: { get() { return tms(`${this}ms`); } },
  s: { get() { return tms(`${this}s`); } },
  m: { get() { return tms(`${this}m`); } },
  h: { get() { return tms(`${this}h`); } },
  d: { get() { return tms(`${this}d`); } },
  w: { get() { return tms(`${this}w`); } },
  M: { get() { return tms(`${this}M`); } },
  y: { get() { return tms(`${this}y`); } }
};
function tmsExtender(tmsMap) {
  return Object.defineProperties(
    String.prototype,
    tmsMap ?? defTmsMap
  ), {};
}
tmsExtender(defTmsMap);
module.exports = {
  defTmsMap,
  tmsExtender
};
