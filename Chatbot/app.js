var Textinput = document.getElementById("input");
var Textoutput = document.getElementById("output");

Textinput.addEventListener("keypress", function() {
  if (event.key === "Enter") {
    var Str = Textinput.value.toLowerCase();
    var OutputText = "";
    if (Str == "") {
      return;
    } else if (Str.startsWith("hi") || Str.startsWith("hey") || Str.startsWith("yo")) {
      OutputText = "Hi, how are you doing?";
    } else if (Str == "good") {
      OutputText = "Great! Bye!";
    } else {
      OutputText = "Sorry! I don't understand.";
    }
    console.log(OutputText);
    DialogueBubbles(Textinput.value,1);
    DialogueBubbles(OutputText, 2);
    Textinput.value = "";
  }
});

function DialogueBubbles(Text, Number) {
  var Para = document.createElement("P");
  if (Number == 1) {
    Para.classList.add("myMessage");
    Para.innerHTML = Text;
    Textoutput.appendChild(Para);
  } else if (Number == 2) {
    Para.classList.add("yourMessage");
    Para.innerHTML = Text;
    Textoutput.appendChild(Para);
  }
}
