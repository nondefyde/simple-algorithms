// Given an array of unsorted positive integers, write a
// function that finds runs of 3 consecutive numbers (ascending or descending)
// and returns the indices where such runs begin. If no such runs are found, return null.
// result =  [0,4,6,7];
verifyItem = (origItems, origPrices, items, prices) => {
    const itemPrices = {};
    origItems.forEach((item, index) => {
        itemPrices[origItems[index]] = origPrices[index];
    });
    const wrongPrices = items.filter((item, index) => itemPrices[items[index]] !== prices[index]);
    return wrongPrices.length;
};

// const scores = [1, 3, 5, 6, 8];
// const lower = [2];
// const upper = [6];

// const origItems = ['rice', 'sugar', 'wheat', 'cheese'];
// const origPrices = [16.89, 56.92, 20.89, 345.99];
// const items = ['rice', 'cheese'];
// const prices = [18.99, 400.89];

const origItems = ['chocolate', 'cheese', 'tomato'];
const origPrices = [15.00, 300.90, 23.44];
const items = ['chocolate', 'cheese', 'tomato'];
const prices = [15.00, 300.90, 10.00];

console.log("verifyItem : ", verifyItem(origItems, origPrices, items, prices));