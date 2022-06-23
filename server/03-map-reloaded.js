const orders = [
    {customerName:"Nicolas",total:60,delivered:true,},
    {customerName:"Zulema",total:120,delivered:false,},
    {customerName:"Santiago",total:180,delivered:true,},
    {customerName:"Valentina",total:240,delivered:true,},
];

console.log("original",orders);     // array original
const rta=orders.map((item)=>item.total);
console.log("rta",rta); // [60,120,180,240] Respuesta solo totales

// // MODIFICA TAMBIÉN EL ARRAY ORIGINAL
// const rta2 = orders.map(item => {
//         item.tax = .19;
//         return item;
// });
// console.log("rta2",rta2); // [{customerName:"Nicolas",total:60,delivered:true,tax:0.19},

// PARA HACER UNA COPIA Y NO UNA MODIFICACIÓN DEL ARRAY ORIGINAL
// Spread operator (...)
const rta3=orders.map((item) => {
    return{...item,tax:0.19,};
});
console.log("rta3",rta3);    
console.log("original",orders);


// Para añadir el campo taxes a cada item del array
function solution(array) {
	return array.map(item => ({ ...item, 'taxes': Math.trunc(item.price * .19) }))
}; 