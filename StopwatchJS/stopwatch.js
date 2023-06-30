//METHOD #1
// $(document).ready(() => {
//     console.log("Ready");
//     $("#result").text("00.00")

//     //Defining time
//     let first = 0;
//     let second = 0;
//     let third = 0;
//     let forth = 0;

//     //function
//     function firstfunc() {
//         if(first < 9) {
//             first += 1;
//         } else if(first == 9) {
//             first = 0;
//         }
//         // return first;
//     }

//     function secondfunc() {
//         if(second < 9) {
//             second += 1;
//         } else if(second == 9) {
//             second = 0;
//         }
//         // return second;
//     }

//     function thirdfunc() {
//         if(third < 9) {
//             third += 1;
//         } else if(third == 9) {
//             third = 0;
//         }
//         // return third;
//     }

//     function forthfunc() {
//         if(forth < 9) {
//             forth += 1;
//         } else if(forth == 9) {
//             forth = 0;
//         }
//         // return forth;
//     }


//     //listener start
//     var start = document.getElementById("start");
//     start.addEventListener('click', () => {
//         //first
//         function firstrep() {
//             setTimeout(() => {
//                 if(first < 10) {
//                     firstfunc();
//                     firstrep()
//                 } else {
//                     console.log("Stopwatch stopped")
//                 }
//             }, 10000)
//         }
        
//         //second
//         function secondrep() {
//             setTimeout(() => {
//                 if(second < 10) {
//                     secondfunc();
//                     secondrep()
//                 } else {
//                     console.log("Stopwatch stopped")
//                 }
//             }, 1000)
//         }

//         //third
//         function thirdrep() {
//             setTimeout(() => {
//                 if(third < 10) {
//                     thirdfunc();
//                     thirdrep()
//                 } else {
//                     console.log("Stopwatch stopped")
//                 }
//             }, 100)
//         }

//         //forth
//         function forthrep() {
//             setTimeout(() => {
//                 if(forth < 10) {
//                     forthfunc();
//                     forthrep()
//                 } else {
//                     console.log("Stopwatch stopped")
//                 }
//             }, 10)
//         }

//         //calling
//         function repeat() {
//             if(first < 10) {
//                 setTimeout(() => {
//                     if(first < 10) {
//                         $("#result").text(`${first}${second}.${third}${forth}`)
//                     }
//                     repeat()
//                 }, 1)
//             } else {
//                 console.log("Stopwatch stopped")
//             }
//         }

//         firstrep();
//         secondrep();
//         thirdrep();
//         forthrep();
//         repeat()
//     })

//     //listener stop
//     var stop = document.getElementById("stop");
//     stop.addEventListener('click', () => {
//         first = 10
//         second = 10
//         third = 10
//         forth = 10
//     })

//     // var reset = document.getElementById("reset")
//     // reset.addEventListener('click', () => {
//     //     location.reload()
//     // })

//     //reset
//     $('#reset').on('click', () => {
//         $('#result').text('00.00')
//         first = 0
//         second = 0
//         third = 0
//         forth = 0
//     })
// })

//METHOD #2
//use array and index
$(document).ready(() => {
    console.log("Ready");

    //variables
    let active = 0;
    let allow = 0;
    let proc = 0;
    let proc2 = 0;
    let index = [0, 0, 0, 0]
    let first, second, third ,forth, result;
    var startBtn = document.getElementById("start")

    //setup
    $("#result").text("00.00")
    $("#resume").attr('style', 'cursor: not-allowed;')

    //test
    // for(i=0; i<10;i++) {
    //     let num = parseInt(index[1])
    //     num = i
    //     console.log(num)
    //     index[1] = i
    //     console.log(index[1])
    //     console.log(`${index[0]}${index[1]}.${index[2]}${index[3]}`)
    // }

    //function to add up
    function addFunc(n) {
        if(index[n+1] === 0) {
            if(index[n] < 9) {
                index[n] += 1;
            } else if(index[n] === 9) {
                index[n] = 0;
            }
            if(n === 1) {
                proc = 1;
            } else if(n === 2) {
                proc2 = 1;
            }
        }
    }

    //function to start/execute
    function start() {
        active = 1;
        $("#start").attr('style', 'cursor: not-allowed; background-color: rgb(194, 194, 194); transition-duration: 0.3s;')
        result = setInterval(() => {
            document.getElementById("result").innerText = `${index[0]}${index[1]}.${index[2]}${index[3]}`
        }, 10);        

        //first digit
        setTimeout(() => {
            first = setInterval(() => {
                if(index[0] < 10 && active === 1) {
                    // $("#result2").text(index[1])
                    console.log("First ran")
                    if(proc === 1){
                        addFunc(0)
                        proc = 0;
                    }
                }
            }, 10);
        }, 1000);

        //second digit
        setTimeout(() => {
            second = setInterval(() => {
                if(index[1] < 10 && active === 1) {
                    if(proc2 === 1) {
                        addFunc(1);
                        proc2 = 0;
                    }
                }
            }, 10)
        }, 100);

        //third digit
        setTimeout(() => {
            third = setInterval(() => {
                if(index[2] < 10 && active === 1) {
                    addFunc(2);
                }
            }, 10)
        }, 10);

        //forth digit
        forth = setInterval(() => {
            if(index[3] < 9 ) {
                index[3] += 1;
            } else {
                index[3] = 0;
            }
        }, 10);
    }

    //start button listener
    startBtn.addEventListener('click', () => {
        if(active === 0) {
            start()
        } else if(active === 1) {
            console.error("Already running")
        } else {
            console.error("Error: Start button disabled.")
        }
    })

    //resume button listener
    $("#resume").on('click', () => {
        if(allow === 1) {
            active = 1;
            result = setInterval(() => {
                document.getElementById("result").innerText = `${index[0]}${index[1]}.${index[2]}${index[3]}`
            }, 10);

            forth = setInterval(() => {
                if(index[3] < 9) {
                    index[3] += 1;
                } else {
                    index[3] = 0;
                }
            }, 10);
            allow = 0;
            $("#resume").attr('style', 'cursor: not-allowed;')
        }
    })

    //stop button listener
    $("#stop").on('click', () => {
        try {
            // clearInterval(first)
            // clearInterval(second)
            // clearInterval(third)
            clearInterval(forth)
            clearInterval(result)
            active = 0;
            allow = 1;
            $("#resume").attr('style', 'cursor: auto;')
        }
        catch(err) {
            console.error(err)
        }
    })

    //reset button listener
    $("#reset").on('click', () => {
        $("start").removeAttr('id').attr("id", 'start')
        location.reload()
    })

    //lap button listener
    $("#lap").on('click', () => {
        let el = $("<p></p>").text(`${index[0]}${index[1]}.${index[2]}${index[3]}`)
        $("#lapDiv").append(el)
    })
})
