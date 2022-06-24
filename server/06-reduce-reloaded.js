const items = [1, 3, 2, 3];

const rta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});
console.log(rta);

// Datos por niveles
const data = [
    {name: "Nicolas",level: "low"},
    {name: "Andrea",level: "low"},
    {name: "Zulema",level: "hight"},
    {name: "Santiago",level: "low"},
    {name: "Valentina",level: "medium"},
    {name: "Lucia",level: "hight"},
  ];
  
  // Conteo de niveles
  const rta1 = data
  .map(item => item.level)
  .reduce((obj, item) => {
      if (!obj[item]) {
          obj[item] = 1;
      } else {
          obj[item] = obj[item] + 1;
      }
      return obj;
  }, {});
  console.log(rta1);

// Reto: histograma, conteo por rangos
const randomNumber = [1, 1, 1, 2, 3, 4, 8, 6, 6, 8, 8, 8, 9, 10];

const rsta = randomNumber.reduce((obj, item) => {
  switch (item) {
    case 1 || 2 || 3 || 4 || 5:
      obj['1-5'] += 1;
      break;
    case 6 || 7 || 8:
      obj['6-8'] += 1;
      break;
    case 9 || 10:
      obj['9-10'] += 1;
      break;
    default:
      break;
  }
  return obj
}, {'1-5': 0, '6-8': 0, '9-10': 0})

console.log(rsta)