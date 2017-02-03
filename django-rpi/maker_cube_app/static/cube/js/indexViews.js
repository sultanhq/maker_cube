var addDivs = function() {
  var divs = "<div id='4'>4</div><div id='3'>3</div><div id='2'>2</div><div id='1'>1</div>";
  document.getElementById('1-4').innerHTML = divs;
};

var showClock = function() {
  addDivs();
  var piClockPanelStyle = 'margin: 3px 0px 0px 0px;font-size: 14px; width: 32px; height: 32px; text-align: center; vertical-align: middle; line-height: 14px; word-wrap: break-word';
  var clock = '<span id="clock">' + new Date().toLocaleTimeString() + '</span>';
  var panelIDs = ['1', '2', '3', '4'];
  for (var i = 0; i < panelIDs.length; i++) {
    var element = document.getElementById(panelIDs[i]);
    var elementStyle = element.getAttribute('style');
    document.getElementById(panelIDs[i]).setAttribute('style', piClockPanelStyle);
    document.getElementById(panelIDs[i]).innerHTML = clock;
  }
};

var addSizes = function() {
  var piPanelStyle = 'width: 32px; height: 32px; text-align: center; vertical-align: middle; line-height: 27px;';
  var panelIDs = ['top', '1', '2', '3', '4', 'bottom'];
  for (var i = 0; i < panelIDs.length; i++) {
    document.getElementById(panelIDs[i]).setAttribute('style', piPanelStyle);
  }
};

var addCircles = function() {
  var circle = "\u25cb";
  var color = 'color: red; font-size: 32px; font-weight: bold;';
  var panelIDs = ['1', '2', '3', '4'];
  for (var i = 0; i < panelIDs.length; i++) {
    var element = document.getElementById(panelIDs[i]);
    var elementStyle = element.getAttribute('style');
    element.setAttribute('style', elementStyle + color);
    document.getElementById(panelIDs[i]).innerHTML = circle;
  }
};

var greenCircles = function() {
  var green = 'color: limegreen;';
  var panelIDs = ['1', '2', '3', '4'];
  for (var i = 0; i < panelIDs.length; i++) {
    var element = document.getElementById(panelIDs[i]);
    var elementStyle = element.getAttribute('style');
    element.setAttribute('style', elementStyle + green);
  }
}

var resetToGifs = function() {
  var pics = "<div id='1'><img src='/static/cube/img/rainbow_squiggle.gif' height='32px,' width='32px' border='0'></div><!--" +
    "--><div id='2'><img src='/static/cube/img/rainbow_ripples.gif' height='32px,' width='32px' border='0'></div><!--" +
    "--><div id='3'><img src='/static/cube/img/rainbow_juggle.gif' height='32px,' width='32px' border='0'></div><!--" +
    "--><div id='4'><img src='/static/cube/img/rainbow_wheels.gif' height='32px,' width='32px' border='0'></div><!--";
  document.getElementById("1-4").innerHTML = pics;
}
