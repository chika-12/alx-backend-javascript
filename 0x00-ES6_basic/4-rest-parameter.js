export default function returnHowManyArguments(...args) {
  let count = 0;
  for (let val = 0; val < args.length; val += 1) {
    count += 1;
  }
  return count;
}
