const palindromes = function (string) {
    string = string.toLowerCase();
    string = string.replace(/[^\w]/g, "");
    let j = string.length - 1;
    for(let i = 0; i < string.length; i++)
    {
        if(string[i] !== string[j])
            return false;
        j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
