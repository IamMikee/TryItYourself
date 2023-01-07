#!/usr/bin/env node

start: while(true){
let sentence = prompt("Insert your sentence")
    let kalimat = sentence
  if(sentence === ""){
    console.log("String cannot be empty")
    break;
  }
function encrypt(){
  var arr = kalimat.split("")
  //console.log(kalimat,arr)
  for (let i = 0 ; i < arr.length ; i++){
    let code = kalimat.charCodeAt(i);
      let encrypt = code += 3
    if(encrypt > 122 && encrypt < 126) {
      encrypt -= 26
    }
    if(encrypt < 94 && encrypt > 90){
      encrypt -= 26
    }
    if(encrypt < 61 && encrypt > 57){
      encrypt -= 10
    }
    if(encrypt > 125) {console.log("Only available for alphabets and numbers.")
      break;}
    if(encrypt > 35 && encrypt <48){console.log("Inavlid characters.")
      break;}
   // console.log(encrypt)
    if(encrypt == 35){let encrypt = " "}
    let string = (String.fromCharCode(encrypt))
    console.log(string)
  }
}

encrypt()
  if(!sentence == '') continue start;
  break;
}
