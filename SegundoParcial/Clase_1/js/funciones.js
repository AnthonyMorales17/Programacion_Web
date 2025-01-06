/*-----------------------------------------------
                FUNCIONES
-----------------------------------------------*/

//Funcion Declarada

function miFuncion(a, b, c) {
    console.log(arguments.length);
    console.log('La suma es: ' + (a + b + c));
}

miFuncion(2, 3, 4);

//La palabra return dentro de la funcion 
function miReturn(a,b) {
    return a + b;
}

let resultado = miReturn(4, 5);

console.log(resultado);

//Funcion de tipo expresion
//Declaracion de una funcion que es igual a una expresion 

let sumar = function (a, b) {return a * b};

resultado = sumar(2, 5);
console.log(typeof sumar)
console.log(resultado);

//Funciones de tipo Self-Invorking
//Por que son funciones que se llaman a si mismas
//No son muy comunes pero pueden ser utiles en algunos casos

(function (a, b) {
    console.log('Ejececutando la funcion: ' + (a + b));
})(3,4)

// //Funciones Anonimas
// setTimeout(function () {
//     console.log('Hola desde una funcion anonima');
// }, 3000);

const persona = {
    nombre : 'Diego',
    saludar () {
        return `Hola, soy ${this.nombre}`;
    }, 
    apellido : 'Gamboa'
}
console.log(persona.saludar());

//Funciones tipo flecha (arrow function)
//Se mantiene como una forma concisa de declarar funciones y es ampliamente usada.

const sumarValores = (x, y) => x + y;
console.log(sumarValores(5, 7));

const operaciones = {sumar: (a, b) => a + b, restar: (a, b) => a - b, multiplicacion: (a, b) => a * b, division: (a, b) => a/b}
console.log(operaciones.sumar(3, 2));
console.log(operaciones.restar(3, 2));
console.log(operaciones.multiplicacion(3, 2));
console.log(operaciones.division(3, 2));