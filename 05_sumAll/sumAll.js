const sumAll = function(inputOne, inputTwo) {
    let start = inputOne;
    let end = inputTwo;
    let result = 0;
    /* If One of the parameters is a negative number or one of the parameters isn't a number after all the return ERROR. */ 
    if(inputOne < 0 || inputTwo < 0 || !Number.isInteger(inputOne) || !Number.isInteger(inputTwo)) {
        return "ERROR";
    // If first parameter is bigger than the second, then switch start and end values.    
    } else if (inputOne > inputTwo) {
        start = inputTwo;
        end = inputOne
    }
    // Each pass add the value of the current number to result.
    for(let i = start; i <= end; i++) {
    result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
