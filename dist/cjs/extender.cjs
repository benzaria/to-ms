"use strict";
var {tms, msVal} = require("./index.cjs");
const defTmsMap = Object.fromEntries(
  Object.entries(msVal).map(([key]) => [
    key,
    { get() {
      return tms(`${this}${key}`);
    } }
  ])
);
function tmsExtender(tmsMap) {
  return Object.defineProperties(
    String.prototype,
    tmsMap ?? defTmsMap
  ), {};
}
tmsExtender(defTmsMap);
// Annotate the CommonJS export names for ESM import in node:
module.exports = {
  defTmsMap,
  tmsExtender
};
