window.onload = function() {
  document.getElementById('remove_text').addEventListener('click', function(clickEvent) {
    socket.send('\\pics');
  });

  document.getElementById('enable_clock').addEventListener('click', function(clickEvent) {
    socket.send('\\clock');
  });

  document.getElementById('run_text_submit').addEventListener('click', function(clickEvent) {
    clickEvent.preventDefault();
    socket.send(document.getElementById('run_text').value);
    document.getElementById('run_text').value = '';
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
    if (document.getElementById('clock')) {
      var panelIDs = ['1', '2', '3', '4'];
      for (var i = 0; i < panelIDs.length; i++) {
        updateClock(document.getElementById(panelIDs[i]));
      }
    }
  }, 1000);

};
