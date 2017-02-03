var socket = new WebSocket("ws://" + window.location.host + "/chat/");

socket.onmessage = function(e) {
  if (e.data === '\\pics') {
    resetToGifs();
  } else if (e.data.substring(0, 6) === '\\react') {
    var time = parseInt(e.data.substring(7));
    playReact(time);
  } else if (e.data.substring(0, 6) === '\\clock') {
    showClock();
  } else {
    disableReactButton();
    document.getElementById("1-4").innerHTML = "<p>" + e.data + "</p>";
  }
}

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
