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

  $("#img2").hover(function() {
    $("#hover2").show().offset($("#img2").offset());
  }, function() {
    $("#hover2").hide();
  });

  $("#img3").hover(function() {
    $("#hover3").show().offset($("#img3").offset());
  }, function() {
    $("#hover3").hide();
  });

  $("#img4").hover(function() {
    $("#hover4").show().offset($("#img4").offset());
  }, function() {
    $("#hover4").hide();
  });

  $("#img5").hover(function() {
    $("#hover5").show().offset($("#img5").offset());
  }, function() {
    $("#hover5").hide();
  });

  $("#img6").hover(function() {
    $("#hover6").show().offset($("#img6").offset());
  }, function() {
    $("#hover6").hide();
  });

  $("#img7").hover(function() {
    $("#hover7").show().offset($("#img7").offset());
  }, function() {
    $("#hover7").hide();
  });

  $("#img8").hover(function() {
    $("#hover8").show().offset($("#img8").offset());
  }, function() {
    $("#hover8").hide();
  });

    $("#mcEmbeddedSubscribeForm").submit(function(event) {
      var nameInput = $("#nameInput").val();
      $("#receivedMessage").text("Thank you " + nameInput + " for your message. We have received it.");
      $("#mcEmbeddedSubscribeForm")[0].reset();
      event.preventDefault();
    });
  });
