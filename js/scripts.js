$(document).ready(function() {
  $(".designImgText").click(function() {
    $(".designImgText").toggle(1000, "linear");
    $(".designDescription").toggle(1000, "linear");
  });
  $(".developmentImgText").click(function() {
    $(".developmentImgText").toggle(1000, "linear");
    $("#developmentDescription").toggle(1000, "linear");
  });

    $("#userInput form").submit(function(event) {
      var nameInput = $("#nameInput").val();
      alert(nameInput);
      event.preventDefault();
    });
  });
