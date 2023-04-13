function getTotalResultSum() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const sum = num1 + num2;
  document.getElementById("result").innerHTML = sum;
}
function getTotalResultMinus() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const minus = num1 - num2;
  document.getElementById("result").innerText = minus;
}
function getTotalResultMultiply() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const multiply = num1 * num2;
  document.getElementById("result").innerText = multiply;
}
function getTotalResultDivide() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const divide = num1 / num2;
  document.getElementById("result").innerText = divide;
}
// Перший варiант
/*window.onload = function () {
  document.querySelector(".sum").onclick = getTotalResultSum;
  document.querySelector(".min").onclick = getTotalResultMinus;
  document.querySelector(".multi").onclick = getTotalResultMultiply;
  document.querySelector(".divide").onclick = getTotalResultDivide;
};*/
// Другий варiант
window.onload = function () {
  document.querySelectorAll("button")[0].onclick = getTotalResultSum;
  document.querySelectorAll("button")[1].onclick = getTotalResultMinus;
  document.querySelectorAll("button")[2].onclick = getTotalResultMultiply;
  document.querySelectorAll("button")[3].onclick = getTotalResultDivide;
};
