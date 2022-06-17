var Container = document.getElementById('container');
var Item1 = {
  type: 'good',
  imgSrc: 'imgs/candycane.png'
};
var Item2 = {
  type: 'good',
  imgSrc: 'imgs/peppermint.jpg'
};
var Item3 = {
  type: 'bad',
  imgSrc: 'imgs/coal.png'
};
var Item4 = {
  type: 'bad',
  imgSrc: 'imgs/socks.png'
};

var Candies = [Item1, Item2, Item3, Item4];

window.setInterval(addItem, 1000);

function addItem() {
  var RandomNum = Math.floor(Math.random() * 4);
  var Item = document.createElement('img');
  Item.src = Candies[RandomNum].imgSrc;
  Item.alt = Candies[RandomNum].type;
  Item.style.top = Math.floor(Math.random() * 900) + 'px';
  Item.classList.add('item');
  Item.onclick = function() {
    if (Item.alt == 'good') {
      Container.removeChild(Item);
    } else {
      alert('booo');
    }
  }
  Container.appendChild(Item);
  if (Container.childElementCount > 5) {
    Container.removeChild(Container.firstChild);
  };
}
