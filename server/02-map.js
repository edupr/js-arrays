const letters = ['a', 'b', 'c'];
console.log("original", letters);

const newArray = [];
for (let i = 0; i < letters.length; i++) {
  const element = letters[i];
  newArray.push(element + '!');
}
console.log("newArray", newArray);

const newArray2 = letters.map(item => item + '!');
console.log("newArray2", newArray2);