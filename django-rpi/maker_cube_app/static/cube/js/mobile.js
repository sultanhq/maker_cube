window.onload = function(){

  document.getElementById('update_panels').addEventListener('click', function(){
    var message = document.getElementById('dropdown').value;
    message += getCheckboxValues();
    socket.send(message);
  });

  document.getElementById('run-text-submit').addEventListener('click', function(clickEvent) {
    socket.send(document.getElementById('run-text').value);
    document.getElementById('run-text').value = '';
  });

  ['panel', 'message', 'react'].forEach(function(item, index){
    document.getElementById('title-'+item).addEventListener('click', function(c){
      displayBody(item);
    });
  })
};

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
