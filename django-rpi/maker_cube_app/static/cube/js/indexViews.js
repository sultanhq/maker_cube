var addDivs = function() {
  if (document.getElementById('1')){} else{
    var divs = "<div id='4'></div><div id='3'></div><div id='2'></div><div id='1'></div>";
    document.getElementById('1-4').innerHTML = divs;
    addSizes();
  }
};

var showClock = function(IDarray) {
  addDivs();
  var piClockPanelStyle = 'margin: 3px 0px 0px 0px;font-size: 11px; width: 32px; height: 32px; text-align: center; vertical-align: middle; line-height: 14px; word-wrap: break-word';
  var clock = '<span class="clock">' + new Date().toLocaleTimeString() + '</span>';
  IDarray.forEach(function(item, index) {
    var element = document.getElementById(item);
    var elementStyle = element.getAttribute('style');
    element.setAttribute('style', piClockPanelStyle);
    element.innerHTML = clock;
  });
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

var resetToGifs = function(IDarray) {
  addDivs();
  var pics = ["<img src='/static/cube/img/rainbow_squiggle.gif' height='32px,' width='32px' border='0'>",
    "<img src='/static/cube/img/rainbow_ripples.gif' height='32px,' width='32px' border='0'>",
    "<img src='/static/cube/img/rainbow_juggle.gif' height='32px,' width='32px' border='0'>",
    "<img src='/static/cube/img/rainbow_wheels.gif' height='32px,' width='32px' border='0'>",
    "<img src='/static/cube/img/rainbow_sun.gif' height='32px,' width='32px' border='0'>",
    "<img src='/static/cube/img/rainbow_infinity.gif' height='32px,' width='32px' border='0'>"];
  IDarray.forEach( function(item, index){
    var rand = parseInt(pics.length*Math.random());
    document.getElementById(item).innerHTML = pics[rand];
  })
}
