let yqm = ""
//yqm 1, yearly; 2, monthly; 3, quarterly
let string = ""

function start() {
    let m = parseFloat(document.getElementById("money").value)
    let n = parseFloat(document.getElementById("percent").value)
    let times = parseFloat(document.getElementById("times").value)
    let waktu = 0

    function repeat(a, b, c) {
            for(i=0;i<c;i++){            
            let per = b/100
            a += a*per
            waktu += 1
            string += `${yqm} ${waktu}, Money: ${a}` + "\n"
            document.getElementById("result").innerText = string}
            // if(waktu < times) {
            //     repeat(m, n, times)
            // }

            let different = a - m
            let stringTotal = `Total Amount of Interest = ${different}`
            document.getElementById("differ").innerText = stringTotal
    }
    repeat(m,n,times)
}


function yearly() {
    yqm = "Year"
    //text
    document.getElementById("buttons").remove();
    var tag = document.createElement("h2");
    var text = document.createTextNode("Enter the amount of years");
    tag.appendChild(text);
    var divi = document.getElementById("timediv");
    divi.appendChild(tag)

    //input id=times
    var input = document.createElement("input");
    var br = document.createElement("br");
    input.setAttribute("id",'times')
    input.setAttribute("type","text")
    input.setAttribute('value',"");
    document.getElementById("timediv").appendChild(input);
    document.getElementById("timediv").appendChild(br)

    //submit
    var button = document.createElement("button")
    var br = document.createElement("br");
    var division = document.getElementById("timediv")
    button.setAttribute('onclick','start()')
    button.innerText = "Calculate"
    division.appendChild(br);
    division.appendChild(button);
}


function monthly() {
    yqm = "Month"
    //text
    document.getElementById("buttons").remove();
    var tag = document.createElement("h2");
    var text = document.createTextNode("Enter the amount of months");
    tag.appendChild(text);
    var divi = document.getElementById("timediv");
    divi.appendChild(tag)

    //input id=times
    var input = document.createElement("input");
    var br = document.createElement("br");
    input.setAttribute("id",'times')
    input.setAttribute("type","text")
    input.setAttribute('value',"");
    document.getElementById("timediv").appendChild(input);
    document.getElementById("timediv").appendChild(br)

    //submit
    var button = document.createElement("button")
    var br = document.createElement("br");
    var division = document.getElementById("timediv")
    button.setAttribute('onclick','start()')
    button.innerText = "Calculate"
    division.appendChild(br);
    division.appendChild(button);
}


function quarterly() {
    yqm = "Quarter"
    //text
    document.getElementById("buttons").remove();
    var tag = document.createElement("h2");
    var text = document.createTextNode("Enter the amount of quarters");
    tag.appendChild(text);
    var divi = document.getElementById("timediv");
    divi.appendChild(tag)

    //input id=times
    var input = document.createElement("input");
    var br = document.createElement("br");
    input.setAttribute("id",'times')
    input.setAttribute("type","text")
    input.setAttribute('value',"");
    document.getElementById("timediv").appendChild(input);
    document.getElementById("timediv").appendChild(br)

    //submit
    var button = document.createElement("button")
    var br = document.createElement("br");
    var division = document.getElementById("timediv")
    button.setAttribute('onclick','start()')
    button.innerText = "Calculate"
    division.appendChild(br);
    division.appendChild(button);
}

function reset() {
    location.reload();
}

// a ; money
// b ; percentage(only number)
// c ; amount of time