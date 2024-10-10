interface Student{
  firstName : string;
  lastName : string;
  age: number;
  location: string
}
const std1 : Student = {
  firstName : 'chika',
  lastName : 'mark',
  age : 69,
  location : 'africa'
}
const std2: Student = {
  firstName : 'peter',
  lastName  : 'pedro',
  age : 56,
  location : 'america'
}
const studentsList: Student[] = [std1, std2];



const table = document.createElement('table');


const headerRow = document.createElement('tr');
const header1 = document.createElement('th');
header1.textContent = 'First Name';
const header2 = document.createElement('th');
header2.textContent = 'Location';

headerRow.appendChild(header1);
headerRow.appendChild(header2);
table.appendChild(headerRow);


studentsList.forEach((student) => {
  const row = document.createElement('tr');
  
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);
  
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  row.appendChild(locationCell);
  
  table.appendChild(row);
});

document.body.appendChild(table);

