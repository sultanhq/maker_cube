var cubeSocket = io('/cube');

cubeSocket.on('message', function(data) {

  var message = data.split(' ');

  switch (message[0]) {
    case ('\\pics'):
      resetToGifs(message.slice(1));
      break;
    case ('\\react'):
      var time = parseInt(message[1]);
      playReact(time);
      break;
    case ('\\clock'):
      showClock(message.slice(1));
      break;
    case ('\\borg'):
      borgify(message.slice(1));
      break;
    case ('\\play-simon'):
      playSimon(parseInt(message[1]));
      break
    case ('\\simon-says'):
      simonSays(message.slice(1));
      break;
    case ('\\borg-red'):
      borgifyRed(message.slice(1));
      break;
    case ('\\hot-coals'):
      hotCoals(message.slice(1))
      break;
    case ('\\water'):
      water(message.slice(1));
      break;
    case ('\\fireworks'):
      fireworks(message.slice(1));
      break;
    case ('\\slack'):
      getSlackMessage();
      break;
    case ('\\off'):
      off(message.slice(1));
      break;
    case ('\\weather'):
      showWeather(message.slice(1));
      break;
    case ('\\roi'):
      showRoi(message.slice(1));
      break;
    case ('\\pong'):
      playPong(message.slice(1));
      break;
    case ('\\shutdown'):
      cubeSocket.emit('shutdown');
      break;
    default:
      disableReactButton();
      scrollingText(data);
  }

});

var playReact = function(time) {
  addDivs();
  addSizes();
  addCircles();
  addReactButton();
  setTimeout(function() {
    greenCircles();
    enableReactButton();
  }, time);
};
