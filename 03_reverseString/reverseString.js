const reverseString = function(string) {
    // Convert input String into CharArray
    const input = string.split("");

    // Reverse the order of elements in Array input
    const output = input.reverse();
    
    // Convert chararcter Array to String without separators and return result
    return output.join("");
};

// Do not edit below this line
module.exports = reverseString;