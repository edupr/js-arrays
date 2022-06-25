const numbers = [1, 7, 3, 9];
let rta = false;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element % 2 === 0) {
        rta = true;
        break;
    }
}
console.log("rta: ", rta);
const rta2 = numbers.some(item => item % 2 === 0);
console.log("rta2: ", rta2);

// ver si hay órdenes entregadas
const orders = [
    {customerName:"Nicolas",total:60,delivered:true,},
    {customerName:"Zulema",total:120,delivered:false,},
    {customerName:"Santiago",total:180,delivered:true,},
    {customerName:"Valentina",total:240,delivered:true,},
    {customerName:"Nicolas",total:2322,delivered:false,},
];
const rta3 = orders.some(item => item.delivered);
console.log("rta3: ", rta3);

// ver fechas de calendario
const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

  const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 10, 30),
  };

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate},
        )
    })
};
console.log("isOverlap: ", isOverlap(newAppointment));

// Playground números par
function solution(numbers) {
  return numbers.some( i => i % 2 === 0)// Tu código aquí 👈 
}; 

console.log("solution: ", solution([2]));