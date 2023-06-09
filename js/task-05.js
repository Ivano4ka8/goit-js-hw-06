// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const changeSpanText = (event) =>
  inputEl.value === ""
    ? (spanEl.textContent = "Anonymous")
    : (spanEl.textContent = inputEl.value);

inputEl.addEventListener("input", changeSpanText);
