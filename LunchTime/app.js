var FoodName = ['SandWich','Egg Fried Rice','Garlic Chicken Salad','Pizza','Hambruger'];
var FoodPic = ['https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190322-ham-sandwich-horizontal-1553721016.png',
               'https://www.carolinescooking.com/wp-content/uploads/2016/01/vegetable-egg-fried-rice-photo-1.jpg',
               'https://tatyanaseverydayfood.com/wp-content/uploads/2016/02/Garlic-Chicken-Salad-3.jpg',
               'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsqt27Hv3-Ki-eCHgocljFb-f8cmyEXNVk4A&usqp=CAU',
               'https://d1omecegou7wuo.cloudfront.net/wp-content/uploads/2013/05/featured-great-american-hamburger-1024x640.jpg'];

document.getElementById("RandomFood").addEventListener("click", function() {
  WhatToEat();
});

function WhatToEat() {
  var ListNumber = Math.floor(Math.random() * 5);
  console.log(ListNumber);
  var Image = document.getElementById("Foodimage");
  var ImageName = document.getElementById("FoodOutput");
  Foodimage.src = FoodPic[ListNumber];
  console.log(FoodPic[ListNumber]);
  FoodOutput.innerHTML = FoodName[ListNumber] ;
  console.log(FoodName[ListNumber]);
}
