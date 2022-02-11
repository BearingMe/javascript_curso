// variáveis 
let text;
let letter;
let regex;
let match;
let result;


// string são indexadas
text = 'Hello World';
letter = text[0];

console.log(letter);


// é possível usar o chatAt para pegar o valor de um índice específico
text = 'Good Morning';
letter = text.charAt(0);

console.log(letter);


// há várias formas de concatenar strings
text = 'Hello';
text += ' World';

text = text + '!';

text = text.concat(" Have", " a", " nice", " day");

console.log(text);


// é possivel achar o indice por meio de uma letra
text = 'Hello World';
let index = text.indexOf('o');

console.log(index);


// é possivel achar através de expressões regulares
text = 'Hello World';

regex = /[\w]+/;
match = text.match(regex);

console.log(match);


// é possivel achar através de expressões regulares
text = 'Hello World';

regex = /l{2}/;
match = text.match(regex);

console.log(match);


// é possivel substituir uma string por outra
text = 'Hello World';

regex = /l/g;
match = text.replace(regex, '#');

console.log(match);


// é possivel verificar se uma string começa com outra
text = 'Hello World';
result = text.startsWith('Hello');

console.log(result);


// é possível fatiar uma string
text = 'Another World';
result = text.slice(0, 5);

console.log(result);


// é possível separar uma string
text = 'O rato roeu a roupa do rei de Roma';
result = text.split(' ', 3);

console.log(result);


// é possível verificar se uma string termina com outra
text = 'Hello World';
result = text.endsWith('World');

console.log(result);


// é possível verificar se uma string contém outra
text = 'Hello World';
result = text.includes('World');

console.log(result);


