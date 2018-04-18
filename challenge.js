// Given an array of unsorted positive integers, write a
// function that finds runs of 3 consecutive numbers (ascending or descending)
// and returns the indices where such runs begin. If no such runs are found, return null.
// result =  [0,4,6,7];
findConsecutiveRuns = (range, array) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        let consecutive = array.slice(i, (i + range));
        let count = 1;
        let difference = 0;
        for (let j = 1; j < consecutive.length; j++) {
            difference = (difference === 0) ? consecutive[0] - consecutive[j] : difference;
            if (consecutive[j - 1] - consecutive[j] !== difference || Math.abs(difference) !== 1)
                break;
            count++
        }
        if ((count === range)) {
            result.push(i);
        }
    }
    return (result && result.length > 0) ? result : null;
};

const array = [1, 2, 3, 5, 10, 9, 8, 9, 10, 11, 7];
console.log("result : ", findConsecutiveRuns(3, array));