var getSlackMessage = function() {
  var a;
  $.when(ajaxSlack()).done(function(data) {
    resetToGifs(['top', '1', '2', '3', '4', 'bottom']);
    setTimeout(function(){
      a = data.messages[0].text;
      scrollingText(a);
    }, 3000);
  });
};

function ajaxSlack() {
  var slackData = "";
  return $.ajax({
    url: 'https://slack.com/api/channels.history?token=' + window.slackKey() +
      '&channel=' + window.slackChannel() + '&count=1&pretty=1',
    dataType: "json",
    data: slackData,
  });
}
