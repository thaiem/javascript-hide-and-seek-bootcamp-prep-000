function getFirstSelector(selector) {
  return document.getElementById('app').querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName('target');
}

function increaseRankBy(n) {
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list'); 
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString();
  }
}

function deepestChild() {
  var node = document.querySelector('div#grand-node');
  while (node.children.length !== 0) {
    node = node.children[0];
  }
  return node;
}