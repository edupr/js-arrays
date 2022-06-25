const pets = ['cat', 'dog', 'bat'];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        console.log('found');
        includeInArray = true;
        break;
    }
}

// includes()
// No lleva arrow function, solo el argumento
const rta = pets.includes('dog');
console.log("for", includeInArray);
console.log("includes", rta);
