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
  var portfolioImages = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8"]
  var hoverText = ["hover1", "hover2", "hover3", "hover4", "hover5", "hover6", "hover7", "hover8"]
  porfolioImages.forEach(function(image) {
    $("#" + image).hover(function() {
      hoverText.forEach(function(text) {
      $("#" + text).show().offset($("#" + image).offset());
    }, function() {
      $("#" + text).hide();
    });
  };
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
