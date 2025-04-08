"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  default: () => tms,
  msVal: () => msVal
});
module.exports = __toCommonJS(index_exports);
var msVal = { ms: 1, s: 1e3, m: 6e4, h: 36e5, d: 864e5, w: 6048e5, M: 2629746e3, y: 315576e5 };
function tms(input, catchError = !1) {
  if (typeof input == "string") {
    let match = input.match(/^\s*([-+]?\s*\d*\.?\d+)\s*(ms|[smhdwMy]?)\s*$/);
    if (!match) {
      let formatError = "Invalid time format, support:" + JSON.stringify(Object.keys(msVal));
      if (!catchError) throw new Error(formatError);
      return console.error(formatError), void 0;
    }
    return +match[1] * (msVal[match[2]] ?? 1);
  } else if (typeof input == "number")
    return console.warn("The Input was a number, no need for converting"), input;
  let typeError = `Input must be a string or number. Received: ${input}, with typeof ${typeof input}`;
  if (!catchError) throw new TypeError(typeError);
  return console.error(typeError), void 0;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  msVal
});
