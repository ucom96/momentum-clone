const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];
//html에 image 태그 추가하기
const imgEl = document.createElement("img");
const chosenImage = images[Math.floor(Math.random() * images.length)];
imgEl.src = `img/${chosenImage}`;
imgEl.classList.add("bgImg");
//body에 넣기
document.body.appendChild(imgEl);
