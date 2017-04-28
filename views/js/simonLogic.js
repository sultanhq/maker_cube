var playSimon = function(moves) {
  var moveArray = [];
  for (var i = 0; i < moves; i++) {
    var move = Math.floor(4 * Math.random());
    moveArray.push(move);
  }
  storeMoves(moveArray);
  displayMoves(moveArray);
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
  (function innerLoop (j){
    displayOnMainPanels( (j % 2 === 0 ? getSimonPic(array[i++]) : ''));
    setTimeout( function(){
      if (--j){
        innerLoop(j);
      }
    }, 600);
  })(array.length * 2);
};

var getSimonPic = function(indexString){
  var pics = ["<img class='face' src='img/simon/up.png'/>",
              "<img class='face' src='img/simon/left.png'/>",
              "<img class='face' src='img/simon/right.png'/>",
              "<img class='face' src='img/simon/down.png'/>"];
  return pics[parseInt(indexString)];
}

var simonSays = function(theirArray){
  var playerName = theirArray[0];
  if (isCorrect(theirArray.slice(1))){
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
