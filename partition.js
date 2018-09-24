// Given an array of unsorted positive integers, write a
// function that finds runs of 3 consecutive numbers (ascending or descending)
// and returns the indices where such runs begin. If no such runs are found, return null.
// result =  [0,4,6,7];
partition = (array) => {
    const winter = [];
    const summer = [];
    let move = array.length;
    for (let i = 0, j = array.length - 1; i < move; i++) {
        if (array[i] < array[j]) {
            winter.push(array[i]);
            summer.push(array[j]);
            move--;
            j--;
        }else{
            winter.push(array[i]);
        }
    }
    return winter.length
};

const array = [-5, -5, -5, -42, 6, 12];
// const array = [5, -2, 3, 8, 6];

console.log("array : ", partition(array));