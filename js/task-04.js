// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counterValueEl = document.querySelector("#value");
let counterValue = 0;

const buttonDecrementEl = document.querySelector(
  "button[data-action = decrement]"
);

const buttonIncrementEl = document.querySelector(
  "button[data-action = increment]"
);

const decrementClick = () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
};
const incrementClick = () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
};

buttonDecrementEl.addEventListener("click", decrementClick);
buttonIncrementEl.addEventListener("click", incrementClick);
