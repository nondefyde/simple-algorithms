//
// const fibonacci = (n) => {
//     if (n === 0)
//         return 0;
//     else if (n === 1)
//         return 1;
//     else
//         return fibonacci(n - 1) + fibonacci(n - 2);
// };
// const array = [4, 1, 1, 1, 2];

const uniquePairs = (array) => {
    const obj = {};
    for (let i = 0; i < array.length; i++) {
        if (obj[array[i]]) {
            obj[array[i]] += 1;22
        } else {
            obj[array[i]] = 1;
        }
    }
    console.log("obj : ", obj);
    const result = [];
    for (let item in obj) {
        obj[item] -= 1;
        let value = Number(item);
        let compliment = 100 - Number(value);
        if (obj[compliment] && (compliment + value) === 100) {
            obj[compliment] = 0;
            obj[value] = 0;
            result.push([value, compliment]);
        }
    }
    return result;
};

const array = [0, 1, 100, 99, 0, 10, 90, 30, 55, 33, 55, 75, 50, 51, 49, 50, 51, 49, 51];
// [1, 99 ] [0,100], [10,90], 51,49, 50, 50]
// Let me see the answer

console.log("result : ", uniquePairs(array));