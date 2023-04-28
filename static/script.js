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