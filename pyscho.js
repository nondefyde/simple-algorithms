// Given an array of unsorted positive integers, write a
// function that finds runs of 3 consecutive numbers (ascending or descending)
// and returns the indices where such runs begin. If no such runs are found, return null.
// result =  [0,4,6,7];
physcoMetrics = (scores, lowerLimits, upperLimits) => {
    const result = [];
    const ranges = lowerLimits.map((lower, index) => {
        return [lower, upperLimits[index]];
    });

    function sort(array) {
        array.sort(function (a, b) {
            return a - b
        })
    }

    sort(scores);
    const min = Math.min(...scores);
    const max = Math.max(...scores);
    console.log('scores : ', scores);
    for (let i = 0; i < ranges.length; i++) {
        const bound = ranges[i];
        if(bound[0] > min){

        }
        let minIndex = -1;
        let maxIndex = -1;
        let count = 0;
        console.log('bound : ', bound);
        if (bound[0] <= min) {
            minIndex = scores.indexOf(min);
            console.log('minIndex : ', minIndex);
        }
        if (bound[1] >= max) {
            maxIndex = scores.indexOf(max);
            console.log('maxIndex : ', maxIndex);
        }
        if (minIndex >= 0 && maxIndex >= 0) {
            console.log('minIndex, maxIndex : ', minIndex, maxIndex);
            count = (maxIndex - minIndex) + 1;
            console.log('count : ', count);
        }
        console.log('max, min : ', max, min);
        result.push(count);
        break;
    }
    // result.push(count);
    return result;
};

// const scores = [1, 3, 5, 6, 8];
// const lower = [2];
// const upper = [6];

const scores = [4, 8, 7];
const lower = [2, 4];
const upper = [8, 4];

console.log("pysco : ", physcoMetrics(scores, lower, upper));