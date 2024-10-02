export default function createEmployeesObject(departmentName, employees) {
  const newEmployees = [];
  for (const employee of employees) {
    newEmployees.push(employee);
  }
  return { [departmentName]: newEmployees };
}
