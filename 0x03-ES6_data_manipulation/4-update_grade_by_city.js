export default function updateStudentGradeByCity(args, str, value) {
  const myFill = args.filter((element) => element.location === str);
  const myMap = myFill.map((element) => {
    const newGrade = value.find((v) => v.studentId === element.id);
    if (newGrade) {
      element.grade = newGrade.grade;
    } else {
      element.grade = 'N/A';
    }
    return element;
  });
  return myMap;
}
