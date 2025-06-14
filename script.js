"use strict";
console.log("Підключено JavaScript для Практичної роботи №4");

// 1. Вибір елементів
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.querySelector("#addTask");
const taskList = document.getElementById("taskList");

// 2. Додавання завдань
addTaskButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);
    console.log("Додано завдання:", taskText);
    taskInput.value = "";
  } else {
    console.warn("Поле завдання порожнє!");
  }
});

// 3. Делегування подій: видалення завдань при кліку
taskList.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      console.log("Видалено завдання:", event.target.textContent);
      event.target.remove();
    }
  },
  false
);

// 4. Додатково: демонстрація фази захоплення (за бажанням)

taskList.addEventListener(
  "click",
  function (event) {
    console.log("Слухач у фазі захоплення:", event.target);
  },
  true
);
