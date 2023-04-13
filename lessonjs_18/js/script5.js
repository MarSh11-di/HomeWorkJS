function rendomNum() {
  let randomNumer = 1 + Math.floor(Math.random() * 10);
  return randomNumer;
}
let table = document.createElement("table");
document.getElementById("tables").append(table);
// Создаем строки
let row1 = document.createElement("tr");
table.append(row1);
let row2 = document.createElement("tr");
table.append(row2);
let row3 = document.createElement("tr");
table.append(row3);
//Создаем столбцы к первой строке
let column1row1 = document.createElement("td");
column1row1.innerHTML = `${rendomNum()}`;
row1.append(column1row1);
let column2row1 = document.createElement("td");
column2row1.innerHTML = `${rendomNum()}`;
row1.append(column2row1);
let column3row1 = document.createElement("td");
column3row1.innerHTML = `${rendomNum()}`;
row1.append(column3row1);
let column4row1 = document.createElement("td");
column4row1.innerHTML = `${rendomNum()}`;
row1.append(column4row1);
//Создаем столбцы ко второй строке
let column1row2 = document.createElement("td");
column1row2.innerHTML = `${rendomNum()}`;
row2.append(column1row2);
let column2row2 = document.createElement("td");
column2row2.innerHTML = `${rendomNum()}`;
row2.append(column2row2);
let column3row2 = document.createElement("td");
column3row2.innerHTML = `${rendomNum()}`;
row2.append(column3row2);
let column4row2 = document.createElement("td");
column4row2.innerHTML = `${rendomNum()}`;
row2.append(column4row2);
//Создаем столбцы к третьей строке
let column1row3 = document.createElement("td");
column1row3.innerHTML = `${rendomNum()}`;
row3.append(column1row3);
let column2row3 = document.createElement("td");
column2row3.innerHTML = `${rendomNum()}`;
row3.append(column2row3);
let column3row3 = document.createElement("td");
column3row3.innerHTML = `${rendomNum()}`;
row3.append(column3row3);
let column4row3 = document.createElement("td");
column4row3.innerHTML = `${rendomNum()}`;
row3.append(column4row3);
