//todo-form 가져오기
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

//todo-form submit event
//submit 시 todo 저장 & todo 빈칸으로 만들기
function onTodoSubmit(event) {
  event.preventDefault();
  const todo = todoInput.value;
  todoInput.value = "";
}

todoForm.addEventListener("submit", onTodoSubmit);
