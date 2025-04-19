import tms, { msVal } from "./index.mjs";
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
export {
  defTmsMap,
  tmsExtender
};
