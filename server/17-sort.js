const months = ["March", "Jan", "Feb", "Dec"];
months.sort();  // Orden alfabético (código ASCII)
console.log(months);

const numbers = [1, 30, 4, 21, 100000];
numbers.sort(); // Orden en ASCII
console.log(numbers);
numbers.sort((a,b) => a - b); // Orden de menor a mayor
console.log(numbers);
numbers.sort((a,b) => b - a); // Orden de mayor a menor
console.log(numbers);

const words = ["réservé","premier","communiqué","café","adieu","éclair","banana"];
words.sort();
console.log(words);     // orden en ASCII
words.sort((a,b) => a.localeCompare(b)); // Para node JS viejos
console.log(words);

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
        orderDate: new Date(2021, 1, 1, 11),
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
        orderDate: new Date(2021, 2, 1, 11),
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
        orderDate: new Date(2021, 7, 1, 11),
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
        orderDate: new Date(2021, 6, 1, 11),
    },
];

orders.sort((a,b) => b.total - a.total); // Orden por atributo total
console.log(orders);

orders.sort((a,b) => a.orderDate - b.orderDate); // Orden por atributo total
console.log(orders);