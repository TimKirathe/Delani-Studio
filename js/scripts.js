$(document).ready(function() {
$("#userInput").submit(function(event) {
  event.preventDefualt();
  var nameInput = $("#nameInput").val();
  alert(nameInput);
})
});
