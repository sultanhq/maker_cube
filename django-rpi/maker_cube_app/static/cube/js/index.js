if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
  window.location = window.location + "mobile";
};

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

  document.getElementById('name-submit').addEventListener('click', function(click) {
    click.preventDefault();
    setName();
  });

  document.getElementById('borg').addEventListener('click', function(click) {
    socket.send("\\borg top 1 2 3 4 bottom");
  });

  document.getElementById('simon').addEventListener('click', function(click){
    socket.send("\\play-simon 3");
  });

  document.getElementById('slack').addEventListener('click', function(click) {
    socket.send("\\slack");
  });

  document.getElementById('borg-red').addEventListener('click', function(click) {
    socket.send("\\borg-red top 1 2 3 4 bottom");
  });

  document.getElementById('hot-coals').addEventListener('click', function(click) {
    socket.send("\\hot-coals top 1 2 3 4 bottom");
  });

  document.getElementById('water').addEventListener('click', function(click) {
    socket.send("\\water top 1 2 3 4 bottom");
  });

  document.getElementById('waterfall').addEventListener('click', function(click) {
    socket.send("\\waterfall top 1 2 3 4 bottom");
  });

  document.getElementById('fireworks').addEventListener('click', function(click) {
    socket.send("\\fireworks top 1 2 3 4 bottom");
  });

  document.getElementById('off').addEventListener('click', function(click) {
    socket.send("\\off top 1 2 3 4 bottom");
  });

  setInterval(function() {
    if (document.getElementsByClassName('clock').length) {
      var clocks = document.getElementsByClassName('clock');
      for (var i = 0; i < clocks.length; i++) {
        updateClock(clocks[i]);
      }
    }
  }, 1000);

};
