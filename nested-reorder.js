// This should be able to reOrder any level
// of nested array. But only 3 levels have been tested

/**
 *
 * @param array the nested array to re-order
 * @param positions the new positions
 * @return {string}
 */
reorderNestedArrayObject = (array, positions) => {
	if (array.length !== positions.length) {
		return 'cannot reorder questions';
	}
	const findIndex = (positions, value, index) => {
		for (let i = index; i < positions.length; i++) {
			if (positions[i][value]) {
				return i;
			}
		}
		return -1;
	};
	const swapArrayIndex = (array, previous, current) => {
		const updatedArray = [...array];
		const temp = updatedArray[previous];
		updatedArray[previous] = updatedArray[current];
		updatedArray[current] = temp;
		return updatedArray;
	};

	const reOrder = (array, pos) => {
		let updatedQuestion = [...array];
		const swapped = [];
		for (let i = 0; i < updatedQuestion.length; i++) {
			const position = findIndex(pos, updatedQuestion[i]._id, 0);
			if (updatedQuestion[i].nested) {
				updatedQuestion[i].nested = reOrder(updatedQuestion[i].nested, pos[position][updatedQuestion[i]._id])
			}
			if (position !== i && swapped.indexOf(position) < 0 && swapped.indexOf(i) < 0) {
				updatedQuestion = swapArrayIndex(updatedQuestion, i, position);
			}
		}
		return updatedQuestion;
	};
	return reOrder(array, positions);
};

// This array with nested object
const array = [
	{
		_id: 3,
		nested: [
			{_id: 5},
			{
				_id: 4, nested: [
					{_id: 11},
					{_id: 10},
					{_id: 9}
				]
			},
			{_id: 6}
		]
	},
	{_id: 2},
	{_id: 1}
];

// This is the structure for the array positions
const positions = [{1: []}, {2: []}, {3: [{4: [{9: []}, {10:[]}, {11:[]}]}, {5: []}, {6: []}]}];
console.log("result : ", JSON.stringify(reorderNestedArrayObject(array, positions)));