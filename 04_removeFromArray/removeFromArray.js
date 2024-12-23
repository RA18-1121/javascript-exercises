const removeFromArray = function(array, ...elements) {
    for(let i = 0; i < elements.length; i++)
    {
        for(let j = 0; j < array.length; j++)
        {
            while(array[j] === elements[i])
            {
                for(let k = j; k < array.length - 1; k++)
                {
                    array[k] = array[k + 1];
                }
                delete array[array.length - 1];
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
