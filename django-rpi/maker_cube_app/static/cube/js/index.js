window.onload = function(){

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    document.getElementById("web").innerHTML = "";
  } else {
    document.getElementById("mobile").innerHTML = "";
    }

  document.getElementById('remove_text').addEventListener('click', function(clickEvent){
    socket.send('\\pics');
  });

  document.getElementById('run_text_submit').addEventListener('click', function(clickEvent){
    clickEvent.preventDefault();
    socket.send(document.getElementById('run_text').value);
    document.getElementById('run_text').value = '';
  });

  document.getElementById('reaction-button').addEventListener('click', function(e){
    var time = 1000 + Math.random() * 4000;
    socket.send('\\react ' + time);
  });
};
