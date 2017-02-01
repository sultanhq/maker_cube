var socket = new WebSocket("ws://" + window.location.host + "/chat/");
socket.onmessage = function(e) {
  if (e.data.substring(7) === 'pics'){
    changeDiv();
  } else {
    document.getElementById("1-4").innerHTML = "<p>" + e.data.substring(7) + "</p>";
  }
}

var changeDiv = function() {
  var pics = "<div id='1'><img src='/static/cube/img/rainbow_squiggle.gif' height='32px,' width='32px' border='0'></div><!--" +
  "--><div id='2'><img src='/static/cube/img/rainbow_ripples.gif' height='32px,' width='32px' border='0'></div><!--" +
  "--><div id='3'><img src='/static/cube/img/rainbow_juggle.gif' height='32px,' width='32px' border='0'></div><!--" +
  "--><div id='4'><img src='/static/cube/img/rainbow_wheels.gif' height='32px,' width='32px' border='0'></div><!--";
  document.getElementById("1-4").innerHTML = pics;
}
