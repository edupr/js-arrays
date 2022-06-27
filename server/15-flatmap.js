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