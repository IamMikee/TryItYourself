let m;
function addup(param) {
    m = param;
    console.log("success")
}

$('mainGame.html').on('load', function() {
    console.log("Success")
    $('#content').hide();
})

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

// function warning() {
//     return "Reload this page? You will lose your progress."
// }
// window.onbeforeunload = warning;

var arr = [
    arr1 = [
        "A verb",
        "A noun",
        "A place"
    ], 
    arr2 = [
        "A time",
        "A suffix"
    ]
]

// function proc() {
//     var el = document.createElement('button');
//     el.setAttribute('id', 'select');
//     el.setAttribute('class', 'selected');
//     el.setAttribute('onclick', 'selectclick();beforeenter()')
//     var text = document.createTextNode('Select');
//     el.appendChild(text);
//     $('#container').append(el);
// }

// function press() {
//     var input = document.getElementById("input1").value;
//     var result = document.getElementById("resulttest");
//     return result.innerText = input
// }