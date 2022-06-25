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