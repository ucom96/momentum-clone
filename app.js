//html 요소를 js로 끌어오기
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const loginH1 = document.querySelector("h1");
const HIDDEN_CLASSNAME = "hidden";
//username이 매우 자주 쓰이므로 자주 쓰이는 string은 변수로 만들어줄것
const USERNAME_KEY = "username";
//const loginInput = document.querySelector("#login-form input");
//const loginButton = document.querySelector("#login-form button");

//*loginButton을 클릭할시 loginInput에 넣은 value 값을 출력하도록
//*username의 유효성 검사 => if else 문도 좋지만 브라우저 자체 기능을 활용할 것
//브라우저 자체 기능을 활용하기 위해서는 반드시 form 태그 안에 input 태그가 있어야함
/*
function onLoginBtnClick() {
  console.log(loginInput.value);
}
loginButton.addEventListener("click", onLoginBtnClick);
*/
//form이 submit되면 페이지가 새로고침됨 (브라우저의 기본동작)
function onLoginSubmit(event) {
  //기본 행동이란 어떤 function에 대한 브라우저가 기본적으로 수행하는 동작
  //예를 들어, submit 이벤트 발생시 엔터나 버튼 클릭하면 새로고침되는 동작
  event.preventDefault(); //어떤 event의 기본 행동이 발생되지 않도록 막는 것
  const username = loginInput.value;
  //username을 localStorage에 저장하기
  localStorage.setItem(USERNAME_KEY, username);
  //form 없애기
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreeting();
}

//반복되는 코드는 함수로 만들어줄것
function paintGreeting() {
  const username = localStorage.getItem(USERNAME_KEY);
  //h1 작성 후 보여주기
  loginH1.innerText = `Hello ${username}`;
  loginH1.classList.remove(HIDDEN_CLASSNAME);
}

const getUserName = localStorage.getItem(USERNAME_KEY);
//username이 저장된 경우
//새로고침을 해도 form이 보이지 않고 저장된 username 값이 보이도록 설정
if (getUserName) {
  paintGreeting();
}
//username이 저장되지 않은 경우
else {
  //form을 보여주기
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  //제출하면 event Listener 동작
  loginForm.addEventListener("submit", onLoginSubmit);
}

//localStorage.removeItem(USERNAME_KEY);
//localStorage.removeItem("username");
/*
const link = document.querySelector("a");
//link 클릭시 해당 주소로 넘어가는 기본 동작이 발생되지 않도록 할것
function onClickLink(event) {
  event.preventDefault();
}
link.addEventListener("click", onClickLink);
*/

//브라우저에 공짜로 뭔가를 기억할 수 있게 해주는 기능
//LocalStorage API
//localStorage 정보가 있다면 h1 태그를 바로 보여주고 정보가 없다면 form을 보여줄것
