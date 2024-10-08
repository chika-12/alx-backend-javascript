export default function getStudentIdsSum(value) {
  const sum = value.reduce((accumulator, students) => accumulator + students.id, 0);
  return sum;
}
