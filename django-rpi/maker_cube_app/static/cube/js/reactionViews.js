var addDivs = function(){
  var divs = "<div id='4'>4</div><div id='3'>3</div><div id='2'>2</div><div id='1'>1</div>"
  document.getElementById('1-4').innerHTML = divs;
}
var addSizes = function(){
  var piPanelStyle = 'width: 32px; height: 32px; text-align: center; vertical-align: middle; line-height: 32px;';
  var panelIDs = ['top', '1', '2', '3', '4', 'bottom'];
  for (var i = 0; i < panelIDs.length; i++){
    document.getElementById(panelIDs[i]).setAttribute('style', piPanelStyle);
  }
}
var addCircles = function(){
  var circle = "\u25cb";
  var color = 'color: red; font-size: 48px; font-weight: bold;';
  var panelIDs = ['1', '2', '3', '4'];
  for (var i = 0; i < panelIDs.length; i++){
    var element = document.getElementById(panelIDs[i]);
    var elementStyle = element.getAttribute('style');
    element.setAttribute('style', elementStyle + color);
    document.getElementById(panelIDs[i]).innerHTML = circle;
  }
}

var greenCircles = function(){
  var green = 'color: limegreen;';
  var panelIDs = ['1', '2', '3', '4'];
  for (var i = 0; i < panelIDs.length; i++){
    var element = document.getElementById(panelIDs[i]);
    var elementStyle = element.getAttribute('style');
    element.setAttribute('style', elementStyle + green);
  }
}
