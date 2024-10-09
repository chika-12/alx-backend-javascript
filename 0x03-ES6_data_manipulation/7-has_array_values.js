export default function hasValuesFromArray(setArray, arr) {
  return arr.every((element) => setArray.has(element));
}
