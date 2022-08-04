/* Pass Array input as first parameter, and Array args of variable length, indicaated by the three dots as second parameter. */
const removeFromArray = function(input, ...args) {
    // loop through every element in Array args
    for (const i in args) {
        //Find index number of the parameter element in Array input
        const index = input.indexOf(args[i]);
        // Remove parameter element in input Array
        if(index > -1) {    // Only splice when element is found
            input.splice(index, 1); // Second parameter specifies remove one element only
        }
        
    }
    return input;
}

// Do not edit below this line
module.exports = removeFromArray;
