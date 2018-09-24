// Given an array of unsorted positive integers, write a
// function that finds runs of 3 consecutive numbers (ascending or descending)
// and returns the indices where such runs begin. If no such runs are found, return null.
// result =  [0,4,6,7];
complimentary = (k, array) => {
    const obj = {};
    for (let i = 0; i < array.length; i++) {
        if (obj[array[i]]) {
            obj[array[i]].push(i);
        } else {
            obj[array[i]] = [i];
        }
    }
    let count = 0;
    for (let prop  in obj) {
        if (obj.hasOwnProperty(prop)) {
            const complimentaryKey = 6 - prop;
            if(obj[prop] && obj[complimentaryKey] && obj[prop]){
                count += (obj[prop].length * obj[complimentaryKey].length);
            }
        }
    }
    return count;
};
const array = [1, 8, -3, 0, 1, 3, -2, 4, 5];
// const array = [4, 1, 1, 1, 2];
console.log("result : ", complimentary(6, array));