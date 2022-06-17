var FishRight1 = document.getElementById("right1");
var FishLeft1 = document.getElementById("left1");
var ArrX = [];

window.onmousemove = function(event) {
  var X = event.clientX;
  var Y = event.clientY;

  ArrX.push(X);
  if (ArrX.length > 2) {
    ArrX.shift();
  }

  if (ArrX[1] < ArrX[0]) {
    FishRight1.hidden = true;
    FishLeft1.hidden = false;
  } else {
    FishLeft1.hidden = true;
    FishRight1.hidden = false;
  }
  console.log(ArrX);

  window.setTimeout(function() {
    FishRight1.style.left = X + "px";
    FishRight1.style.top = Y + "px";
    FishLeft1.style.left = X + "px";
    FishLeft1.style.top = Y + "px";
  }, 500);
}
