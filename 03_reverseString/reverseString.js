const reverseString = function(string) {
    /* Convert input String into CharArray (split()), 
    then reverse the order of elements in Array (reverse()), 
    then convert chararcter Array to String without separators (join())and return result. */
    return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;