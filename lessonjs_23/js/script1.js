//Задача 1
let returnData = new Date(2023, 4, 56);
let r = document.querySelector(".return");
r.innerHTML = `<h3>Дата на момент його повернення:${returnData}</h3>`;

//Задача 2

function getDateProduction(year, month, day, expiratiotDate) {
  let dateProduct = new Date();
  dateProduct.setFullYear(year, month - 1, day);
  dateProduct.setDate(dateProduct.getDate() + expiratiotDate);
  return dateProduct;
}

function getExpiration(year, month, day, expiratiotDate) {
  let dateToday = new Date();
  let productDate = getDateProduction(year, month, day, expiratiotDate);
  if (dateToday <= productDate) return "Придатний";
  else return "Не придатний";
}
let dateExp = getExpiration(2023, 4, 25, 15);
let d = document.querySelector(".expiration");
d.innerHTML = `<h3>На данний момент продукт:${dateExp}</h3>`;

// Задача 3

function getRandomNumer(min, max) {
  return min + Math.floor(Math.random() * max - min + 1);
}
let numerArr = [];
for (let i = 0; i < 1000; i++) {
  let rand = getRandomNumer(1, 800);
  numerArr.push(rand);
}

function getTimeSortBubble(arr) {
  let start = Date.now();
  let chenged;
  do {
    chenged = false;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        let tmp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmp;
        chenged = true;
      }
    }
  } while (chenged);
  let finish = Date.now();
  let time = finish - start;
  return time;
}
function getTimeSortInclusion(arr) {
  let start = Date.now();
  let key, i;
  for (let k = 1; k < arr.length; k++) {
    key = arr[k];
    i = k - 1;
    while (i > 0 && arr[i] > key) {
      arr[i + 1] = arr[i];
      i = i - 1;
    }
    arr[i + 1] = key;
  }
  let finish = Date.now();
  let time = finish - start;
  return time;
}
let timeBubble = getTimeSortBubble(numerArr);
let timeInclusion = getTimeSortInclusion(numerArr);
let s = document.querySelector(".sort");
s.innerHTML = `<h3>Час сортування бульбашкою - ${timeBubble} мiлiсекунд<br> Час сортування вставкою - ${timeInclusion} мiлiсекунд</h3>`;

//Задача 4

function getSolutionTask() {
  let mess;
  let num1 = getRandomNumer(1, 800);
  let num2 = getRandomNumer(1, 800);
  let sum = num1 + num2;
  let start = Date.now();
  let askAnswer = parseFloat(prompt(`${num1} + ${num2} - Ваша вiдповiдь`, ""));
  let finish = Date.now();
  if (askAnswer === sum) mess = "Задача вирiшина вiрно";
  else mess = "Задача вирiшина не вiрно";
  let time = Math.ceil((finish - start) / 1000);
  return [time, mess];
}
let [time, mess] = getSolutionTask();

let t = document.querySelector(".task");
t.innerHTML = ` <h3>${mess} <br> На вирiшення задачi було витрачено- ${time} секунд</h3>`;
