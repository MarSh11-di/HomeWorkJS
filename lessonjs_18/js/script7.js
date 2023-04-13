function getTotalPrice() {
  const sum1 = parseInt(document.querySelector("select").value);

  const food = document.getElementsByName("food");
  let sum2 = 0;
  for (let el of food) {
    if (el.checked) sum2 += parseInt(el.value);
  }
  const guides = document.getElementsByName("guid");
  let sum3 = 0;
  for (let ele of guides) {
    if (ele.checked) sum3 += parseInt(ele.value);
  }
  let totalSum = sum1 + sum2 + sum3;
  document.getElementById("result").innerHTML = totalSum;
}
window.onload = function () {
  document.getElementById("but").onclick = getTotalPrice;
};
