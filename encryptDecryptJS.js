#!/usr/bin/env node

let kill = 0

function encrypter() {
    let kalimat = String(document.getElementById("text").value)
    let code
    let result=""

    if(kalimat == ""){
        document.getElementById("fail").innerHTML = "Text box cannot be empty."
        kill = 1
    } else {
        document.getElementById("fail").innerHTML = " "

    let arr = kalimat.slice('');
    for(i=0;i<arr.length; i++){
        code = kalimat.charCodeAt(i);
        code += 3
        if(code > 122 && code < 126) {
            code -= 26
          } else if(code < 94 && code > 90){
            code -= 26
          } else if(code < 61 && code > 57){
            code -= 10
          } else if(code > 125){
            console.log("Only available for alphabets and numbers.")
            break;
          } else if(code > 35 && code <48){
            console.log("Inavlid characters.")
            break;
          }
        result += String.fromCharCode(code);
    }
    console.log(result)
    document.getElementById("final").innerHTML = `Your encrypted message is<br><b>${result}</b>`
   }}


function decrypter() {
    let kalimat = String(document.getElementById("text").value)
    let code
    let result = ""

    if(kalimat == ""){
        document.getElementById("fail").innerHTML = "Text box cannot be empty."
        kill = 1
    } else {
        document.getElementById("fail").innerHTML = " "

    let arr = kalimat.slice("")
    for(i=0;i<arr.length;i++){
        code = kalimat.charCodeAt(i)
        code -= 3
        if(code < 97 && code >93) {
            code +=26
          } else if(code > 44 && code < 48){
            code += 10
          } else if(code > 61 && code < 65) {
            code +=26
          } else if(code > 36 && code < 45){
            console.log("Invalid characters.")
            break;
          } else if(code > 122){
            console.log("Only available for alphabets and numbers.")
            break;
          }
        result += String.fromCharCode(code);
    }
    console.log(result)
    document.getElementById("final").innerHTML = `Your decrypted message is<br><b>${result}</b>`
   }}

function reset() {
    location.reload()
}
