const totals = [1,2,3,4];

let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum += element;
}
console.log("sum", sum);

// reduce
const rta = totals.reduce((sum, element) => sum + element, 0);
console.log("rta", rta);

// desglosado
let F = (value, acc) => acc + value;
let copy = totals.reduce(F, 0);
console.log("copy", copy);
console.log("totals: ", totals);


// Playground
const solution1 = ([1, 1, 1]);
const solution2 = ([2, 4, 8]);

function solution(numbers) {
	return numbers.reduce((sum, element) => sum + element, 0);
};

console.log(solution(solution2));