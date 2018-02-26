function addPerson() {
    
  var list = document.getElementById("nameList");
  //input value

  var personAdded = document.getElementById("inputField");
  

  if (personAdded.value === '') {
    alert("You must write a person's name here!");
  }

  else {
    //add li tag in the ul list
    var li = document.createElement("li");
    li.setAttribute("class", "list-item");
    //add value into li
    
    li.appendChild(document.createTextNode(personAdded.value));
    list.appendChild(li);
    //set input value to "" like origin
    
    personAdded.value = "";
     }
}