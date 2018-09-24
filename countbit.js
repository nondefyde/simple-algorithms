// Given an array of unsorted positive integers, write a
// function that finds runs of 3 consecutive numbers (ascending or descending)
// and returns the indices where such runs begin. If no such runs are found, return null.
// result =  [0,4,6,7];
// getOneBits = (n) => {
//     const toBase2 = n.toString(2).split("");
//     let oneCount = 0;
//     if (toBase2[0] === '0') {
//         oneCount = 1;
//     }
//     const result = [];
//     for (let i = 0; i < toBase2.length; i++) {
//         if (oneCount === 0 && toBase2[i] === '1') {
//             result.push(i + 1);
//         }
//         else if (toBase2[i] === '1') {
//             oneCount = 0;
//         }
//     }
//     result.unshift(result.length);
//     return result;
// };


const uniq = (array) => {
    // const a = ["1", "1", "2", "3", "3", "1"];
    // const unique = a.filter(function (item, i, ar) {
    //     return ar.indexOf(item) === i;
    // });
    // return unique;
    // const arr = [];
    // const store = [];
    // for (let i = 0; i < array.length; i++) {
    //     if (store.indexOf(array[i]) < 0) {
    //         arr.push(array[i]);
    //         store.push(array[i]);
    //     } else {
    //         arr.splice(arr.indexOf(array[i]), 1);
    //     }
    // }
    // return arr;
    const set = new Set(array);
    return Array.from(set);
};
// 1111, 1122, 1234,
console.log(uniq([1, 1, 2, 3, 4]));
// console.log("result : ", getOneBits(161));