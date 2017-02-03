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

  document.getElementById('name-submit').addEventListener('click', function(click){
    click.preventDefault();
    setName();
  });

  document.getElementById('reaction-button').addEventListener('click', function(e) {
    var time = 2000 + Math.random() * 4000;
    socket.send('\\react ' + time);
  });
};
