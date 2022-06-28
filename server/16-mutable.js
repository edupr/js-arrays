const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(20));
const productIndex = products.findIndex(item => item.id === '🍔');
if (productIndex !== -1) {
    myProducts.push(products[productIndex]);   // mutable, añadir un producto a mi carrito
    products.splice(productIndex, 1)
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

// Update product
const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];
const update = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'delicioso'
    }
}
const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
productsV2[productIndexV2] = {      // Fusionar y actualizar
    ...productsV2[productIndexV2],
    ...update.changes,
};
console.log(productsV2);

// Reto 1: eliminar un producto sin modificar original
const products2 = products.filter(p => p.id !="🍔");

// Reto 2: Modificar una nueva lista sin modificar la original
// Solución: copiar solo los elementos para que no tengan la misma dirección de memoria.
products.map(item => {
    if (item.id === update.id) {
      return {
        ...item,
        ...changes,
      }
    }
    return {...item};
  });
