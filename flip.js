// Given an array of unsorted positive integers, write a
// function that finds runs of 3 consecutive numbers (ascending or descending)
// and returns the indices where such runs begin. If no such runs are found, return null.
// result =  [0,4,6,7];
flip = (A, B) => {
    let min = Math.max(...A) + 1;
    for (let i = 0; i < A.length; i++) {
        if (A[i] !== B[i]) {
            let temp = B[i];
            if (temp < min) {
                min = temp;
            }
        }
    }
    return min;
};
//
// const a = [1, 2, 4, 3];
// const b = [1, 3, 2, 3];

// const a = [3, 2, 1, 6, 5];
// const b = [4, 2, 1, 3, 3];

console.log("result : ", flip(a, b));