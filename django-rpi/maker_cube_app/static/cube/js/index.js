window.onload = function() {
  document.getElementById('remove-text').addEventListener('click', function(clickEvent) {
    socket.send('\\pics top 1 2 3 4 bottom');
  });

  document.getElementById('enable-clock').addEventListener('click', function(clickEvent) {
    socket.send('\\clock 1 2 3 4');
  });

  document.getElementById('run-text-submit').addEventListener('click', function(clickEvent) {
    clickEvent.preventDefault();
    socket.send(document.getElementById('run-text').value);
    document.getElementById('run-text').value = '';
  });

  document.getElementById('reaction-button').addEventListener('click', function(e) {
    var time = 1000 + Math.random() * 4000;
    socket.send('\\react ' + time);
  });


  document.getElementById('name-submit').addEventListener('click', function(click){
    click.preventDefault();
    setName();
  });

  setInterval(function() {
    if (document.getElementsByClassName('clock').length) {
      var clocks = document.getElementsByClassName('clock')
      for (var i = 0; i < clocks.length; i++){
        updateClock(clocks[i]);
      }
    }
  }, 1000);

};
