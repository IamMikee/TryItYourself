function power(base, rep) {
    let n = 1;
    for(i=1;i<=rep ; i++) {
        n *= base;
        console.log(`${base}^${i} = ${n}`)
    }
}

// power(4, 20)


function modulo(base, mod) {
    console.log(base % mod);
}

// modulo(5, 2)


function modexp(base, exp, mod) {
    console.log("Starting calculator...");
    setTimeout(() => {console.log("Calculating...")}, 700);
    setTimeout(function() {
        let n = 1;
        for(i=1; i<=exp; i++) {
            n *= base;
            console.log(`n${i} = ${n}`);
        }
        return console.log(`The modulo of ${n} divided by ${mod} is ${n%mod}`)
    }, 2000);
}

modexp(4, 3, 3)