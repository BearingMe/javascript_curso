const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// elem, index, array
numeros.forEach((numero) => console.log(numero));

numeros.forEach((numero, index) => console.log(index, numero));

numeros.forEach((numero, index, array) => console.log(index, numero, array));
