const reverseString = function(string) {
    let word = "";
    for(let i = 0; i < string.length; i++)
    {
        word = word.concat(string.at(-(i + 1)));
    }
    return word;
};

// Do not edit below this line
module.exports = reverseString;
