/*
//input
var username = prompt("Please enter your name");
//processing
var welcomeMsg = "Welcome to Minon's world "+username;
//output
alert(welcomeMsg);
*/
var btnTranslate = document.querySelector("#btn-translate");
var textData = document.querySelector("#txt-input");
var outputData = document.querySelector("#txt-output");
var serverURL = "https://api.funtranslations.com/translate/minion.json";
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
//console.log(btnTranslate);

function getTranslatedURL(value) {
    return serverURL + "?text=" + value;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something wrong with the server, try again later.");
}

function buttonClicked() {
    console.log("clicked");
    var textValue = textData.value;

    fetch(getTranslatedURL(textValue))
        .then(response => response.json())
        .then(json => outputData.innerText = json.contents.translated)
        .catch(errorHandler);
}

btnTranslate.addEventListener("click",buttonClicked);

