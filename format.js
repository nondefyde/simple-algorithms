// Given an array of unsorted positive integers, write a
// function that finds runs of 3 consecutive numbers (ascending or descending)
// and returns the indices where such runs begin. If no such runs are found, return null.
// result =  [0,4,6,7];
format = (S) => {
    let formatted = S.replace(/[^0-9]+/g, "");
    const dashAfterPos = [];
    for (let i = 0; i < formatted.length; i += 3) {
        const nextIndex = (i + 2);
        const left = formatted.substr(i);
        if (left.length === 4) {
            dashAfterPos.push(i + 1);
            break;
        }
        if (left.length > 3 ) {
            dashAfterPos.push(nextIndex);
        }
    }
    let array = formatted.split("");
    let shiftIndex = 0;
    for (let i = 0; i < dashAfterPos.length; i++) {
        shiftIndex++;
        const position = dashAfterPos[i] + shiftIndex;
        array.splice(position, 0, '-');
    }
    return array.join("")
};
//
// const a = [1, 2, 4, 3];
// const b = [1, 3, 2, 3];

// const a = [3, 2, 1, 6, 5];
// const b = [4, 2, 1, 3, 3];
const value = "00-44 / / - 48 - 5555   8361";
// const value = "555372654";
// const value = "0221985324";
// const value = "1223";

console.log("result : ", format(value));