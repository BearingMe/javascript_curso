const n1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const n2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const conc1 = n1.concat(n2);
const conc2 = [...n1, ...n2];

console.log(conc1);
console.log(conc2);