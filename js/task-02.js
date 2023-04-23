// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingridientsListEl = document.querySelector("#ingredients");

const createElement = () => {
  ingredients.forEach((element) => {
    const ingridientItemEl = document.createElement("li");
    ingridientItemEl.textContent = element;
    ingridientItemEl.classList.add("item");
    ingridientsListEl.append(ingridientItemEl);
  });
};

createElement();
