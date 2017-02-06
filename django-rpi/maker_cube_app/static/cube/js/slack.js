var getSlackMessage = function() {
  var a;
  $.when(ajaxSlack()).done(function(data) {
    a = data.messages[0].text;
    document.getElementById("1-4").innerHTML = "<p>" + a + "</p>";
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
