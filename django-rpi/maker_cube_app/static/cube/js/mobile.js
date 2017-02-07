window.onload = function() {

  document.getElementById('dropdown').addEventListener('change', function(){
    var message = document.getElementById('dropdown').value;
    message += getCheckboxValues();
    socket.send(message);
  });

  document.getElementById('update_panels').addEventListener('click', function(){
    var message = document.getElementById('dropdown').value;
    message += getCheckboxValues();
    socket.send(message);
  });

  document.getElementById('run-text-submit').addEventListener('click', function(clickEvent) {
    socket.send(document.getElementById('run-text').value);
    document.getElementById('run-text').value = '';
  });

  ['panel', 'message', 'react', 'simon'].forEach(function(item, index) {
    document.getElementById('title-' + item).addEventListener('click', function(c) {
      displayBody(item);
    });
  });


  ['simon', 'react'].forEach(function(item, index){
    document.getElementById('name-submit-' + item).addEventListener('click', function(click){
      click.preventDefault();
      setName(item);
    });
  });

  document.getElementById('reaction-button').addEventListener('click', function(e) {
    var time = 2000 + Math.random() * 4000;
    socket.send('\\react ' + time);
  });

  document.getElementById('simon-button').addEventListener('click', function(){
    beginSimonSays();
  });

  document.getElementById('triangle-up').addEventListener('click', function() {
    document.getElementById('simon-moves').innerHTML += '0';
  });

  document.getElementById('triangle-left').addEventListener('click', function() {
    document.getElementById('simon-moves').innerHTML += '1';
  });

  document.getElementById('triangle-right').addEventListener('click', function() {
    document.getElementById('simon-moves').innerHTML += '2';
  });

  document.getElementById('triangle-down').addEventListener('click', function() {
    document.getElementById('simon-moves').innerHTML += '3';
  });

  document.getElementById('simon-send').addEventListener('click', function(){
    sendSimon();
  });
};

var beginSimonSays = function() {
  showSimonArrows();
  hidePlaySimon();
  var difficulty = document.getElementById('simon-difficulty').innerHTML;
  incrementSimonDifficulty();
  socket.send('\\play-simon ' + difficulty);
}

var sendSimon = function(){
  hideSimonArrows();
  showPlaySimon();
  var moves = document.getElementById('simon-moves').innerHTML.split('');
  socket.send('\\simon-says '+ getName('simon') + ' ' + moves.join(' '));
}
