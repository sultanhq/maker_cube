var playSimon = function(moves) {
  var moveArray = [];
  for (var i = 0; i < moves; i++) {
    var move = Math.floor(4 * Math.random());
    moveArray.push(move);
  }
  storeMoves(moveArray);
  displayMoves(moveArray);
  console.log(moveArray.join(' '));
};

var storeMoves = function(array) {
  document.getElementById('simon-moves').innerHTML = array.join(' ');
};

var getMoves = function() {
  return document.getElementById('simon-moves').innerHTML.split(' ');
};

var displayMoves = function(array) {
  addDivs();
  var i = 0;
  (function innerLoop(j) {
    displayOnMainPanels((j % 2 === 0 ? array[i++] : ''));
    setTimeout(function() {
      if (--j) {
        innerLoop(j);
      }
    }, 600);
  })(array.length * 2);
};

var simonSays = function(theirArray) {
  var playerName = 'Player';
  if (isCorrect(theirArray)) {
    finishSimonSays(playerName, ' wins!');
  } else {
    finishSimonSays(playerName, ' is out!');
  }
};

var isCorrect = function(theirArray) {
  var simonArray = getMoves();
  if (theirArray.length === simonArray.length) {
    for (var i = 0; i < simonArray.length; i++) {
      if (theirArray[i] !== simonArray[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

var finishSimonSays = function(playerName, winLose) {
  socket.send(playerName + winLose);
  storeMoves([]);
};
