let dev = "";
let m;
//m is story pick
let activity = 0;




//========DOCS READY========
$(document).ready(() => {
    //for content hide
    if(!$('#content').hasClass('inactive')) {
        $('#content').addClass('inactive');
    } else {
        console.log($('#content').attr('class'))
    }

    //for br on page
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

    //for randomizer-choose eventlistener
    var elrand = document.getElementById('randompick');
    var elchoose = document.getElementById('choosepick')
    elrand.addEventListener('click', () => {
        var rand = 'rand'
        chooseRandom(rand);
    });
    elchoose.addEventListener('click', () => {
        var pick = 'pick'
        chooseRandom(pick);
    })
});




//========MAIN FUNCTIONS========
//appending all the inputs
let allowaccess = 0;

function appending() {
    let timeout = 0;
    if(activity == 1) {
        for(i=0;i<arr[m].length;i++) {
            var ol = document.getElementById("list");
            var list = document.createElement('li');
            var text = document.createTextNode(`${String(arr[m][i])}: `);
            list.appendChild(text);
            var el = document.createElement('input');
            var obj = {
                'type': 'text',
                'id': `input${i}`,
                'value': ''
            }
            attrfunc(el, obj)
            list.appendChild(el);
            ol.appendChild(list);
            activity = 0
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
            activity = 1;
            $("#content").removeClass('inactive').addClass('active');
            appending();
        } else {
            console.warn("Appender active already.")
            appending();
        }
    }
}

function chooseRandom(choice) {
    if($('#randomizer-container').hasClass('active')) {
        $('#randomizer-container').removeClass('active').addClass('inactive');
    } else {
        console.error('Randomizer container already has inactive class')
    }
    if(choice == 'rand') {
        addup(Math.floor(Math.random() * storyarr.length))
        activity = 1;
        if($('#content').hasClass('inactive')) {
            $('#br2').hide();
            $("#content").removeClass('inactive').addClass('active');
        } else {
            console.error("Content is already active")
        }
        console.log("random pick")
        appending();
    } else if(choice == 'pick') {
        activateChoose();
    }
}

function activateChoose() {
    if($('#btn-container').hasClass('inactive')) {
        $('#btn-container').removeClass('inactive').addClass('active');
        console.log('non-random pick.');
    } else {
        console.error('Container already has \'active\' class.')
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

function run() {
    let val = "";
    let story = storyarr[m];
    let conststory = story.split('{}')
    let splstory = story.split('{}');
    let strtest = "";
    for(j=0;j<conststory.length-1;j++) {
        var doc = document.getElementById(`input${j}`).value;
        if(doc == "" || doc == " ") {
            strtest += "x"
        } else {
            strtest += "v"
        }
    }
    if(!strtest.includes('x')) {
        for(i=0;i<conststory.length-1;i++) {
            val = document.getElementById(`input${i}`).value;
            splstory.splice((i*2)+1, 0, val);
        }
        console.log(splstory);
        let final = splstory.join('');
        document.getElementById('finish').innerText = final
    } else {
        if($('#errorinput').hasClass('inactive')) {
            $('#errorinput').removeClass('inactive').addClass('active');
            setTimeout(() => {
                $('#errorinput').removeClass('active').addClass('inactive')
            }, 2000);
        } else {
            console.error('Error is already Active')
        }
    }
}




//========MISC FUNCTIONS========
//setattribute func
function attrfunc(el, attr) {
    for(let key in attr) {
        el.setAttribute(`${key}`, `${attr[key]}`);
    }
}

//addup function
function addup(param) {
    m = param;
}

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

function warning() {
    return "Confirm"
}
window.onbeforeunload = warning;




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

function proc() {
    var el = document.createElement('button');
    el.setAttribute('id', 'select');
    el.setAttribute('class', 'selected');
    el.setAttribute('onclick', 'selectclick();beforeenter()')
    var text = document.createTextNode('Select');
    el.appendChild(text);
    $('#select-container').append(el);
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
    ],
    arr4 = [
        "Noun",
        "Color",
        "Number",
        "Place",
        "Continous Verb",
        "Family Member 1",
        "Family Member 2",
        "Family Member 3",
        "Name of Book",
        "Dessert",
        "Flavor",
        "Number",
        "Type of Candy",
        "Dessert Flavor",
        "Fruit",
        "Dessert Topping",
        "Food"
    ],
    arr5 = [
        "Adjective",
        "Superlative",
        "Noun",
        "Adjective",
        "Noun",
        "Adjective",
        "Noun",
        "Verb",
        "Noun",
        "Verb",
        "Noun",
        "Adjective",
        "Adjective",
        "Plural Noun",
        "City",
        "Noun",
        "Noun"
    ],
    arr6 = [
        "Name",
        "Verb",
        "Subject in School",
        "Body Part",
        "A Sound",
        "Color",
        "Body Part",
        "Adjective",
        "Verb",
        "Emotion",
        "Noun",
        "Adjective",
        "Noun"
    ],
    arr7 = [
        "Adjective",
        "Verb",
        "Verb",
        "Name",
        "Length Of Time",
        "Body Part",
        "Interjection",
        "Superlative",
        "Place",
        "Adverb",
        "Noun",
        "Food",
        "Plural Animal",
        "Noun",
        "Number",
        "Verb",
        "Adjective",
        "Salutation"
    ]
]

var storyarr = [
    `Hello, my fellow {} in 2020, it\'s me, George Washington, the first {}. I am writting from (the) {}, where I have been secretly living for the past {} years. I am concerned by the {} state of affairs in America these days. It seems that your politicians are more concered with {} one another than with listening to the {} of the people. WHen we declared our independence from (the) {}, we set forth on a/an {} path guided by the voices of the everyday {}. If we\'re going to keep {}, then we need to learn how to respect all {}. Don\' get me wrong; we had {} problems in my day, too. Benjamin Franklin once called me a/an {} and kick me in the {}. But at the end of the day, we were able to {} in harmony. Let us find that {} spirit once again, or else I\'m taking my {} off the quarter!`,
    
    `It was a {}, cold November day. I woke up to the {} smell of {} roasting in the {} downstairs. I {} down the stairs to see if I could help {} the dinner. My mom said, "See if {} needs a fresh {}." So I carried a tray of glasses full of {} into the {} room. When I got there, I couldn\'t believe my {}! There were {} {} on the {}!`,
    
    `Sonic\'s abode is a very {} place. At first glance, it seems like a/an {} cave, but if you look closer, you\'ll see it\'s actually a comfortable {}. For one, Sonic has a super-cozy beanbag {}. When he feels like listening to some {} tunes from the 1980s, Sonic turns on his old-school {}, pulls out his collection of {}, and jams out. In addition to great tunes, Sonic has plenty of {} equipment to keep him busy. There\'s a dryer that Sonic uses as a treadmill to run {} miles a day. He has a/an {} Ping-Pong table where he plays against . . . himself. (His record is {} wins and zero losses!) And for that final touch, Sonic hung {} all over his cave walls. He\'s got a/an {} photo of (the) {} next to a/an {} poster of {}. It may not be much, but Sonic loves to {} in his cave all the time!`,

    `Summer is here! The {} is shinning, the sky is {}, and the weather is so warm! In fact, it\'s {} degrees outside! I can\'t wait to visit the neighborhood {} and go {}!\n\nWhen we go to the pool, everyone in my family likes to spend the time a little differently. {} likes to race down the water slides, while {} jumps as far as possible off the high dive! {} likes to sit by the pool and read {} without even getting in the water!\n\nAfter go swimming, we like to go out for {}. My favorite ice cream flavor is {}. I get {} scoops and add the following toppings: {}, {}, {}, and {}! Summer nights are the best. At the end of the day, there\'s nothing like gathering arond the campfire roasting {}!`,

    `My cubicle is {}. It is the {} cubicle in the office. I have a {} on my desk next to a/an {} {}. In my drawer, I also have a/an {} {}. One time a coworker tried to {} a {} on my desk. I said to him, "Hey!" how would you like it if I {} your {} ? I\'ll do it if you don\'t leave.\n\nMy one complaint about my cubicle is that it is {}. I think everyone here at the office complains about this. We also complain that our cubicle is {}. If we had money in our budget, my boss could purchase some {} to help alleviate this problem. Our boss doesn\'t understand. His office is the size of {}. He has enough room in his office to put a {} and a {} in there.`,

    `Dear {},\n\nThe first time I saw you my heart {} with joy. We were in {} class and you raise your {} to ask a question. Your voice sounded like {}. Then I noticed you {} {}. It is so {}! Overall, I {} you. I would tell you who I am but I\'m too {}. Just know that the {} you recieve on Valentine\'s Day is from me. I hope you think it\'s {}.\nLove,\nYour {} Admirer`,

    `It was a {}, summer afternoon when he {} by me and said, "Hey." My eyes {} as my heartbeat fluttered. In that instant I knew {} and I would love each other for {}.\n\n"Hey," I said back. Then he looked deep into my {} and replied, "{}, you are the {} girl I have ever seen."\n\nWe sat in the {} and stared at each other for hours. As his hand {} touched my hand, sparks flew. \n\nWe talked about {} and other important details of our lives. He loved {} and {} almost as much as I loved him. He offered to show me his {} collection. For {} days we talked and {}. The warm summer days turned {} and he had to leave. I didn\'t even get to say {}.`
]

var strtemp = `Adjective: 
Verb: 
Verb: 
Name: 
Length Of Time: 
Body Part: 
Interjection: 
Superlative: 
Place: 
Adverb: 
Noun: 
Food: 
Plural Animal: 
Noun: 
Number: 
Verb: 
Adjective: 
Salutation: `