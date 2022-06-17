var image1 = document.getElementById('cookie1');
var image2 = document.getElementById('cookie2');
var image3 = document.getElementById('cookie3');
var count1 = 0;
var count2 = 0;
var count3 = 0;

image1.addEventListener("click", function() {
  update("counter1", "count1");
  console.log(count1);
});

image2.addEventListener("click", function() {
  update("counter2", "count2");
  console.log(count2);
});

image3.addEventListener("click", function() {
  update("counter3", "count3");
  console.log(count3);
});

function update(counter, count) {
  var text = document.getElementById(counter);
  if (count == "count1") {
    count1 = count1 + 1;
    if (count1%50 == 0){
      text.innerHTML = "Good Job";
    } else {
      text.innerHTML = count1 + ' Cookie';
    }
  } else if (count == "count2") {
    count2 = count2 + 1;
    if (count2%50 == 0) {
      text.innerHTML = "Good Job"
    } else {
      text.innerHTML = count2 + ' Cookie';
    }
  } else if (count = "count3") {
    count3 = count3 + 1;
    if (count3%50 == 0) {
      text.innerHTML = "Good Job";
    } else {
      text.innerHTML = count3 + ' Cookie';
    }
  }
}
