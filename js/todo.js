//todo-form 가져오기
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

//todo-form submit event
//submit 시 todo 저장 & todo 빈칸으로 만들기
function onTodoSubmit(event) {
  event.preventDefault();
  const todo = todoInput.value;
  paintTodo(todo);
  todoInput.value = "";
}

function deleteTodo(event) {
  //어떤 버튼을 누른건지 인식
  const li = event.target.parentNode;
  li.remove();
}

function paintTodo(todo) {
  //html에 li 태그와 그 안에 span 태그를 만들어 todo value를 출력할것
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = todo;
  const button = document.createElement("button");
  button.innerText = `❌`;
  //button 클릭시 li가 사라지도록
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

todoForm.addEventListener("submit", onTodoSubmit);
