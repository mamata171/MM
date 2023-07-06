console.log("hello world")



// function show() {
//   console.log("show fun triggered");
//   var element = document.getElementById("hidden");
//   console.log(element.style.display); // Check initial value
//   if (element.style.display === "" || element.style.display === "none") {
//     element.style.display = "block";
//   }
//   console.log(element.style.display); // Check updated value

//   var moreworkbtn = document.getElementById("moreworkbtn");
//   moreworkbtn.innerText = "Close"

// }

// Check screen size on page load
window.addEventListener('DOMContentLoaded', function() {
  checkScreenSize();
});

// Check screen size on window resize
window.addEventListener('resize', function() {
  checkScreenSize();
});

// Function to check screen size and update image
function checkScreenSize() {
  var largeImage = document.getElementById("largeImage");
  var smallImage = document.getElementById("smallImage");

  if (window.innerWidth <= 768) {
    largeImage.style.display = "none";
    smallImage.style.display = "block";
  } else {
    largeImage.style.display = "block";
    smallImage.style.display = "none";
  }
}

function show() {
  var element1 = document.getElementById("hidden");
  var element2 = document.getElementById("prop-hidden");

  var moreworkbtn = document.getElementById("moreworkbtn");

  if (element1.style.display === "" || element1.style.display === "none") {
    element1.style.display = "block";
    element2.style.display = "block";
    moreworkbtn.innerText = "Close";
  } else {
    element1.style.display = "none";
    element2.style.display = "none";
    moreworkbtn.innerText = "Explore";
  }
}


function hide(){
  console.log("hide fun triggered")
  element = document.getElementById("hidden")
  element2 = document.getElementById("prop-hidden")
  if (element.style.display === "block") {
    element.style.display = "none";
    element2.style.display = "none";
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
