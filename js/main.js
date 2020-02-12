//'use strict';

let headerInput = document.querySelector('.header-input'),          // Поле ввода
    headerButton = document.querySelector('.header-button'),        // Плюс
    toDo = document.querySelector('#todo'),                         // Список невыполненных дел
    completed = document.querySelector('#completed'),               // Список выполненных дел
    toDoItem = document.querySelectorAll('.todo-item'),                // Элемент списка, дело
    toDoRemove = document.querySelector('.todo-remove'),            // Корзина
    toDoComplete = document.querySelector('.todo-complete'),        // Галочка
    toDoButtons = document.querySelector('.todo-buttons');          // Блок с кнопками
  
/*
let removeItem = function () {
    toDoButtons.parentElement.remove();
};
toDoRemove.addEventListener('click', removeItem);
*/

let show = function () {
    toDoItem.textContent = headerInput.value;
};

headerButton.addEventListener('click', function (){
    let cloneToDo = toDoItem[0].cloneNode(true);
    toDoItem[0].parentNode.insertBefore(cloneToDo);
    show();
});
