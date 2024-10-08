export default function getStudentsByLocation(args, str) {
  const myFill = args.filter((val) => val.location === str);
  return myFill;
}
