export default function cleanSet(setArr, str) {
  if (str === '') {
    return '';
  }
  const arr = Array.from(setArr);
  const len = str.length;
  let newStr = '';
  for (let index = 0; index < arr.length; index += 1) {
    const strAs = arr[index];
    if (strAs.startsWith(str)) {
      newStr += `${strAs.slice(len)}-`;
    }
  }
  return newStr ? newStr.slice(0, -1) : newStr;
}
