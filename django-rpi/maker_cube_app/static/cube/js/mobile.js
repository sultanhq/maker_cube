window.onload = function(){

  document.getElementById('update_panels').addEventListener('click', function(){
    var message = document.getElementById('dropdown').value;
    message += getCheckboxValues();
    console.log(message);
    socket.send(message);
  });

};

var getCheckboxValues = function(){
  var ids = " ";
  var boxes = document.getElementsByClassName('panel');
  for (var i = 0; i < boxes.length; i++){
    if (boxes[i].checked){
      ids += boxes[i].getAttribute('value') + ' ';
    }
  }
  return ids;
};
