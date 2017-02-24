$(document).ready(function(){
  $("form#input").submit(function(event){
    event.preventDefault();
    var name = $("input#nameInput").val();
    var age = parseInt($("input#ageInput").val());
    var type = $("select#typeInput").val();
    var temperature = $("select#temperatureInput").val();
    var favoriteDestination = $("input#favoriteDestinationInput").val();

    if (type === "relax" && temperature === "hot") {
      $("form").hide();
      $("#hawaii").slideToggle();
    } else if (type === "beActive" && temperature === "cold") {
      $("form").hide();
      $("#mtBachelor").slideToggle();
    } else if (type === "sightSee") {
      $("form").hide();
      $("#philadelphia").slideToggle();
    } else {
      $("form").hide();
      $("#noMatch").slideToggle();
      $(".name").text(name);
    }

    $("#returnHawaii").click(function(){
      $("#hawaii").hide();
      $("form").show();
    });

    $("#returnPhiladelphia").click(function(){
      $("#philadelphia").hide();
      $("form").show();
    });

    $("#returnBachelor").click(function(){
      $("#mtBachelor").hide();
      $("form").show();
    });

    $("#returnNoMatch").click(function(){
      $("#noMatch").hide();
      $("form").show();
    });

  });

});
