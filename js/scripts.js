$(document).ready(function() {
    $("#userInput form").submit(function(event) {
      var nameInput = $("#nameInput").val();
      alert(nameInput);
      event.preventDefault();
    });
  });
