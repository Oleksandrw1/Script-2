// 1

let age = prompt("Введіть свій вік");

if (age >= 18 && age <= 45) {
  alert("Вітаю, ви підходите");
} else {
  alert("Нажаль, ви не підходите");
}


// 2

let a = prompt("Введіть число для змінної a");
let b = prompt("Введіть число для змінної b");

if (a > 3 && a < 12 && b >= 5 && b < 13) {
  alert("Вірно");
} else {
  alert("Не вірно");
}


// 3

let Name = prompt("Ваше ім'я?", "Олександр");
let Sum = prompt("Сума  депозиту?", "10000");
let DataDepozity = prompt(
  "Термін дії депозиту?"
);

let termDepozity;
let profit;

if (DataDepozity < 6) {
  termDepozity = 15;
  profit = ((Sum * termDepozity) / 100 / 12) * DataDepozity;
} else if (DataDepozity >= 6 && DataDepozity <= 9) {
  termDepozity = 16;
  profit = ((Sum * termDepozity) / 100 / 12) * DataDepozity;
} else {
  termDepozity = 17;
  profit = ((Sum * termDepozity) / 100 / 12) * DataDepozity;
}

alert(
  `Шановний ${Name}, 
Ви внесли ${Sum} грн., під ${termDepozity}%, 
на трермін ${DataDepozity} міс. 
За цей період часу Ви заробите ${profit} грн.`
);
