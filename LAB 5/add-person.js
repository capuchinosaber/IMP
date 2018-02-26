$(document).ready(function() {

  $("#addNewPerson").click(function() {
    //console.log("click");
    
    if ( $("#inputField").val() == "" ) {
     
     alert("You have to write a person's name!");
    }

    else {

      var li = document.createElement("li");

      var personAdded = $("#inputField").val();
      //console.log(personAdded);

      $(li).attr("class", "list-item");

      $(li).text($("#inputField").val());
      $("#nameList").append( $(li) );
      

      $("#inputField").val("");
    }
  })

  $(".remove").click()
});


