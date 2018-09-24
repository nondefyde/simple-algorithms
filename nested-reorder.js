// Given an array of unsorted positive integers, write a
// function that finds runs of 3 consecutive numbers (ascending or descending)
// and returns the indices where such runs begin. If no such runs are found, return null.
// result =  [0,4,6,7];
reorderNestedArrayObject = (questions, positions) => {
	if (questions.length !== positions.length) {
		return 'cannot reorder questions';
	}
	const findIndex = (positions, value, index) => {
		for (let i = index; i < positions.length; i++) {
			if (typeof positions[i] === 'object') {
				if (positions[i][value]) {
					return i;
				}
			} else if (value === positions[i]) {
				return i;
			}
		}
		return -1;
	};
	const swapArray = (array, previous, current) => {
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
			if (updatedQuestion[i].columns) {
				updatedQuestion[i].columns = reOrder(updatedQuestion[i].columns, pos[position][updatedQuestion[i]._id])
			}
			if (position !== i && swapped.indexOf(position) < 0 && swapped.indexOf(i) < 0) {
				updatedQuestion = swapArray(updatedQuestion, i, position);
			}
		}
		return updatedQuestion;
	};
	return reOrder(questions, positions);
};

const questions = [
	{
		_id: 3,
		columns: [
			{_id: 5},
			{
				_id: 4, columns: [
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
const positions = [1, 2, {3: [{4: [9, 10, 11]}, 5, 6]}];
console.log("result : ", JSON.stringify(reorderNestedArrayObject(questions, positions)));