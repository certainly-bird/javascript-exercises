const reverseString = function(string) {
    let stringArray = [''];
    let returnString = '';
    for (let i = 0; i < string.length; i++){
        stringArray.push(string.at(i));
    }
    for (let i = string.length; i > 0; i--){
        returnString = returnString + stringArray[i];
    }
    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
