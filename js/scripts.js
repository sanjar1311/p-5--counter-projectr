var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.setAttribute('class', className);

  if (text) {
    element.textContent = text;
  }

  return element;
};

var elCountOutput = $_('.count');
var elLowerBtn = $_('.js-lower-btn');
var elAddBtn = $_('.js-add-btn');


var count = Number(elCountOutput.textContent);


function addCount() {
  elCountOutput.textContent = ++count;
  if(Number(elCountOutput.textContent) < 0) {
    elCountOutput.classList.add('text-danger');
  }else if(Number(elCountOutput.textContent) > 0){
    elCountOutput.classList.remove('text-danger');
    elCountOutput.classList.add('text-success');
  }else if(Number(elCountOutput.textContent) === 0){
    elCountOutput.classList.remove('text-success');
    elCountOutput.classList.remove('text-danger');
  }
}

function lowerCount() {
  elCountOutput.textContent = --count;
  if(Number(elCountOutput.textContent) > 0) {
    elCountOutput.classList.add('text-success');
  }else if(Number(elCountOutput.textContent) < 0){
    elCountOutput.classList.add('text-danger');
  }else if(Number(elCountOutput.textContent) === 0){
    elCountOutput.classList.remove('text-success');
    elCountOutput.classList.remove('text-danger');
  }
}


elLowerBtn.addEventListener('click', lowerCount);
elAddBtn.addEventListener('click', addCount);