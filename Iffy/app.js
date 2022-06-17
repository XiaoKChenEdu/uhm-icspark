document.getElementById("checking").addEventListener("click", function() {
  var input = document.getElementById("Number").value;
  var shapeOutput = document.getElementById("shapeOutput");
  var image = document.getElementById("image");
  var textinput = document.getElementById("Number");
  if (input == "3") {
    shapeOutput.innerHTML = "Triangle";
    image.src = "https://www.mathsisfun.com/geometry/images/2d-triangle.gif";
    textinput.value = "";
  } else if (input == "4") {
    shapeOutput.innerHTML = "Square";
    image.src = "https://www.mathsisfun.com/geometry/images/2d-square.gif";
    textinput.value = "";
  } else if (input == "5") {
    shapeOutput.innerHTML = "Pentagon";
    image.src  = "https://www.mathsisfun.com/geometry/images/2d-pentagon.gif";
    textinput.value = "";
  } else if (input == "6") {
    shapeOutput.innerHTML = "Hexagon";
    image.src  = "https://www.mathsisfun.com/geometry/images/2d-hexagon.gif";
    textinput.value= "";
  } else if (input == "7") {
    shapeOutput.innerHTML = "Heptagon";
    image.src  = "https://www.mathsisfun.com/geometry/images/2d-heptagon.gif";
    textinput.value = "";
  } else if (input == "8") {
    shapeOutput.innerHTML = "Octagon";
    image.src  = "https://www.mathsisfun.com/geometry/images/2d-octagon.gif";
    textinput.value = "";
  } else if (input == "9") {
    shapeOutput.innerHTML = "Nonagon";
    image.src  = "https://www.mathsisfun.com/geometry/images/2d-nonagon.gif";
    textinput.value = "";
  } else if (input == "10") {
    shapeOutput.innerHTML = "Decagon";
    image.src  = "https://www.mathsisfun.com/geometry/images/2d-decagon.gif";
    textinput.value = "";
  } else {
    shapeOutput.innerHTML = "Try Again!";
    image.src  = "";
    textinput.value = "";
  }
})
