const fibonacci = function(num) {
    if(num < 0) return 'OOPS'
    if(typeof num !== 'number'){
        parseInt(num)
    }
    let fib = []
    const index = num
    let a = 0, b = 1, c = 0
    fib.push(a)
    fib.push(b)
    for(let i = num - 1; i > 0; i--){
        c = a + b
        a = b
        b = c
        fib.push(c)
    }
    return fib[num]
};

// Do not edit below this line
module.exports = fibonacci;
