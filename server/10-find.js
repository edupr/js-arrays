const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 30];

// Encuéntrame el 30
let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 300) {
        rta = element;
        break;
  }
}
console.log("for ", rta);

const rta2 = numbers.find(item => item === 300);
console.log("find ", rta2);

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

// Busca la pizza y devuelve el objeto, si no la encuentra devuelve undefined
const rta3 = products.find(item => item.id === '🍕');
console.log("find ", rta3);
// Busca el hotdog y devuelve el index, si no lo encuentra devuelve -1
const rta4 = products.findIndex(item => item.id === '🌭');
console.log("find ", rta4);
