class IsNotNumber extends Error {
  constructor() {
    super();
    this.message = "Повинно бути число";
    this.name = "IsNotNumber";
  }
}
class IsOutOfRange extends Error {
  constructor(value) {
    super();
    this.value = value;
    this.message = "Число виходить за межi дiапазону ";
    this.name = "IsOutOfRange";
  }
}
class IsHolidays extends Error {
  constructor() {
    super();
    this.message = "У цей мiсяць канiкули ";
    this.name = "IsHolidays";
  }
}
// припустимо що канiкули у сiчнi, червнi,липнi, серпнi
function validate() {
  const userMonth = parseInt(prompt("Введiть мiсяць", "4"));
  const userScors = parseInt(prompt("Введiть oцiнку вд 1 до 100", "30"));
  let correct = true;
  try {
    if (isNaN(userMonth)) throw new IsNotNumber();
    if (userMonth < 1 || userMonth > 12) throw new IsOutOfRange();
    if ((userMonth >= 6 && userMonth <= 8) || userMonth === 1)
      throw new IsHolidays();
    if (isNaN(userScors)) throw new IsNotNumber();
    if (userScors < 1 || userScors > 100) throw new IsOutOfRange();
  } catch (err) {
    if (err instanceof IsNotNumber) {
      console.log(err.message);
    } else if (err instanceof IsOutOfRange) {
      console.log(err.message);
    } else if (err instanceof IsHolidays) {
      console.log(err.message);
    }
  } finally {
    if (correct) {
      if (userMonth !== 12 && userMonth !== 5 && userScors < 50)
        console.log(" Ви зможете виправити оцінку");
      else console.log(" Ви не зможете виправити оцінку");
    }
  }
}
let valid = validate();
