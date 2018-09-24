// Given an array of unsorted positive integers, write a
// function that finds runs of 3 consecutive numbers (ascending or descending)
// and returns the indices where such runs begin. If no such runs are found, return null.
// result =  [0,4,6,7];
tomb = (A) => {
    const basePoint = {x: 0, y: 0};
    function getSlope(a, b) {
        let up = b.y - a.y;
        let down = b.x - a.x;
        return up / down;
    }
    function isInSameQuadrant(x1, x2){
        return (( (x1.x > 0 &&  x2.x > 0) ||  (x1.x < 0 &&  x2.x < 0))
            && ( (x1.y > 0 && x2.y > 0) || (x1.y < 0 && x2.y < 0)));
    }
    for (let i = 0; i < A.length; i++) {
        const baseSlope = getSlope(basePoint, A[i]);
        for (let j = (i + 1); j < A.length; j++) {
            const currentSlope = getSlope(A[j], A[i]);
            if(isInSameQuadrant(A[j], A[i]) && baseSlope === currentSlope){
                A.splice(j, 1);
            }
        }
    }
    return A.length;
};

// const points = [
//     {x: -1, y: -2},
//     {x: 1, y: 2},
//     {x: 2, y: 4},
//     {x: -3, y: 2},
//     {x: 2, y: -2},
// ];

const points = [
    {x: -4, y: 2},
    {x: 1, y: 3},
    {x: 3, y: 3},
    {x: 5, y: 5},
    {x: 4, y: 1},
    {x: 2, y: 2},
    {x: 3, y: -6},
    {x: -6, y: 3},
    {x: 2, y: -2},
    {x: 2, y: -4},
];
console.log('points : ', points);
console.log("result : ", tomb(points));