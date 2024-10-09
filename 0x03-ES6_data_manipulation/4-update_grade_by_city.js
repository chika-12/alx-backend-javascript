export default function updateStudentGradeByCity(args, str, value) {
  const myFill = args.filter((element) => element.location === str);
  const myMap = myFill.map((element) => {
    const newGrade = value.find((v) => v.studentId === element.id);
    return {
      ...element,
      grade: newGrade ? newGrade.grade : 'N/A',
    };
  });
  return myMap;
}
