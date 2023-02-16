const palindromes = function (str) {
    
// RegExp to remove unwanted characters
    let reg = /[^A-Za-z0-9]/g;

// Remove unwanted and lower all characters
    let lowStr = str.replace(reg, "").toLowerCase();

// Split String into Array of characters, reverse them and 
// join back to a String-Object
    let rev = lowStr.split("").reverse().join("");

// Compare Strings and return result
    return lowStr === rev;

};

// Do not edit below this line
module.exports = palindromes;
