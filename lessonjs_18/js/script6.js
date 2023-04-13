function getTable() {}
let table = document.createElement("table");
document.getElementById("tables").append(table);

function getColumnNumber() {
  let user = document.getElementById("num").value;
  for (let i = 0; i < 1; i++) {
    let row = table.insertRow();
    let el;
    let column;
    for (let j = 0; j < user; j++) {
      column = row.insertCell();
      el = document.createElement("input");
      el.setAttribute("type", "number");
      el.setAttribute("value", "0");
      el.classList.add("td");
      column.append(el);
    }
  }
}
document.getElementById("but").onclick = getColumnNumber;

function getMiddleScore() {
  let scores = document.querySelectorAll(".td");
  let sum = 0;
  for (const score of scores) {
    sum += parseInt(score.value);
  }
  let middleScore = sum / scores.length;
  document.getElementById("result").innerHTML = middleScore.toFixed(2);
}

window.onload = function () {
  document.getElementById("sum").onclick = getMiddleScore;
};
