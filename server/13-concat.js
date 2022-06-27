const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

const newArray = [...elements]; // spread operator para clonar un array
for (let i = 0; i < othersElements.length; i++) {
    newArray.push(othersElements[i]);
}

// concat()
const rta = elements.concat(othersElements);
console.log("for: ", newArray);
console.log("concat: ", rta);

// otra forma de usar concat y clonar:
const rta2 = [...elements, ...othersElements];
console.log("...: ", rta2);

// otra forma de usar concat con strings y clonar:
const rta3 = [...elements, 'random'];
console.log("string: ", rta3);

// aquí separa el string en caracteres y los agrega al array
const rta4 = [...elements, ...'random'];
console.log("string: ", rta4);

// para poner todo el array en el último elemento
// elements.push(othersElements);
// console.log("elements: ", elements);

// para poner los elementos de todo el array
elements.push(...othersElements);
console.log("elements: ", elements);