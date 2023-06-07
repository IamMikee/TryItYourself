let library = require("./util.js");
var array = library.array;
console.log(array)

let m;
function addup(param) {
    m = param;
    console.log("success")
}

//appending all the inputs
function appending() {
    console.log(m)
    for(i=0;i<arr[m].length;i++) {
        var ol = document.getElementById("list");
        var list = document.createElement('li');
        var text = document.createTextNode(`${String(arr[m][i])}: `);
        list.appendChild(text);
        var el = document.createElement('input');
        el.setAttribute('type', 'text');
        el.setAttribute('id', `input${i}`);
        list.appendChild(el);
        ol.appendChild(list);
    }
}

//selector html
function selectclick() {
    setTimeout(() => {
    var take = document.getElementById('selectedbtn')
    var className = parseInt(take.className);
    addup(className-1)
    console.log(m);
    appending();
    }, 100) 
};

//test function
function after() {
    let n = "";
    for(i=0;i<10;i++){
        var el = document.getElementById(`input${i}`);
        n += String(el.getAttribute('id'));
    }
    document.getElementById("resulttest").innerText = n
}

function reset() {
    confirm("Are you sure you want to reload this page? You will lose all your progress.")
    location.reload();
}

function warning() {
    return "Reload this page? You will lose your progress."
}
window.onbeforeunload = warning;

// function press() {
//     var input = document.getElementById("input1").value;
//     var result = document.getElementById("resulttest");
//     return result.innerText = input
// }