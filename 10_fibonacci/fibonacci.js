const fibonacci = function(index) {
    if(index == 0)
        return 0;
    if(index < 0)
        return "OOPS";
    let arr = [1,1];
    for(let i = 2; i < index; i++)
    {
        arr[i] = arr[i - 2] + arr[i - 1];
    }
    return arr[index - 1];
};

// Do not edit below this line
module.exports = fibonacci;
