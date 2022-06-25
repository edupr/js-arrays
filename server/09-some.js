const numbers = [40,40,40];

let rta = true;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element >= 40) {    // >= 40
        rta = false;
        break;
    }
}

console.log("for ", rta);
const rta2 = numbers.every(element => element < 40);
console.log("every ", rta2);

// Playground
// Validar si todos los números son pares, con every

function solution(numbers) {
    return numbers.every(element => element % 2 === 0);
}
console.log(solution([2,4,6,9]));

// Reto, validar si todas las edades son mayores a 15
const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 14,
    },
  ];

function solution(team) {
    return team.every(element => element.age < 15); }
console.log(solution(team));