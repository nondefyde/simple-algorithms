// Given an array of unsorted positive integers, write a
// function that finds runs of 3 consecutive numbers (ascending or descending)
// and returns the indices where such runs begin. If no such runs are found, return null.
// result =  [0,4,6,7];
suffix = (S) => {
    let count = 0;
    for (let i = 1,  j = S.length - 1; i < S.length; i++, j-- ) {
        const str1 = S.substr(0, i);
        const str2 = S.substr(j, S.length);
        if(str1 === str2){
            count = i;
        }
        if(i === j){
            break;
        }
    }
    return count;
};
const input = 'abbabba';
// const input = 'codility';
// const array = [4, 1, 1, 1, 2];
console.log("result : ", suffix(input));