// Given an array of unsorted positive integers, write a
// function that finds runs of 3 consecutive numbers (ascending or descending)
// and returns the indices where such runs begin. If no such runs are found, return null.
// result =  [0,4,6,7];
capital = (T) => {
    let i = 0;
    let capital = i;
    const result = Array.from(Array(T.length), () => 0);
    if (T[i] === i) {
        return;
    }
    for (i = 1; i < T.length; i++) {
        if (T[i] === i) {
            capital = i;
            break;
        }
    }
    const distance = {};
    for (let j = 0; (j !== capital && j < T.length); j++) {
        if (distance['']) {

        }
    }
    return result;
};
//
// const a = [1, 2, 4, 3];
// const b = [1, 3, 2, 3];

// const a = [3, 2, 1, 6, 5];
// const b = [4, 2, 1, 3, 3];

console.log("result : ", flip(a, b));