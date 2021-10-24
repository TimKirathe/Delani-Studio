$(document).ready(function() {
  $(".designImgText").click(function() {
    $(".designImgText").toggle(1000, "linear");
    $(".designDescription").toggle(1000, "linear");
  });
  $(".developmentImgText").click(function() {
    $(".developmentImgText").toggle(1000, "linear");
    $(".developmentDescription").toggle(1000, "linear");
  });
  $(".productManagementImgText").click(function() {
    $(".productManagementImgText").toggle(1000, "linear");
    $(".productManagementDescription").toggle(1000, "linear");
  });
  $(".designDescription").click(function() {
    $(".designImgText").toggle(1000, "linear");
    $(".designDescription").toggle(1000, "linear");
  });
  $(".developmentDescription").click(function() {
    $(".developmentImgText").toggle(1000, "linear");
    $(".developmentDescription").toggle(1000, "linear");
  });
  $(".productManagementDescription").click(function() {
    $(".productManagementImgText").toggle(1000, "linear");
    $(".productManagementDescription").toggle(1000, "linear");
  });
  $("#img1").hover(function() {
    $("#hover1").show().offset($("#img1").offset());
  }, function() {
    $("#hover1").hide();
  });

    $("#userInput form").submit(function(event) {
      var nameInput = $("#nameInput").val();
      alert(nameInput);
      $("#receivedMessage").text("Thank you " + nameInput + " for your message. We have received it.");
      event.preventDefault();
    });
  });
