let str = 0
let price
let tax
let fee


//function select(){
//    let ans = document.getElementById("select").value
//    if(ans == "enable"){
//        selector = 1
//        console.log(selector)
//        let html1 = '<input type="text" id="fee" value="">'
//        let html2 = '<button onclick="run()">Calculate</button>'
//        document.getElementById("feediv").innerHTML = html1;
//        document.getElementById("submitbutt").innerHTML = html2;
//        document.getElementById("selecting").remove();
//
//   } else if(ans == "disable"){
//        selector = 0
//        let html2 = '<button id="hitung" onclick="run()">Calculate</button>'
//        document.getElementById("selecting").remove();
//        document.getElementById("servfee").remove();
//        document.getElementById("submitbutt").innerHTML = html2;
//    }
//    
//  }



function run(){
  //defining
  price = parseFloat(document.getElementById("price").value)
  tax = parseFloat(document.getElementById("tax").value)
  fee = parseFloat(document.getElementById("fee").value)
  console.log(price,tax,fee)
  
  function test(){
    if(isNaN(tax)){
        tax = 0;
        test();
    }
    if(isNaN(fee)){
        fee = 0;
        test();
    }
    if(isNaN(price)){
        document.getElementById("fail").innerHTML = `Price must <b>NOT</b> be zero. Reloading in 2 seconds.`
        setTimeout(() => {location.reload()},2000)
    } else return str = 1;}
  test()
          
  let space = `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp`
  let space2 = `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp`
  let space3 = `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp`
  
  if(str == 1){calculate(price,tax,fee)}
    
  function calculate(p,t,f){
    let startp = price
    let serv = price*(fee/100)
    p += p*(fee/100)
    let taxlone = p*(tax/100);
    p += p*(tax/100)
    console.log(p)
    //let startprice = `${space}Total: <b>${startp}</b>`
    //let serfee = `Service fee (<i>${f}%</i>): <b>${serv}</b>`
    //let taxfinal = `${space3}Tax (<i>${t}%</i>): <b>${taxlone}</b>`
    //let msg = `${space2}Grand total: <b>${p}</b>`
    //document.getElementById("finaltext").innerHTML = `${startprice}<br>${serfee}<br>${taxfinal}<br>${msg}`
    let textfinal = `${space}Total:<br>Service fee (<i>${f}%</i>):<br>${space3}Tax (<i>${t}%</i>):<br>${space2}Grand total:`
    document.getElementById("finaltext").innerHTML = textfinal
     
    let numfinal = `<b>${startp}<br>${serv}<br>${taxlone}<br>${p}</b>`
    document.getElementById("finalnum").innerHTML = numfinal
  }
    
//  function nofee(p,t){
//    p += p*(tax/100)
//    console.log(p)
//    let msg = `The final price is <b>${p}</b>`
//    document.getElementById("finaltext").innerHTML = msg
//}
}

    
    
function reset(){
  location.reload()
}
