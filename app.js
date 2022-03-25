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

//form이 submit되면 페이지가 새로고침됨
//input 안에 있는 button을 누르거나 type이 submit인 input을 클릭하면 form이 submit됨
//우리는 브라우저가 새로고침하지 않고 user 정보를 저장하도록 해야함
//submit이라는 event를 아예 막거나 아니면 발생 여부를 알아야할 것
function onLoginSubmit(event) {
  event.preventDefault(); //어떤 event의 기본 행동이 발생되지 않도록 막는 것
  //기본 행동이란 어떤 function에 대한 브라우저가 기본적으로 수행하는 동작
  //예를 들어, submit 이벤트 발생시 엔터나 버튼 클릭하면 새로고침되는 동작
  const userName = loginInput.value;
  console.log(userName);
}
//loginButton이 아니라 submit 관련해서는 loginForm이어야함에 주의
//form의 submit 이벤트를 감지하고 있다가 엔터나 버튼을 누를 시에 submit됨
loginForm.addEventListener("submit", onLoginSubmit);
//브라우저는 엔터를 누를때 새로고침을 하고 form을 submit하도록 되어있음 (브라우저의 기본동작)
//addEventListener의 두번째 인자인 함수에 ()를 붙이지 않음
//()를 붙이면 즉시 실행하는 것인데 즉시 실행이 아닌 이벤트 발생 시 브라우저가 알아서 function을 실행시키도록

//브라우저는 브라우저 내에서 event로부터 정보를 잡아내서 function의 실행버튼을 누른다
//브라우저는 이벤트 발생시 함수를 호출하는데 첫번째 argument로써 추가적인 정보(event에 대한 정보)를 가진 채로 호출한다
