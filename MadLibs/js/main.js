let dev = "";
let m;
let activity = 0;

function addup(param) {
    m = param;
}

// function hidediv() {
//     $('#content').hide();
// }

//========DOCS READY========
$(document).ready(() => {
    if(!$('#content').hasClass('inactive')) {
        $('#content').addClass('inactive');
    } else {
        console.log($('#content').attr('class'))
    }
});




//========MAIN FUNCTIONS========
//appending all the inputs
let allowaccess = 0;

function appending() {
    let timeout = 0;
    if(activity == 0.5) {
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
            activity = 1
        }
    } else {
        if($('#errorselect').hasClass('inactive') && timeout === 0) {
            // console.log("timeoutbef" + timeout)
            $('#errorselect').removeClass('inactive').addClass('p-active');
            timeout = 1;
            console.log("timeout" + timeout)

            setTimeout(() => {
                $('#errorselect').removeClass('p-active').addClass('inactive');
                timeout = 0;
            }, 2000)
        }
        console.error("Error, appending was already ran before.")
    }
}

//selector html
function selectclick() {
    setTimeout(() => {
        var take = document.getElementById('selectedbtn')
        var className = parseInt(take.className);
        console.log(className);
        if(className == 0) {
            invalidstory();
        } else {
            addup(className-1)
            allowaccess = 1;
            contentcheck();
        }
    }, 100);
};

function contentcheck() {
    if(allowaccess === 1) {
        if($('#content').hasClass('inactive') && m !== -1) {
            activity = 0.5;
            $("#content").removeClass('inactive').addClass('active');
            appending();
        } else {
            console.warn("Appender active already.")
            appending();
        }
    }
}

function invalidstory() {
    if($('#invalinput').hasClass('inactive')) {
        $('#invalinput').removeClass('inactive').addClass('active');
        setTimeout(() => {
            $('#invalinput').removeClass("active").addClass('inactive');
        }, 2000)
    }
}




//========MISC FUNCTIONS========
//setattribute func
function attrfunc(el, attr) {
    for(let key in attr) {
        el.setAttribute(`${key}`, `${attr[key]}`);
    }
}

//br function to shift down
$(document).ready(() => {
    for(i=0;i<8;i++) {
        $('#bronly').append('<br>')
    }

    //for developer mode
    var title = document.getElementById('headtitle');
    title.addEventListener('click', function() {
        dev += 'e'
        console.log("+1")
        if(dev === 'eefeef') {
            initdevmode();
        }
    })
    title.addEventListener('copy', () => {
        dev += 'f'
        console.log("++1")
        if(dev === 'eefeef') {
            initdevmode();
        }
    })
});

//(DEV)developer mode tools
function initdevmode() {
    var p = document.createElement('h4')
    var text = document.createTextNode('DEVELOPER TOOLS')
    p.append(text);
    p.setAttribute('style', 'text-align:center; text-decoration:underline;');
    var body = document.getElementById('extras')
    body.append(p);

    converttool();
}

function converttool() {
    var div = document.createElement('div')
    div.setAttribute('id', 'tempconv');

    var p = document.createElement('p');
    var text = document.createTextNode('Convert madlibs.py->js.')
    p.appendChild(text);
    div.appendChild(p);

    var inp = document.createElement('input');
    var attrs = {
        'type': 'button',
        'value': 'Convert',
        'onclick': 'convpy()'
    }
    attrfunc(inp, attrs)
    div.appendChild(inp);

    var par = document.createElement('p');
    par.setAttribute('id', 'result')
    div.appendChild(par);

    var body = document.getElementById('extras');
    body.append(div);
}


//slicing and exporting text for story
function convpy() {
    let text = "";
    let arrtemp = strtemp.split(': ')
    if(arrtemp[1].includes("\n")) {
        arrtemp = strtemp.split(': \n')
    }
    console.log(arrtemp)
    for(i=0;i<arrtemp.length;i++) {
        text += `"${arrtemp[i]}",` + "<br>"
    }
    $('#tempconv #result').append(`${text}`)
}




//Reset
function reset() {
    confirm("Are you sure you want to reload this page? You will lose all your progress.")
    location.reload();
}




//========BETA FUNCTIONS/TEST========
//test function
function after() {
    let n = "";
    for(i=0;i<10;i++){
        var el = document.getElementById(`input${i}`);
        n += String(el.getAttribute('id'));
    }
    document.getElementById("resulttest").innerText = n
}

function warning() {
    return "Reload this page? You will lose your progress."
}
window.onbeforeunload = warning;

function proc() {
    var el = document.createElement('button');
    el.setAttribute('id', 'select');
    el.setAttribute('class', 'selected');
    el.setAttribute('onclick', 'selectclick();beforeenter()')
    var text = document.createTextNode('Select');
    el.appendChild(text);
    $('#container').append(el);
}

function press() {
    var input = document.getElementById("input1").value;
    var result = document.getElementById("resulttest");
    return result.innerText = input
}




//========LIBRARIES========
var arr = [
    arr1 = [
        "Plural Noun",
        "Occupation",
        "Name Of A Place",
        "Number",
        "Plural Noun",
        "Continous Verb",
        "Plural Noun",
        "Name Of A Place",
        "Adjective",
        "Plural Noun",
        "Continous Verb",
        "Adjective",
        "Noun",
        "Part Of The Body",
        "Verb",
        "Adjective",
        "Adjective",
        "Part Of The Body"
    ], 
    arr2 = [
        "Adjective",
        "Adjective",
        "Type Of Bird",
        "Room In A House",
        "Verb (past)",
        "Verb",
        "Relative's Name",
        "Noun",
        "A Liquid",
        "Verb (-ing)",
        "Part Of The Body (plural)",
        "Noun (plural)",
        "Verb (-ing)",
        "Noun"
    ],
    arr3 = [
        "Adjective",
        "Adjective",
        "Noun",
        "Noun",
        "Adjective",
        "Noun",
        "Plural Noun",
        "Adjective",
        "Number",
        "Color",
        "Number",
        "Plural Noun",
        "Adjective",
        "Place",
        "Color",
        "Plural Noun",
        "Verb"
    ]
]

var storyarr = [
    `Hello, my fellow {noun1} in 2020, it\'s me, George Washington, the first {job1}. I am writting from (the) {place1}, where I have been secretly living for the past {num1} years. I am concerned by the {adj1} state of affairs in America these days. It seems that your politicians are more concered with {verb1} one another than with listening to the {noun2} of the people. WHen we declared our independence from (the) {place2}, we set forth on a/an {adj2} path guided by the voices of the everyday {noun3}. If we\'re going to keep {verb2}, then we need to learn how to respect all {noun4}. Don\' get me wrong; we had {adj3} problems in my day, too. Benjamin Franklin once called me a/an {noun5} and kick me in the {body1}. But at the end of the day, we were able to {verb3} in harmony. Let us find that {adj4} spirit once again, or else I\'m taking my {body2} off the quarter!`,
    
    `It was a {adj1}, cold November day. I woke up to the {adj2} smell of {bird} roasting in the {room} downstairs. I {verb1} down the stairs to see if I could help {verb2} the dinner. My mom said, "See if {rel} needs a fresh {noun1}." So I carried a tray of glasses full of {liq} into the {verb3} room. When I got there, I couldn\'t believe my {body}! There were {noun2} {verb4} on the {noun3}!`,
    
    `Sonic\'s abode is a very {adj1} place. At first glance, it seems like a/an {adj2} cave, but if you look closer, you\'ll see it\'s actually a comfortable {noun1}. For one, Sonic has a super-cozy beanbag {noun2}. When he feels like listening to some {adj3} tunes from the 1980s, Sonic turns on his old-school {noun3}, pulls out his collection of {pnoun1}, and jams out. In addition to great tunes, Sonic has plenty of {adj4} equipment to keep him busy. There\'s a dryer that Sonic uses as a treadmill to run {num1} miles a day. He has a/an {col1} Ping-Pong table where he plays against . . . himself. (His record is {num2} wins and zero losses!) And for that final touch, Sonic hung {pnoun2} all over his cave walls. He\'s got a/an {adj5} photo of (the) {place1} next to a/an {col2} poster of {pnoun3}. It may not be much, but Sonic loves to {verb1} in his cave all the time!`
]

var strtemp = `Adjective: 
Adjective: 
Noun: 
Noun: 
Adjective: 
Noun: 
Plural Noun: 
Adjective: 
Number: 
Color: 
Number: 
Plural Noun: 
Adjective: 
Place: 
Color: 
Plural Noun: 
Verb: `