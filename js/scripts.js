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
      $("#hawaii").show();
    } else if (type === "sightSee" && temperature === "hot" || "cold") {
      $("form").hide();
      $("#philadelphia").show();
    } else if (type === "beActive" && temperature === "cold") {
      $("form").hide();
      $("#mtBachelor").show();
    }

    /*
    console.log(name);
    console.log(age);
    console.log(type);
    console.log(temperature);
    console.log(favoriteDestination); */

  });

});
