var Inputarea = document.getElementById("input");
var ClickButton = document.getElementById("button");
var Outputarea = document.getElementById("output-section");

ClickButton.addEventListener("click", function() {
  var CheckInput = Inputarea.value.toLowerCase();
  var Newheading = document.createElement("p");
  Newheading.className = "dialogueIn";
  Newheading.innerHTML = Inputarea.value;
  Outputarea.appendChild(Newheading);

  var Pout = document.createElement("p");
  Pout.className = "dialogueOut";
  if (CheckInput == "hi") {
    Pout.innerHTML = "Hi, how are you doing?";
  } else if (CheckInput == "good") {
    Pout.innerHTML = "Great! Bye!";
  } else {
    Pout.innerHTML = "Sorry! I don't understand";
  }

  window.setTimeout(function() {
    Outputarea.appendChild(Pout);
  }, 2000);
});
