let wishesAll = ["love", "money", "peace", "victory", "luck"];
function rendomIndex(arra) {
  let rendInd = Math.floor(Math.random() * arra.length);
  let wish = arra[rendInd];
  return wish;
}
window.onload = function () {
  // Створили новий тег
  let wishes1 = document.createElement("div");
  let wishes2 = document.createElement("div");
  let wishes3 = document.createElement("div");
  // додаем нове
  wishes1.innerHTML = `${rendomIndex(wishesAll)}`;
  wishes2.innerHTML = `${rendomIndex(wishesAll)}`;
  wishes3.innerHTML = `${rendomIndex(wishesAll)}`;
  // знаходимо тег куди хочемо додати
  const cont = document.getElementById("start");
  cont.append(wishes1);
  cont.append(wishes2);
  cont.append(wishes3);
};
