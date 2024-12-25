const findTheOldest = function(array) {
    let oldest = array[0];
    for(let i = 0; i < array.length; i++)
    {
        if(array[i].yearOfDeath)
            array[i].age = array[i].yearOfDeath - array[i].yearOfBirth;
        else
            array[i].age = 2024 - array[i].yearOfBirth;
        if(array[i].age > oldest.age)
            oldest = array[i];
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
