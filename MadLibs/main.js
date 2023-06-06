

//testing
$("#run").click(press())
function press() {
    var input = document.getElementById("input1").value;
    var result = document.getElementById("resulttest");
    return result.innerText = input
}