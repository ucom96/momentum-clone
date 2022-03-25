//html 요소를 js로 끌어오기
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

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
  event.preventDefault(); //어떤 event의 기본 행동이 발생되지 않도록 막는 것
  //기본 행동이란 어떤 function에 대한 브라우저가 기본적으로 수행하는 동작
  //예를 들어, submit 이벤트 발생시 엔터나 버튼 클릭하면 새로고침되는 동작
  const userName = loginInput.value;
  console.log(userName);
}
//브라우저는 이벤트 발생시 함수를 호출하는데
//event로부터 얻어낸 정보를 function의 첫번째 argument로 추가적인 정보(event에 대한 정보)를 넘긴 채로 호출한다
loginForm.addEventListener("submit", onLoginSubmit);

const link = document.querySelector("a");

//link 클릭시 해당 주소로 넘어가는 기본 동작이 발생되지 않도록 할것
function onClickLink(event) {
  event.preventDefault();
}
link.addEventListener("click", onClickLink);
