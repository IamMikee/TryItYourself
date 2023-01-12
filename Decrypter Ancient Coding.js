#!/usr/bin/env node

start: while(true){
let sentence = prompt("Insert your encrypted text")
    let kalimat = sentence
  if(sentence === ""){
    console.log("String cannot be empty")
  }
function encrypt(){
  var arr = kalimat.split("")
 // console.log(kalimat,arr)
  for (let i = 0 ; i < arr.length ; i++){
    let code = kalimat.charCodeAt(i);
      let encrypt = code -= 3
    if(encrypt < 97 && encrypt >93) {
      encrypt +=26
    }
    if(encrypt > 44 && encrypt < 48){
      encrypt += 10
    }
    if(encrypt > 61 && encrypt < 65) {
      encrypt +=26
    }
    if(code > 36 && code < 45){
      console.log("Invalid characters.")
      break;
    }
    if(code > 122){
      console.log("Only available for alphabets and numbers.")
      break;
    }
   // console.log(code)
    let string = (String.fromCharCode(encrypt))
    console.log(string)
  }
}

encrypt()
  if(!sentence == '') continue start;
  //break;
}
