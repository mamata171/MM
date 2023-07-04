console.log("hello world")



function show() {
  console.log("show fun triggered");
  var element = document.getElementById("hidden");
  console.log(element.style.display); // Check initial value
  if (element.style.display === "" || element.style.display === "none") {
    element.style.display = "block";
  }
  console.log(element.style.display); // Check updated value
}

function hide(){
  console.log("hide fun triggered")
  element = document.getElementById("hidden")
  if (element.style.display === "block") {
    element.style.display = "none";
  } 
}


function musicfun(){
  element = document.getElementById("photos")
  if (element.style.display === "" || element.style.display === "none") {
    element.style.display = "block";
  }
}

function musichide() {
  element = document.getElementById("photos")
  if (element.style.display === "block") {
    element.style.display = "none";
  } 

}


    const movingImage1 = document.getElementById('moving-image1');
    const movingImage2 = document.getElementById('moving-image2');
const bodyWidth = document.body.clientWidth;
const bodyHeight = document.body.clientHeight;
const imageWidth = movingImage.clientWidth;
const imageHeight = movingImage.clientHeight;

let xPos = Math.random() * (bodyWidth - imageWidth);
let yPos = Math.random() * (bodyHeight - imageHeight);
let xDirection = Math.random() >= 0.5 ? 1 : -1;
let yDirection = Math.random() >= 0.5 ? 1 : -1;

function moveImage() {
  xPos += 1 * xDirection;
  yPos += 1 * yDirection;

  if (xPos + imageWidth >= bodyWidth || xPos <= 0) {
    xDirection *= -1;
  }

  if (yPos + imageHeight >= bodyHeight || yPos <= 0) {
    yDirection *= -1;
  }

  movingImage.style.transform = `translate(${xPos}px, ${yPos}px)`;
}

setInterval(moveImage1, 10);
// setInterval(moveImage2, 10);
