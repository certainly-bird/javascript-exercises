const sumAll = function(numOne, numTwo) {
    let sumAll = 0;
    if(numOne <= 0 || numTwo <= 0 || !Number.isInteger(numOne) || !Number.isInteger(numTwo)) return 'ERROR';
    if(numOne > numTwo){
        sumAll = numTwo;
        numTwo = numOne;
        numOne = sumAll;
        sumAll = 0;
    }
    for(let i = numOne; i <= numTwo; i++) {
        sumAll += i;
    }
    return sumAll;
};

// Do not edit below this line
module.exports = sumAll;
