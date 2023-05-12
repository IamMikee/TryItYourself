function nine(rep) {
  let sum = 0;
  let n = 9;
  let addit = 90;
  for(i=0; i<rep; i++) {
    sum += n;
    console.log(toFixed(sum));
    n += addit;
    addit *= 10;
  }
}
// nine(30);

function toFixed(x) {
  if(Math.abs(x) > 1.0){
    var e = parseInt(x.toString().split('+')[1]);
    if (e > 20) {
        e -= 20;
        x /= Math.pow(10,e);
        x += (new Array(e+1)).join('0');
    }
  }
  return x;
}

function niners(rep) {
  let n = "9";
  for(i=0;i<rep;i++) {
    var temp = "9"
    n += "+"
    for(j=0;j<i;j++) {
      temp += "9"
    }
    n += temp
  }
  console.log(n)
}
// niners(20)



// Repeat logic
//numlogic baris / line
function numlogic(w) {
  let num = w
  let main = w
  for(i=0; i<Math.round(main/3); i++){
    let sum = ""
    for(j=0; j<3;j++) {
      sum += String(num) + " ";
      num -= 1
      if(num < 1) {break;}
    }
    console.log(sum)
  } 
}
// numlogic(20)


//numlogic enter every 3
function num(w) {
  let num = w;
  for(i=num; i>0; i--) {
    console.log(num)
    num -= 1;
    if(num%3 === 0) {
      console.log("")
    }
  }
}
// try {num(10)}
// catch(err) {console.log("Invalid input.")}


//pyramid
function pyr(height) {
  let largest = ((height-1)*2) + 1
  // console.log(largest)
  for(i=1;i<=height;i++){
    let str = ""
    let space = (largest-((2*i)-1))/2
    for(j=0;j<space;j++){
      str += " "
    }
    for(k=0; k<(2*i)-1 ; k++) {
      str += "*"
    }
    console.log(str)
  }
}
pyr(20)


