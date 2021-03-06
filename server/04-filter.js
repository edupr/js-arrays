const words = ['spray', 'limit', 'elite', 'exuberant'];

const newArray = [];
for (let index = 0; index < words.length; index++) {
  const item = words[index];
  if (item.length >= 6) {
    newArray.push(item);
  }
};

console.log("newArray", newArray);
console.log("original", words)

const rta = words.filter(word => word.length >= 6);
console.log("rta", rta);
console.log("original", words)

const orders = [
    {customerName:"Nicolas",total:60,delivered:true,},
    {customerName:"Zulema",total:120,delivered:false,},
    {customerName:"Santiago",total:180,delivered:true,},
    {customerName:"Valentina",total:240,delivered:true,},
    {customerName:"Nicolas",total:2322,delivered:false,},
];

const rta3 = orders.filter(order => order.delivered);
console.log("rta3", rta3);

const rta4 = orders.filter(item => item.delivered && item.total >= 100);
console.log("rta4", rta4);

// Searching for a value in an array
const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log("search", search("Nico"));
console.log("search", search("asdf"));

// Search for name, lastName & age
const search2 = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query) ||
        item.lastName.includes(query) ||
        item.age.includes(query);
    })
}


// Playground. Tienes un array con palabras, tu desafío es retornar un array solo con las que cumplan con la condición de tener 4 o más letras.

function solution(array) {
	return array.filter(word => word.length >= 4);
}; 

const myArray = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

console.log("myArray", myArray);
console.log("solution", solution(myArray));