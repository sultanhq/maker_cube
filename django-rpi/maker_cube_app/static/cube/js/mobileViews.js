var getCheckboxValues = function(){
  var ids = " ";
  var boxes = document.getElementsByClassName('panel');
  for (var i = 0; i < boxes.length; i++){
    if (boxes[i].checked){
      ids += boxes[i].getAttribute('value') + ' ';
    }
  }
  return ids.trimRight();
};

var displayBody = function(type){
  var bodies = document.getElementsByClassName('bodies');
  for (var i = 0; i < bodies.length; i++){
    if (bodies[i].id.includes(type)) {
      bodies[i].removeAttribute('style');
    } else {
      bodies[i].setAttribute('style', 'display: none;');
    }
  }
}

var setName = function(location){
  document.getElementById('name-'+location).setAttribute('value', document.getElementById('name-text-'+location).value);
  document.getElementById('name-'+location).innerHTML = document.getElementById('name-text-'+location).value;
}

var getName = function(location){
  if (document.getElementById('name-'+location).getAttribute('value')){
    return document.getElementById('name-'+location).innerHTML;
  } else {
    return "Player";
  }
}

var addDivs = function(){
  // leave empty
}
var addSizes = function(){}
var addCircles = function() {}
var greenCircles = function() {}

var hideSimonArrows = function() {
  document.getElementById('arrow-container').setAttribute('style', 'display: none;');
}
var showSimonArrows = function() {
  document.getElementById('arrow-container').setAttribute('style', '');
}
var incrementSimonDifficulty = function(){
  var element = document.getElementById('simon-difficulty');
  element.innerHTML = parseInt(element.innerHTML) + 1;
}
var hidePlaySimon = function() {
  document.getElementById('simon-button').setAttribute('style', 'display: none;');
}
var showPlaySimon = function() {
  document.getElementById('simon-button').setAttribute('style', '');
}
