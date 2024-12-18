var name = "Ricardo";
var age;
age = 21;
var lastname = "Perez";
console.log("Mi nombre es "+ name + " " + lastname);
console.log("Mi edad es "+age);

let x = 10;
let y = 20;
let z = x + y;
console.log(z);

//var declara una variable global
//let declara una variable local o tambien una variable de bloque
//const declara una variable constante, es decir que no cambia su valor

//if marca un bloque de instrucciones que se ejecutan si una condicion se cumple
//switch marca un bloque de instrucciones que se ejecutan si uno se cumple
//for marca un bloque de instrucciones que se ejecutan varias veces
//while marca un bloque de instrucciones que se ejecutan varias veces
//function marca un bloque de instrucciones que se ejecutan varias veces, se declara
//try se ejecuta cuando no se produce un error
//catch se ejecuta cuando se produce un error
//return se ejecuta cuando una condicion se cumple, ademas de devolver un valor 


/*
Nota 
//var ==> undeprecated
//let ==> moderno
//const ==> moderno
*/
var nombre = 'Ricardo';
let apellido = 'Vargas';
const edad = 25;
console.log("Mi nombre es " + nombre + " " + apellido)


/*
        Ejemplos de tipos de datos de JavaScript
*/

//Tipos de datos string
let nombrePersona = "Ricardo";
console.log(nombre);

let nombrePersona1;
nombrePersona1 = "Ricardo";
console.log(nombrePersona1);


//Tipo de datos numericos
let numero = 1000;
console.log(numero);

//Tipo de datos Objeto object
let persona = {
    nombre: "Ricardo", //'Ricardo'
    apellido: "Vargas",
    edad:25
}

console.log(persona);


//Tipo de dato typeof
let let1 = "Ricardo";
console.log(typeof let1);

let let2 = 25;
console.log(typeof let2);

let let3 = false;
console.log(typeof let3);

let let4 = BigInt(123);
console.log(typeof let4);

let let5 = [1,2,3,4,5,6,7,8,9];
console.log(typeof let5);

//Tipo de dato tipo funcion
function saludar() {}
console.log(typeof saludar);

//Tipo de dato symbol
let simbolo = Symbol("Mi miembro"); //Puede ser utilizado por un identificador unico
console.log(typeof simbolo);

//Tipo de dato tipo clase, que es lo mismo que en una funcion

class Persona {//Declaración de la clase
    constructor(nombres, apellidos, edad){//atributos constructor
        this.nombres = nombres;//propiedades: atributos
        this.apellidos = apellidos;
        this.edad = edad;
    }
}

console.log(typeof Persona)

//Tipo de dato undefined se puede utilizar como un valor
let variable;
console.log(variable);
console.log(typeof variable);

//Tipo de dato null, quiere decir que tiene ausencia de valor
let variable1 = null;
console.log(variable1);
console.log(typeof variable1);

//Tipo de dato de arreglos en JavaScript
let autos = ["BMW", "Mercedes Bens", "Audi"];
console.log(autos);
console.log(typeof autos);

//Tipo de datos son los generados por cadenas vacias
let cadenaVacia = "";
console.log(cadenaVacia);
console.log(typeof cadenaVacia);

//Reglas de JavaScript para declarar o definir las variables
//No puede iniciar con numeros
//No puede iniciar con simbolos
//No puede iniciar con mayusculas


//Formas Correctas de declarar una variable
let nombresCompletos = "Ricardo Vargas";
let nombres_completos = "Ricardo Vargas";
let $nombresCompletos = "Ricardo Vargas";
let _nombresCompletos = "Ricardo Vargas";
let nombresCompletos_ = "Ricardo Vargas";
let a1nombresCompletos = "Ricardo Vargas";

//Formas Incorrectas de declarar una variable
//let 1nombresCompletos = "Ricardo Vargas";
//let nombrescompletos = "Ricardo Vargas";
//let #nombresCompletos = "Ricardo Vargas";
//let 1bnombresCompletos = "Ricardo Vargas";



/*-----------------------------------------------
        Operadores en JavaScript
-----------------------------------------------*/
//Suma +
//Resta -
//Multiplicacion *
//Division /
//Modulo %

let numero1 = 3;
let numero2 = 2;
console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 * numero2);
console.log(numero1 / numero2);
console.log(numero1 % numero2);
console.log(numero1 ** numero2);

//Operadores de incremento y decremento 
//Incremento ++, se utiliza para aumentar en 1
//Decremento --, se utiliza para disminuir en 1
let numero3 = 3, numero4 = 2;
let numero5 = numero3 + numero4;
//Incremento
//Pre-incremento (el operador ++ antes de la variable)
numero5 = ++numero3;
console.log(numero3);
console.log(numero5);

//Post-incremento (el operador ++ despues de la variable)
numero5 = numero4++;
console.log(numero4);
console.log(numero5);

//Decremento 
//Pre-decremento (el operador -- antes de la variable)
numero5 = --numero3;
console.log(numero3);
console.log(numero5);

//Post-decremento (el operador -- despues de la variable)
numero5 = numero4--;
console.log(numero4);
console.log(numero5);


//Operadores de comparacion
//Igual == // o el ===
//el == se utiliza para comparar si dos variables son igaules no es estricto
//el === se utiliza para comparar si dos variables son igaules y del mimso tipo si es estricto
//Distinto !=
//Mayor que >
//menor que <
//Mayor o igual que >=
//Menor o igual que <=

let operador3 = 3, operador4 = "3";
console.log(typeof operador3)
let operador10 = operador3 == operador4;
console.log(operador10);

let operador11 = operador3 == operador4;
console.log(operador11);

if(operador3 == operador4){
    console.log("Son Iguales");
}else{
    console.log("No son iguales");
}

//Determinar si un numero es par o impar
let numeroPI = 7;
if(numeroPI % 2 == 0){
    console.log("El numero es par");
}else {
    console.log("El numero es imapar");
}

//Determinar si una persona es mayor de edad
let edadPersona = 18;
if (edadPersona >= 18){
    console.log("La pesona es mayor de edad");
}else {
    console.log("La persona no es mayor de edad");
}


//De un conjunto de valores [12, 14, 15, 16] de 10 valores determinar cuantos son pares y cuantos son impares
let valores = [10, 12, 14, 15, 8, 9, 17, 20, 2, 1];
if (valores % 2 == 0){
    console.log("Par");
}else {
    console.log("Impar");
}

//Operadores Logicos
//and
//or
//not

let s = 12;

let valMin = 9, valorMax = 20;
if(s >= valMin && s <= valorMax){
    console.log("El valor esta dentro del rango");
}else {
    console.log("El valor no esta dentro del rango");
}

if(s >= valMin || s <= valorMax){
    console.log("El valor esta dentro del rango");
}else {
    console.log("El valor no esta dentro del rango");
}

//Operadores Ternarios
let resultado = (s >= valMin && s <= valorMax) ? "El valor esta dentro del rango" : "El valor no esta dentro del rango"
console.log(resultado);



/*----------------------------------------
                CONVERSIONES
----------------------------------------- */

let minumero = "20";
console.log(typeof minumero);

let minumero2 = Number(minumero);
console.log(typeof minumero2);

let minumero3 = parseInt(minumero);
console.log(typeof minumero3);
console.log(minumero3);

//parseInt() convierte un string a un entero (sin decimales)
//number convierte un valor en un numero (puede ser entero o flotante)

console.log(parseInt("42px")); //solo la parte numerica del string se convierte en entera
console.log(parseInt(3.1415)); //convierte solo la parte entera
console.log(parseInt("abc")); //no existe un valor numerico para la conversion

console.log(Number("42px")); //no se puede convertir toda la cadena
console.log(Number(3.1415)); //convierte el numero en flotante
console.log(Number("abc")); //no hay ningun numero en la cadena


console.log(Number(true)); //true se convierte en 1
console.log(Number(false)); // fasle se convierte en 0
console.log(Number(null)); // null se convierte en 0
console.log(Number(undefined)); // undefined se convierte en NaN

if(isNaN(minumero2)){
    console.log("No es un numero");
}else {
    console.log("Es un numero");
}
console.log(isNaN(minumero2));
console.log(minumero2);

if(undefined == minumero2){
    console.log("No es un numero");
}else {
    console.log("Es un numero");
}   