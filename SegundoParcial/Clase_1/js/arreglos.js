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

//Agregar elementos dentro de un array

//push(): agrega uno o mas elementos al final de una arreglo.

let p = [1,2,3,4];
let a = ['a', 'b', 'c'];
p.push(5);
console.log(p);
console.log(a);

//unshift(): agrega uno o mas elementos al principio o al inicio del array

let u = [1,2,3,4];
u.unshift(5);
console.log(u);
let b = ['a', 'b' , 'c'];
b.unshift('d');
console.log(b);

//splice(): agrega o elimina elementos en cualquier posicion dentro del array.
let s = [1, 2, 3, 4];
s.splice(1, 0 , 5); //Agrega el numero 5 en la posicion 1, sin eliminar los elementos(0). 
// Para eliminar el elemento de esa posicion uso (1)
console.log(s);

//Modificar elementos dentro de un array.

//Podemos acceder a un elemento directamente por su indice y modificarlo.
let i = ['Ana', 'Juan' ,'Pedro', 'Jose'];
i[0] = 'Maria'; //Modifica el elemento en la posicion(0).
console.log(i);

//Si deseamos modificar el arreglo de forma inmutable, se puede utilizar el metodo map().
//map() ==> Crea un nuevo arreglo con los valores modificados.

let arregloMap = [10, 23, 35, 26];
let arregloNuevo = arregloMap.map(num => num === 23 ? 5 : num);
console.log(arregloNuevo);

//splice(): modifica el array, y elimina el elemento en la posicion a modificar
let z = [1, 2, 3];
z.splice(1, 1, 5);
console.log(z);

//Eliminar elementos de un array

//pop(): elimina el ultimo elemento del arreglo
let arregloE = ['Azul', 'Rojo', 'Negro', 'Amarillo'];
arregloE.pop();
console.log(arregloE);

//shift(): elimina el primer elemento de un array 
let arregloS = ['Azul', 'Rojo', 'Negro', 'Amarillo'];
arregloS.shift();
console.log(arregloS);

//splice(): para eliminar cualquier elemento dentro de un arreglo
let arregloSP = ['Azul', 'Rojo', 'Negro', 'Amarillo', 'Verde'];
arregloSP.splice(2, 2);
console.log(arregloSP);