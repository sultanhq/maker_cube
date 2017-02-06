var socket = new WebSocket("ws://" + window.location.host + "/chat/");

socket.onmessage = function(e) {
  var message = e.data.split(' ');
  if (message[0] === '\\pics') {
    resetToGifs(message.slice(1));
  } else if (message[0] === '\\react') {
    var time = parseInt(message[1]);
    playReact(time);
  } else if (message[0] === '\\clock') {
    showClock(message.slice(1));
  } else if (message[0] === '\\borg') {
    borgify(message.slice(1));
  } else if (message[0] === '\\borg-red') {
    borgifyRed(message.slice(1));
  } else if (message[0] === '\\hot-coals') {
    hotCoals(message.slice(1));
  } else if (message[0] === '\\water') {
    water(message.slice(1));
  } else if (message[0] === '\\waterfall') {
    waterfall(message.slice(1));
  } else if (message[0] === '\\fireworks') {
    fireworks(message.slice(1));
  } else if (message[0] === '\\slack') {
    getSlackMessage();
  } else {
    disableReactButton();
    document.getElementById("1-4").innerHTML = "<p>" + e.data + "</p>";
  }
};

var playReact = function(time) {
  addDivs();
  addSizes();
  addCircles();
  addReactButton();
  setTimeout(function() {
    greenCircles();
    enableReactButton();
  }, time);
};
