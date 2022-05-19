let edad = 38; // number

let nombre = "Victor"; // string

const isActive = true; // boolean

let myArray = [ [1, 2, 3], edad, nombre, isActive];

const victor = require('./momoa.json');

console.log(victor);

const imprimirArray = (_array) => {
    _array.forEach((item, idx) => {
        console.log(idx, item, typeof item);
    })
}

victor.imprimir = imprimirArray;
console.log(victor);

console.log(victor.imprimir(victor.balance));