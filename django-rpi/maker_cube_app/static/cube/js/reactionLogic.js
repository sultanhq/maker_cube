var addReactButton = function(){
  var element = document.getElementById('react-button');
  var style = '';
  element.innerHTML = 'REACT';
  element.setAttribute('style', style);
  element.addEventListener('click', tooSoon);
}

var enableReactButton = function(){
  var element = document.getElementById('react-button');
  if (element.innerHTML === 'REACT'){
    element.removeEventListener('click', tooSoon);
    element.removeEventListener('click', disableReactButton);
    element.addEventListener('click', win);
  } else {
    disableReactButton();
  }
}

var tooSoon = function(){
  document.getElementById('react-button').innerHTML = 'Too soon!';
  document.getElementById('react-button').addEventListener('click', disableReactButton);
}

var win = function(){
  socket.send('Player wins!');
  disableReactButton();
}

var disableReactButton = function(){
  var element = document.getElementById('react-button');
  element.setAttribute('style', 'display: none;');
  element.removeEventListener('click', tooSoon);
  element.removeEventListener('click', disableReactButton);
  element.removeEventListener('click', win);
}
