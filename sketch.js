function sendMessage() {
    var message = document.getElementsByClassName("chating")[0].value;
    document.getElementsByClassName("text")[0].innerHTML += "<p> " + message + "</p>";
    document.getElementsByClassName("chating")[0].value = "";
}