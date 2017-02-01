var socket = new WebSocket("ws://" + window.location.host + "/chat/");
socket.onmessage = function(e) {
  if (e.data.substring(7) === 'pics'){
    changeDiv();
  } else {
    document.getElementById("1-4").innerHTML = "<p>" + e.data.substring(7) + "</p>";
  }
}

var changeDiv = function() {
  var pics = "<div id='1'><img src='http://i.imgur.com/GAYQSPf.gif' height='32px,' width='32px' border='0'></div><!--" +
  "--><div id='2'><img src='http://i.imgur.com/RATkdcZ.gif' height='32px,' width='32px' border='0'></div><!--" +
  "--><div id='3'><img src='http://i.imgur.com/JjgXIhR.gif' height='32px,' width='32px' border='0'></div><!--" +
  "--><div id='4'><img src='http://i.imgur.com/Fa5U3cB.gif' height='32px,' width='32px' border='0'></div><!--";
  document.getElementById("1-4").innerHTML = pics;
}
