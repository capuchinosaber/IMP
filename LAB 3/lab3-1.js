var connection = new WebSocket('wss://obscure-waters-98157.herokuapp.com');


connection.onopen = function () {
  var Status = document.getElementById("showed");
  console.log("open");
  showed.innerHTML = "CONNECT SUCCESSFULLY" ;
};

connection.onerror = function () {
  var Status = document.getElementById("showed");
  console.log("error");
  showed.innerHTML = "CANNOT CONNECT" ;
};

connection.onclose = function () {
  var Status = document.getElementById("showed");
  console.log("close");
  showed.innerHTML = "CONNECTION HAS CLOSED" ;
};

$("a#sendButton").click(function(event) {
  event.preventDefault();
})


function send() {

  var messageSent = document.getElementById("input");
  if (messageSent.value == '') {
    window.alert("Write your message here!");
  } else {
    connection.send(messageSent.value);
  }
  messageSent.value = "";
}
/*send message by pressing Enter key*/
function enter(event) {
  var messageSent = document.getElementById("input");
  var i = event.keyCode;
  if (i == 13)
  {
    if(messageSent.value == '')
    {
      alert("Enter some text");
    } else {
      connection.send(messageSent.value);
    }
  } else {
    return false;
  }
  messageSent.value = "";
}

function WebSocketTest() {
  var chatRoom = document.getElementById("roomChat");
  connection.onmessage = function(message) {
    console.log(roomChat.innerHTML += "<br>" + "-----" + message.data);
  }
}