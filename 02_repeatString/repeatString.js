const repeatString = function(string, num) {
    let loopCounter = 1;
    let returnString = string;
    if (num === 0){
        return "";
    }
    if (num < 0){
        return "ERROR";
    }
    while (loopCounter < num){
        returnString = returnString + string;
        loopCounter++;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
