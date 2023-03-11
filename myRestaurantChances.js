let temp;
function chance(start, mult, perc) {
    let total = 0
    temp = start*(perc/100)
    // console.log(temp)
    total += temp
    for(i=1; i<mult; i++) {
        let inc = temp*(perc/100)
        total += inc
        temp = inc
    }
    console.log(start+total)
}

chance(5, 2, 50)