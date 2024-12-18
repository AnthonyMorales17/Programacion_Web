/*-----------------------------------------------
                ARREGLOS
-----------------------------------------------*/

const arr = new Array(10);
const arr1 = [];
console.log(arr);
console.log(arr1);

const numeros = [1, 2, 3, 4, 5];
const colores = ['rojo', 'verde', 'morado'];

//Ejercicio:

let videoJuegos = ['Mario Bross', 'Fifa 24', 'Spiderman'];
console.log(videoJuegos[0]);

let arregloCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function(){},
    ()=>{},
    ['S', 'Peliculas']
];

console.log({arregloCosas});
console.log(arregloCosas[3]);

//Operaciones dentro de un arreglo
//Metodos Funcionales
//map(), filter(), reduce()

//map(), Transforma los elementos de una arreglo
let numerosMap = [1, 2, 3, 4, 5, 6];
let cuadrados = numerosMap.map(num => num * num);
console.log(cuadrados);


//filter(), Filtra los elementos que cumplen algun tipo de condicion
let numerosFilter = [1, 2, 3, 4, 5, 6];
let pares = numerosFilter.filter(num => num % 2 != 0);
console.log(pares);

//reduce(), Reduce todos elementos a un solo valor 
let numerosReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maximo = numerosReduce.reduce((acumulador, num) => (num > acumulador ? num : acumulador), numerosReduce[0]); //> mayor, < menor
console.log(maximo);


//Ventajas:
//Son ideales para trabajar con transformation y manipulaciones complejas de datos de un array
//permiten un estilo de progrmacion funcional mas limpio y facil de leer.

