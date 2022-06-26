const elements = ["Fire", "Water", "Earth", "Air"];

let rtaFinal = '';
const separator = "--";
for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    rtaFinal = rtaFinal + element + separator;
}

// join
const rta = elements.join(separator);
console.log(rtaFinal);
console.log(rta);

const title = "The title of the book";
console.log(title.split(" "));
const urlFinal = title.split(" ").join("-").toLowerCase();
console.log(urlFinal);

const title2 = "The title of the book";
const urlFinal2 = title2.split("o").join("-").toLowerCase();
console.log("title2: ", title2)
console.log("url2:", urlFinal2);

// Playground
// Construye una URL con base a un string
const solution1 = ("La forma de correr Python");
const solution2 = solution("La API para nunca parar de aprender");
const solution3 = solution("Curso de arrays");

function solution(title) {
    return title.split(" ").join("-").toLowerCase();
}; 

console.log(solution(solution1));
console.log(solution(solution2));
console.log(solution(solution3));