/******/ (() => { // webpackBootstrap
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
var std1 = {
    firstName: 'chika',
    lastName: 'mark',
    age: 69,
    location: 'africa'
};
var std2 = {
    firstName: 'peter',
    lastName: 'pedro',
    age: 56,
    location: 'america'
};
var studentsList = [std1, std2];
var table = document.createElement('table');
var headerRow = document.createElement('tr');
var header1 = document.createElement('th');
header1.textContent = 'First Name';
var header2 = document.createElement('th');
header2.textContent = 'Location';
headerRow.appendChild(header1);
headerRow.appendChild(header2);
table.appendChild(headerRow);
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);
    var locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
    table.appendChild(row);
});
document.body.appendChild(table);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFNQSxJQUFNLElBQUksR0FBYTtJQUNyQixTQUFTLEVBQUcsT0FBTztJQUNuQixRQUFRLEVBQUcsTUFBTTtJQUNqQixHQUFHLEVBQUcsRUFBRTtJQUNSLFFBQVEsRUFBRyxRQUFRO0NBQ3BCO0FBQ0QsSUFBTSxJQUFJLEdBQVk7SUFDcEIsU0FBUyxFQUFHLE9BQU87SUFDbkIsUUFBUSxFQUFJLE9BQU87SUFDbkIsR0FBRyxFQUFHLEVBQUU7SUFDUixRQUFRLEVBQUcsU0FBUztDQUNyQjtBQUNELElBQU0sWUFBWSxHQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBSTdDLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFHOUMsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvQyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDO0FBQ25DLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0MsT0FBTyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7QUFFakMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQixTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7QUFHN0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87SUFDM0IsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV6QyxJQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25ELGFBQWEsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUM5QyxHQUFHLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRS9CLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsWUFBWSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQzVDLEdBQUcsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFOUIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QixDQUFDLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBTdHVkZW50e1xuICBmaXJzdE5hbWUgOiBzdHJpbmc7XG4gIGxhc3ROYW1lIDogc3RyaW5nO1xuICBhZ2U6IG51bWJlcjtcbiAgbG9jYXRpb246IHN0cmluZ1xufVxuY29uc3Qgc3RkMSA6IFN0dWRlbnQgPSB7XG4gIGZpcnN0TmFtZSA6ICdjaGlrYScsXG4gIGxhc3ROYW1lIDogJ21hcmsnLFxuICBhZ2UgOiA2OSxcbiAgbG9jYXRpb24gOiAnYWZyaWNhJ1xufVxuY29uc3Qgc3RkMjogU3R1ZGVudCA9IHtcbiAgZmlyc3ROYW1lIDogJ3BldGVyJyxcbiAgbGFzdE5hbWUgIDogJ3BlZHJvJyxcbiAgYWdlIDogNTYsXG4gIGxvY2F0aW9uIDogJ2FtZXJpY2EnXG59XG5jb25zdCBzdHVkZW50c0xpc3Q6IFN0dWRlbnRbXSA9IFtzdGQxLCBzdGQyXTtcblxuXG5cbmNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcblxuXG5jb25zdCBoZWFkZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuY29uc3QgaGVhZGVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG5oZWFkZXIxLnRleHRDb250ZW50ID0gJ0ZpcnN0IE5hbWUnO1xuY29uc3QgaGVhZGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG5oZWFkZXIyLnRleHRDb250ZW50ID0gJ0xvY2F0aW9uJztcblxuaGVhZGVyUm93LmFwcGVuZENoaWxkKGhlYWRlcjEpO1xuaGVhZGVyUm93LmFwcGVuZENoaWxkKGhlYWRlcjIpO1xudGFibGUuYXBwZW5kQ2hpbGQoaGVhZGVyUm93KTtcblxuXG5zdHVkZW50c0xpc3QuZm9yRWFjaCgoc3R1ZGVudCkgPT4ge1xuICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICBcbiAgY29uc3QgZmlyc3ROYW1lQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGZpcnN0TmFtZUNlbGwudGV4dENvbnRlbnQgPSBzdHVkZW50LmZpcnN0TmFtZTtcbiAgcm93LmFwcGVuZENoaWxkKGZpcnN0TmFtZUNlbGwpO1xuICBcbiAgY29uc3QgbG9jYXRpb25DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgbG9jYXRpb25DZWxsLnRleHRDb250ZW50ID0gc3R1ZGVudC5sb2NhdGlvbjtcbiAgcm93LmFwcGVuZENoaWxkKGxvY2F0aW9uQ2VsbCk7XG4gIFxuICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xufSk7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGFibGUpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=