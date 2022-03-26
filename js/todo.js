//todo-form 가져오기
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

//todo들을 local Storage에 배열 형태로 저장하기 위함
let todos = [];

function saveTodo() {
  //JSON.stringify(): 어떤 것이든 string 형태로 만들어줌
  //localStorage는 배열형태로 저장할 수 없으므로 배열형태처럼 보이는 string으로 저장하기 위해 택함
  localStorage.setItem("todo", JSON.stringify(todos));
}

function deleteTodo(event) {
  //어떤 버튼을 누른건지 인식하여 paint된 li를 지운다
  const li = event.target.parentNode;
  li.remove();
  //todos에서 지운 todo를 뺀다
  todos = todos.filter((todo) => {
    return todo.id !== Number(li.id);
  });
  //localStorage에 변경된 todos를 업데이트해준다
  saveTodo();
}

function paintTodo(newTodoObj) {
  //html에 li 태그와 그 안에 span 태그를 만들어 todo value를 출력할것
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
  const button = document.createElement("button");
  button.innerText = `❌`;
  //button 클릭시 li가 사라지도록
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

//todo-form submit event
//submit 시 todo 저장 & todo 빈칸으로 만들기
function onTodoSubmit(event) {
  event.preventDefault();
  //localStorage에 있는 요소들을 지우려면 id를 함께 저장해서 식별할 수 있도록 한다
  const newTodoObj = { text: todoInput.value, id: Date.now() };
  todoInput.value = "";
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodo(todos);
}

todoForm.addEventListener("submit", onTodoSubmit);

//string 형태로 바뀐 todo를 다시 배열형태로 바꿈
//배열 형태로 바꾸면 요소 각각에 대해 함수를 적용할 수 있기 때문
const savedTodos = localStorage.getItem("todo");
//새로고침해도 기존 localStorage에 있는 todo가 유지되도록
//localStorage에 값이 있다면 화면에 출력할 것
if (savedTodos) {
  //JSON.parse를 localStorage가 비어있는 상태에서 하면 에러남 (주의)
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  todos.forEach(paintTodo);
}
