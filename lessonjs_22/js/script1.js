class IsNoKeepOn extends Error {
  constructor() {
    super();
    this.name = "NoKeepOn";
    this.message = "Не можна зняти, не достатньо коштiв";
  }
}
class IsNoKeepOnCreditMoney extends Error {
  constructor() {
    super();
    this.name = "IsNoKeepOnCreditMoney";
    this.message = "Не можна зняти, перевищення лiмiту кредитних коштiв";
  }
}

class Client {
  #amountMoneyInAccount;
  constructor(surname, firstName, amountMoneyInAccount) {
    this.id = new Date().getTime();
    this.firstName = firstName;
    this.surname = surname;
    this.AmountMoneyInAccount = amountMoneyInAccount;
  }
  get AmountMoneyInAccount() {
    return this.#amountMoneyInAccount;
  }
  set AmountMoneyInAccount(value) {
    try {
      if (value < 0) throw new IsNoKeepOn();
      this.#amountMoneyInAccount = value;
    } catch (err) {
      if (err instanceof IsNoKeepOn) {
        console.log(err.message);
      }
    }
  }

  get fullName() {
    return this.surname + " " + this.firstName;
  }
  set fullName(name) {
    let split = name.split("");
    this.firstName = split[0];
    this.surname = split[1];
  }
  addMoneyinAccount(value) {
    this.AmountMoneyInAccount += value;
  }
  withdrawMoneyFromAccount(value) {
    this.AmountMoneyInAccount -= value;
  }
  toString() {
    return `<h3>${this.fullName}:</h3>ID-${this.id} <br>Стан рахунку - ${this.AmountMoneyInAccount}`;
  }
}
class GoldenClient extends Client {
  //ставка 20% годовых
  static interestOnCredit = 20;
  constructor(surnameG, firstNameG, amountMoneyInAccountG, limitCreditMoney) {
    super(surnameG, firstNameG, amountMoneyInAccountG);
    this.limitCreditMoney = limitCreditMoney;
  }
  addMoneyinAccountGold(value) {
    this.addMoneyinAccount(value);
  }
  withdrawMoneyFromAccountGold(value) {
    this.withdrawMoneyFromAccount(value);
  }
  penaltiForUseCreditMoney(value, amountDaysUseCreditMoney) {
    try {
      if (value > this.limitCreditMoney) {
        throw new IsNoKeepOnCreditMoney();
      }
      let penalti =
        ((value * (GoldenClient.interestOnCredit / 100)) / 365) *
        amountDaysUseCreditMoney;
      return penalti.toFixed(2);
    } catch (err) {
      if (err instanceof IsNoKeepOnCreditMoney) {
        console.log(err.message);
      }
    }
  }
  toString() {
    return `<h3>${this.fullName}:</h3>ID-${this.id} <br>Стан рахунку - ${this.AmountMoneyInAccount}`;
  }
}
let clientAll = [
  new Client("Ivanov", "Ivan", 25000),
  new Client("Sidorov", "Semen", 10000),
  new Client("Vasiliev", "Vasilii", 50000),
  new GoldenClient("Petrov", "Petro", 3000, 5000),
  new GoldenClient("Andreichenko", "Andrei", 65000, 10000),
  new GoldenClient("Romanenko", "Roman", 45000, 8000),
];
class Bank {
  constructor(clientList) {
    this.clientList = clientList;
  }
  сlientOrdinary() {
    for (const client of this.clientList) {
      // обьясните пожалуйста как через instanceof класс Client можно вывести  обычных клиентов? у меня выводит всех
      //потомучто GoldenClient создавался на основе класса Client
      let x;
      if (client instanceof GoldenClient) x = 0;
      else document.write(` ${client.toString()}`);
    }
  }
  сlientGolden() {
    for (const client of this.clientList) {
      if (client instanceof GoldenClient)
        document.write(` ${client.toString()}`);
    }
  }
  totalAmountMoneyInAccount() {
    let totalSum = this.clientList.reduce(
      (prevSum, elem) => prevSum + elem.AmountMoneyInAccount,
      0
    );
    return totalSum;
  }
}

let cl = new Bank(clientAll);
//let tr = cl.сlientOrdinary();
cl.сlientGolden();
let sum = cl.totalAmountMoneyInAccount();
document.write(`<br><h2>Загальна сума на рахунку: ${sum} грн.</h2>`);
console.log(sum);
