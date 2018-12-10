var messagesContainer = $(".right-messages-container .right-messages");

$(document).ready(function() {
  $('.new-message-inputs').keypress(function(e) {
if (e.which == 13) {
  var thisInput = $(this);
  var newMessage = thisInput.val();
  var now = new Date();

if (newMessage) {
  var messageTemplate = $(".template .message.sent").clone();
  messageTemplate.children(".message-text").text(newMessage);
  messageTemplate.children(".message-time").text(now.getHours()+ ":" + now.getMinutes());
  messagesContainer.append(messageTemplate);

  var clearTemplate = $(".template .cl-t").clone();
  messagesContainer.append(clearTemplate);

  setTimeout(function() {
    var computerAnswerTemplate = $(".template .message-received").clone();
    computerAnswerTemplate.children(".message-text").text("Ok");
    computerAnswerTemplate.children(".message-time").text(now.getHours() + ":" + now.getMinutes());

    messagesContainer.append(computerAnswerTemplate);

    var newClearTemplate = $(".template .cl-t").clone();
    messagesContainer.append(newClearTemplate);
  }, 2000);
  thisInput.val("");
}
}
});
$('#contacts-filter').keyup(function() {
  var thisValue = $(this).val().toLowerCase();
  console.log(thisValue);

  $('.contact').each(function() {
    var contactName = $(this).find('.contact-name').text().toLowerCase();

    if (contactName.includes(thisValue)) {
      $(this).show();
    }
    else {
      $(this).hide();
    }
  });
});
});

$(document).on('click', '.right .right-messages .message .message-options', function() {
  $('.message-options-panel').toggle('fast');
});

$(document).on('click', '.message-destroy', function() {
  var messageParent = $(this).parent().parent();

  messageParent.hide();


});
