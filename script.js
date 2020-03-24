// Get the input field
var input = document.getElementById("myInput");

input.addEventListener("keyup", function (event) {
    var code = document.getElementById("myInput").value;
    if (isFinite(code) && code.length == 3) {
        if (event.which == 13 || event.keyCode == 13) {    // enter is pressed
            window.open("https://http.cat/" + code);
        }
    }
}
);