const add = function(a, b) {
  return a + b
};

const subtract = function(a,b) {
  return a - b
};

const sum = function(array) {
	return array.reduce((sum, current) => sum + current, 0)
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current, 1)
};

const power = function(num, pow) {
  return num**pow
};

const factorial = function(num) {
  if(num === 0){
    return 1
  }else{
    let numSolve = 1
    for(fac = 1; num > 0; fac++){
      numSolve = numSolve * num
      num--
    }
    return numSolve
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
