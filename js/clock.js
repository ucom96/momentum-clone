//clock으로 쓰일 html h2를 가져오기
const clock = document.querySelector("h2#clock");

/*
function sayHello() {
  console.log("hello");
}
*/

/*
//js에서 제공하는 interval 함수
//interval => n초마다 실행
//첫번째 인자: n초마다 실행될 함수 & 두번째 인자: n초(ms 단위)
setInterval(sayHello, 5000);
*/

/*
//js에서 제공하는 timeout 함수
//timeout => n초 후에 실행되고 끝남
setTimeout(sayHello, 5000);
*/

/*
string.padStart(number, string): string에 padding을 앞쪽에 추가해주는 함수
첫번째 인자: 최소한의 길이 & 두번째 인자: 추가하고자 하는 string
string.padEnd(number, string): string에 padding을 뒤쪽에 추가해주는 함수
*/
//h2에 1초마다 갱신되는 시간:분:초 만들기
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//웹사이트를 들어가자마자 시계 실행
getClock();
//1초마다 갱신
setInterval(getClock, 1000);
