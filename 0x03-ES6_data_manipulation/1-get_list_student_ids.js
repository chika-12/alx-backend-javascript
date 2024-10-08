export default function getListStudentIds(args) {
  if (!Array.isArray(args)) {
    return [];
  }
  const myMap = args.map((val) => val.id);
  return myMap;
}
