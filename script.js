var c1 = document.getElementsByClassName("color1")[0];
var c2 = document.getElementsByClassName("color2")[0];
var h1 = document.querySelector("h1");
var h3 = document.querySelector("h3");
var body = document.querySelector("body");
var direction = document.getElementsByClassName("direction")[0];
var random = document.getElementsByClassName("random")[0];
var a = document.querySelector("a");

function createString() {
  return "linear-gradient(" + direction.value + "deg, " + c1.value + ", " + c2.value + ")";
}

function changeBackground() {
  body.style.background = createString();
  printCode();
  readableText();
}

function printCode() {
  h3.textContent = "background:" + createString();
}

function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    //random color will be freshly served
}

function generateRandomDirection() {
  var randomDirection = Math.floor(Math.random() * 180);
  var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  randomDirection = plusOrMinus * randomDirection;
  return randomDirection.toString();
}

function randomize() {
  c1.value= generateRandomColor();
  c2.value= generateRandomColor();
  direction.value = generateRandomDirection();
}

function toggleLightText() {
  body.classList.toggle("light-text");
  h1.classList.toggle("light-text");
  h3.classList.toggle("light-text");
  random.classList.toggle("light-text");
}

function toggleDarkText() {
  body.classList.toggle("dark-text");
  h1.classList.toggle("dark-text");
  h3.classList.toggle("dark-text");
  random.classList.toggle("dark-text");
}

function readableText() {
  var color1 = c1.value.slice(1,7).trim();
  var color2 = c2.value.slice(1,7).trim();
  color1 = parseInt(color1, 16);
  color2 = parseInt(color2, 16);
  var color_sum = color1 + color2;
  if (color_sum < 10000000) {
    toggleLightText();
  } else {
    toggleDarkText();
  }
}


printCode();

random.addEventListener("click", randomize);
random.addEventListener("click", changeBackground);
c1.addEventListener("input", changeBackground);
c2.addEventListener("input", changeBackground);
direction.addEventListener("input", changeBackground);
