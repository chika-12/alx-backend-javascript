export default function setFromArray(arr) {
  const mySet = new Set();
  arr.forEach((val) => mySet.add(val));
  return mySet;
}
