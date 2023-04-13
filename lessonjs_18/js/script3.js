function getAgeUser() {
  const yearUser = parseInt(document.getElementById("year").value);
  let dataN = new Date().getFullYear();
  const ageUser = dataN - yearUser;
  document.getElementById("age").value = ageUser;
}
window.onload = function () {
  document.getElementById("year").onchange = getAgeUser;
};
