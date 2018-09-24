// Given an array of unsorted positive integers, write a
// function that finds runs of 3 consecutive numbers (ascending or descending)
// and returns the indices where such runs begin. If no such runs are found, return null.
// result =  [0,4,6,7];
distance = (A, B, C) => {
    if (A.length * B.length * C.length > 1000000000) {
        return -1;
    }
    function sort(array) {
        array.sort(function (a, b) {
            return a - b
        })
    }
    sort(A);
    sort(B);
    sort(C);
    const result = [];
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if (A[i] < B[j]) {
                for (let k = 0; k < C.length; k++) {
                    if (B[j] < C[k]) {
                        result.push([A[i], B[j], C[k]]);
                        break;
                    }
                }
            }
        }
    }
    console.log('result ', result);
    return result.length;
};


const a = [29, 50];
const b = [61, 37];
const c = [37, 70];

// const a = [29, 29];
// const b = [61, 61];
// const c = [70, 70];
//
// const a = [5];
// const b = [5];
// const c = [5];

console.log("result : ", distance(a, b, c));