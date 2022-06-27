const matriz = [
    [1,2,3],    // 0
    [4,5,6, [1,2]],    // 1
    [7,8,9]     // 2
];

const newArray = [];
// para aplanar 1 nivel:
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        // console.log(element);
        newArray.push(element);
    }
};

// para aplanar n niveles:
function profundidad(list) {
    let newList = [];
    if (typeof list != "object") return [list];
    list.forEach(element => {
        newList = newList.concat(profundidad(element));
    });
    return newList;
}

// otra solución para aplanar n niveles:
const flatten = (arr) => arr.reduce((acc, el) => acc.concat(el), []);


const newArray2 = profundidad(matriz);
const rta = matriz.flat(3);
console.log("for: ", newArray);
console.log("flat: ", rta);
console.log("matriz: ", matriz);
console.log("n niveles: ", newArray2);
console.log("reduce: ", flatten(matriz));