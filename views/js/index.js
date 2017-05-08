window.onload = function() {

  getWeather();

  document.getElementById('run-text-submit').addEventListener('click', function(clickEvent) {
    clickEvent.preventDefault();
    cubeSocket.emit('message', document.getElementById('run-text').value);
    document.getElementById('run-text').value = '';
  });

  document.getElementById('name-submit').addEventListener('click', function(click) {
    click.preventDefault();
    setName();
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
