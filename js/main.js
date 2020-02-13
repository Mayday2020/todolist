//'use strict';

let headerInput = document.querySelector('.header-input'),          // Поле ввода
    headerButton = document.querySelector('.header-button'),        // Плюс
    toDo = document.querySelector('#todo'),                         // Список невыполненных дел
    completed = document.querySelector('#completed'),               // Список выполненных дел
    toDoItem = document.querySelectorAll('.todo-item'),                // Элемент списка, дело
    toDoRemove = document.querySelectorAll('.todo-remove'),            // Корзина
    toDoComplete = document.querySelector('.todo-complete'),        // Галочка
    toDoButtons = document.querySelectorAll('.todo-buttons')[0];         // Блок с кнопками
        // Добавляем элемент списка 
headerButton.addEventListener('click', function (event){
    event.preventDefault();
    let cloneToDo = toDoItem[0].cloneNode(true);
    cloneToDo.textContent = headerInput.value;
    
    toDoItem[0].parentNode.insertBefore(cloneToDo, toDoItem[0]);
    headerInput.value = null;
    console.log(cloneToDo);
});
        // Удаляем элемент списка

toDoRemove.forEach(function(item) {
    item.addEventListener("click", function(){
        item.parentNode.parentNode.remove(item.parentNode);
    });
});


        

