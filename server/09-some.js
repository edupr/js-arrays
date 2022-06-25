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
const rta2 = numbers.every(element => element <= 40);
console.log("every ", rta2);