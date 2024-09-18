const palindromes = function (palin) {
    const alphanum = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let cleanPalin = palin
                    .toLowerCase()
                    .split('')
                    .filter((element) => alphanum.includes(element))
                    .join('')
    let reversePalin = cleanPalin.split('')
                        .reverse()
                        .join('')
    return reversePalin === cleanPalin
};

// Do not edit below this line
module.exports = palindromes;
