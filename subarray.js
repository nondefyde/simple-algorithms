// Given an a of unsorted positive integers, write a
// function that finds runs of 3 consecutive numbers (ascending or descending)
// and returns the indices where such runs begin. If no such runs are found, return null.
// result =  [0,4,6,7];
subArray = (a, k) => {
    let n = a.length;
    let max_len = 1; // Inialize result

    a = a.map(value => value <= k);
    // One by one fix the starting points
    for (let i = 0; i < n - 1; i++) {
        // Create an empty hash set and add i’th element
        // to it.
        let obj = {};
        obj[a[i]] = 0;
        // Initialize max and min in current subarray
        let mn = a[i], mx = a[i];

        // One by one fix ending points
        for (let j = i + 1; j < n; j++) {
            // If current element is already in hash set, then
            // this subarray cannot contain contiguous elements
            if (obj.hasOwnProperty(a[j]))
                break;
            // Else add curremt element to hash set and update
            // min, max if required.
            obj[a[j]] = 0;
            mn = Math.min(mn, a[j]);
            mx = Math.max(mx, a[j]);

            // We have already cheched for duplicates, now check
            // for other property and update max_len if needed
            if (mx - mn === j - i)
                max_len = Math.max(max_len, mx - mn + 1);
        }
    }
    // return max_len; // Return result
    // const obj = {};
    // let max = 0;
    // let sum = 0;
    // for (let i = 0; i < a.length; i++) {
    //     sum += a[i];
    //     if (sum === k) {
    //         max = Math.max(max, i + 1);
    //     }
    //     let diff = sum - k;
    //     if (obj.hasOwnProperty(diff)) {
    //         max = Math.max(max, i - obj[diff]);
    //     }
    //     if (!obj.hasOwnProperty(sum)) {
    //         obj[sum] = i;
    //     }
    // }
    // return max;
};
const a = [1, 2, 3];
// const a = [1, 2, 3, 4];
// const a = [4, 1, 1, 1, 2];
console.log("result : ", subArray(a, 4));