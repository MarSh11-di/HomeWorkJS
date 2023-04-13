function getConversion() {
  const grn = parseFloat(document.getElementById("grn").value);
  const exchangeRateEuro = 42;
  const exchangeRateDollar = 39;
  const euroValue = grn / exchangeRateEuro;
  const dollarValue = grn / exchangeRateDollar;
  document.getElementById("euro").value = euroValue.toFixed(2);
  document.getElementById("dolar").value = dollarValue.toFixed(2);
}
window.onload = function () {
  document.querySelector("button").onclick = getConversion;
};
// Другий варiант якщо автоматичне ко8нвертування без кнопки
/*window.onload = function () {
  document.getElementById("grn").onchange = getConversion;
};*/
