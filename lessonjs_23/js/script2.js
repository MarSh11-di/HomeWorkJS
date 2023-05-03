let strinline = ["jhdj3", "fko5005", "ljewefjk", "kdfhgjer", "wejfej45"];
//Задача 1
let reg = /\d/;
let result = [];
strinline.forEach((elem) => {
  if (reg.test(elem)) result.push(elem);
});
let n = document.querySelector(".number");
n.innerHTML = `<h3>Масив рядків:</h3> ${strinline} <br> <h3>Масив тiльки тих рядкiв дє є цифри:</h3> ${result}`;

//Задача 2
let result1 = [];
strinline.forEach((elem) => {
  if (!reg.test(elem)) result1.push(elem);
});
let n1 = document.querySelector(".no-number");
n1.innerHTML = `<h3>Масив рядків:</h3> ${strinline} <br> <h3>Масив тiльки тих рядкiв дє нємае цифр:</h3> ${result1}`;

//Задача 3

let result2 = [];
strinline.forEach((elem) => {
  if (/[aeiou]/.test(elem)) result2.push(elem);
});
let n2 = document.querySelector(".vowel");
n2.innerHTML = `<h3>Масив рядків:</h3> ${strinline} <br> <h3>Масив тiльки тих рядкiв дє є голосні літери:</h3> ${result2}`;

//Задача 4
let result3 = [];
strinline.forEach((elem) => {
  if (!/[aeiou]/.test(elem)) result3.push(elem);
});
let n3 = document.querySelector(".no-vowel");
n3.innerHTML = `<h3>Масив рядків:</h3> ${strinline} <br> <h3>Масив тiльки тих рядкiв дє немає голосних літер:</h3> ${result3}`;

//Задача 5
let result4 = [];
strinline.forEach((elem) => {
  if (/(1|3)/.test(elem)) result4.push(elem);
});
let n4 = document.querySelector(".or");
n4.innerHTML = `<h3>Масив рядків:</h3> ${strinline} <br> <h3>Масив тiльки тих рядкiв дє  є або цифра 1 або цифра 3:</h3> ${result4}`;

//Задача 6
let text = "jhdj3 fko5005, ljewefjk kdfhgjer - wejfej45!";
let result5 = text.match(/\d/g);
let n5 = document.querySelector(".number-match");
n5.innerHTML = `<h3>Рядок тексту:</h3> ${text} <br> <h3>Масив усіх чисел, які є у тексті:</h3> ${result5}`;

//Задача 7
let result6 = text.match(/\W/g);
let n6 = document.querySelector(".punctuation");
n6.innerHTML = `<h3>Рядок тексту:</h3> ${text} <br> <h3>Масив усіх знакiв пунктуації:</h3> ${result6}`;

//Задача 8
//можно ли при таком задании вывести без пробелов?
//let result7 = text.match(/\w\s*\W\s*/g)
let result7 = text.match(/\w\s*[,!.-]\s*/g);
let n7 = document.querySelector(".punctuation-marks");
n7.innerHTML = `<h3>Рядок тексту:</h3> ${text} <br> <h3>Масив усіх знакiв які розділені
      розділовими знаками.:</h3> ${result7}`;

//Задача 9
let textData =
  "jhdj3 22.10.2023 fko5005, 35 ljewefjk 24-12-1967 kdfhgjer - 67 wejfej45!";
let test = /\d{2}\.\d{2}\.\d{4}/.test(textData);
let test1 = /\d{2}\-\d{2}\-\d{4}/.test(textData);
console.log(test);
console.log(test1);
let result8 = textData.match(/\d{2}\.\d{2}\.\d{4}/g);
let result9 = textData.match(/\d{2}\-\d{2}\-\d{4}/g);
let n8 = document.querySelector(".data");
n8.innerHTML = `<h3>Рядок тексту:</h3> ${textData} <br> <h3> Дата у форматі:</h3> ${result8}<br>${result9}`;

//Задача 10
let result10 = textData.match(/\s\d{2}\s/g);
console.log(result10);
let numDigit = result10.reduce((prevSum, dig) => ++prevSum, 0);
let n9 = document.querySelector(".digit");
n9.innerHTML = `<h3>Рядок тексту:</h3> ${textData} <br> <h3> кількість двоцифрових чисел у
      рядку.:</h3> ${numDigit}`;

//Задача 11
let cartList =
  "4142-3433-2323-3434 fjhgf 3526-9674-3925-5472 gdiqdiuef 4536-5867-5646-4567-4567, 2345-5678-5647-2947";
let test3 = /\d{4}-\d{4}-\d{4}-\d{4}/.test(cartList);
console.log(test3);
let result11 = cartList.match(/\b\d{4}-\d{4}-\d{4}-\d{4}\b/g);
//не понимаю почему выводит номер где пять секций убирая последнюю секцию ( 4536-5867-5646-4567-4567) ведь я указала начало и конец слова
let n10 = document.querySelector(".carta");
n10.innerHTML = `<h3>Рядок тексту:</h3> ${cartList} <br> <h3> Усі номери банківських карток </h3> ${result11}`;

//Задача 12
let n11 = document.querySelector(".gov");
let url = "https://www.kmu.gov.ua/";
if (url.includes("gov"))
  n11.innerHTML = `<h3>Рядок тексту:</h3> ${url} <br> <h3> Так це урядовий сайт </h3> `;
else
  n11.innerHTML = `<h3>Рядок тексту:</h3> ${url} <br> <h3> Це не урядовий сайт </h3> `;

//Задача 13
let year = "2034 1876 2022 1934 3456 9856";
let arr = year.split(" ");
let result12 = arr.filter((ele) => ele > 2021);
let n12 = document.querySelector(".year");
n12.innerHTML = `<h3>Рядок тексту:</h3> ${year} <br> <h3> Усі роки після 2021 року </h3> ${result12}`;

//Задача 14
let n13 = document.querySelector(".telefon");
let tel = "+3804567324";
if (tel.startsWith("+38"))
  n13.innerHTML = `<h3>Рядок тексту:</h3> ${tel} <br> <h3> Цей телефон е телефоном з
      України </h3>`;
else
  n13.innerHTML = `<h3>Рядок тексту:</h3> ${tel} <br> <h3> Цей телефон не е телефоном з
      України </h3>`;

//Задача 15
let nome = "Карпенко Сергiй";
let result13 = nome.split(" ").join("-");
let n14 = document.querySelector(".hyphen");
n14.innerHTML = `<h3>Рядок тексту:</h3> ${nome} <br> <h3> Замінити пробіл на дефіс. </h3> ${result13}`;

//Задача 16
let data = "23.06.2023";
let result14 = data.split(".").join("/");
let n15 = document.querySelector(".format");
n15.innerHTML = `<h3>Рядок тексту:</h3> ${data} <br> <h3> Замінити у форматі «день/місяць/рік» </h3> ${result14}`;

//Задача 17
let n16 = document.querySelector(".day");
let day = prompt("введiть день тижня з 1 до 7", "4");
if (day == 6 || day == 7)
  n16.innerHTML = `<h3>День:</h3> ${day} <br> <h3> Цей день е вихiдним`;
else n16.innerHTML = `<h3>День:</h3> ${day} <br> <h3> Цей день е робочим`;
