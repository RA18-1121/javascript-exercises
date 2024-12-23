const sumAll = function(first, last) {
    if(first < 0 || last < 0 || first % 1 !== 0 || last % 1 !== 0 || typeof first !== "number" || typeof last !== "number")
    {
        return "ERROR";
    }
    let sum = 0;
    if(last < first)
    {
        let temp = first;
        first = last;
        last = temp;
    }
    for(let i = first; i <= last; i++)
    {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
