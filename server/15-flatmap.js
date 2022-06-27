const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
  ];

const rta = users.map(user => user.attributes).flat();
const rta2 = users.flatMap(user => user.attributes);
// [["Nice", "Cute"], ["Lovely"], ["Nice", "Cool"]]
// console.log("rta:", rta);
// console.log("rta2:", rta2);

const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 0),
        endDate: new Date(2021, 1, 1, 0, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 3",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
};

// Reto: Obtener un array con todas las citas de inicio de todos los calendarios
const rtaReto = Object.values(calendars).flat().map(item => item.startDate);
// console.log(rtaReto);

const reto1 = Object.values(calendars);
const reto2 = reto1.flat();
const reto3 = reto2.map(item => item.startDate);
console.log("reto1:", reto1); // pasamos un objeto a un array
console.log("reto2:", reto2); // aplanamos con flat() el array
console.log("reto3:", reto3); // nos quedamos con los startDate

// Playground: En este desafío tienes array de strings y cada línea es un fragmento,
// el Zen de Python, tu reto es hacer un método que retorne el
// número de palabras totales que tiene el array.
const text = [
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
];

function splitString(stringToSplit, separator) {
  const arrayOfStrings = stringToSplit.split(separator)

  console.log('The original string is: ', stringToSplit)
  console.log('The separator is: ', separator)
  console.log('The array has ', arrayOfStrings.length, ' elements: ', arrayOfStrings.join(' / '))
}

const tempestString = 'Oh brave new world that has such people in it.'
const monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'

const space = ' '
const comma = ','

splitString(tempestString, space)
splitString(tempestString)
splitString(monthString, comma)

// Playground: En este desafío tienes un array de strings y cada línea es un fragmento,
// Contar número de palabras de un texto
function solution(lines) {
 return lines.flatMap(item =>item.split(' ')).length
}; 
console.log(solution(text));