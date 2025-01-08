/*-----------------------------------------------
                OBJETOS
-----------------------------------------------*/


// Caracteristicas principales de los objetos en JS

//Claves y valores:

//Las claves son cadenas de o simbolos(unicos).
//Los valores pueden ser de cualquier tipo: numeros, cadenas, funciones, otros tipos de objetos, etc.

//Dinamismo:

//Los objetos pueden modificarse en tiempo de ejecucion (agregar, modificar o eliminar propiedades de un objeto).

//Nota especial:
//Dentro de los objetos se pueden incluir metodos
//Los metodos son funciones asociados a un objeto.

/*Objetos ==> propiedades y metodos */
//Si conozco todas las propiedades del objeto, uso esta forma:
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@gmail.com',
    edad: 25
}

console.log(persona);

//Incluir metodos en los objetos

let people = {
    name: 'Anthony',
    lastname: 'Morales',
    age: 22,
    fullname: function () {
        return this.name + ' ' + this.lastname;
    }
}

console.log(people.fullname());

const people2 = {
    name: 'Mary',
    lastname: 'Dalas',
    age: 33,
    saludo: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
}


console.log(people2.name);
people2.saludo();

//Usando Constructor Object
//otra forma de crear un objeto vacio y agregarle propiedades posteriormente.

const persona1 = new Object();
persona1.nombre = 'Maria';
persona1.apellido = 'Velez';
persona1.saludar = function () {
    console.log(`Hola mi nombre es ${this.nombre}`);
}

console.log(persona1.nombre);
persona1.saludar();

//Otro forma es utilizando la clase Object.create()

//Permite crear un objeto basado en un prototipo

const prototipoPersona = {
    saludar: function () {
        console.log(`Hola desde prototipo, soy ${this.nombre}`);
    }
}

const persona2 = Object.create(prototipoPersona);
persona2.nombre = 'Maria';
persona2.saludar();

//Usando clases {introducido desde ES6 ==> ES2024}
//Proporciona una sintazis mas estructurada para crear objetos
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    saludar() {
        console.log(`Hola desde clases, soy ${this.nombre}`);
    }
}

const persona3 = new Persona('Ana', 'Martinez');
persona3.saludar();

//usando funciones constructores 
//Forma clasica, utilizando no muy frecuente

function Persona1(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function () {
        console.log(`Hola desde funciones, soy ${this.nombre}`);
    }
}

const persona4 = new Persona1('Luis', 24);
persona4.saludar();


//Manipulacion de los datos o propiedades de los objetos.

//1. Agregar o Modificar propiedades

const persona5 = { nombre: 'Anthony'};
persona5.edad = 34;
persona5.nombre = 'Anthony Morales';
console.log(persona5);

//2. Eliminar Propiedades

//delete persona5.edad;
console.log(persona5);

//3. Iterar sobre las propiedades

for (nombrePropiedad in persona5){
    console.log(nombrePropiedad);
    console.log(persona5[nombrePropiedad]);
}

for (let clave in persona5){
    console.log(`${clave}: ${persona5[clave]}`);
}

//4. Verificar propiedades, existen 2 metodos:

console.log('name' in persona5); //Consulta si la propiedad name esta en persona5
console.log('nombre' in persona5);

//Forma mas utilizada, esta se debe utilizar:
console.log(persona5.hasOwnProperty('age'));
console.log(persona5.hasOwnProperty('edad'));

//Metodos utiles para trabajar con objetos

//1. Object.keys()
//Devuelve un array con las claves del objecto

console.log(Object.keys(persona5));

//2. Object.values()
//Devuelve un array con los valores del objeto

console.log(Object.values(persona5));

//3. Object.entries()
//Devuelve un array de pares [claves, valores].

console.log(Object.entries(persona5));

//4. Object.assign()
// Copia las propiedades de un objeto a otro

const copia = Object.assign({}, persona5);
console.log(copia);

//5. Object.freeze()
//Congela un objeto para evitar modificaciones

//Object.freeze(persona5);

//6. Object.seal()
//Permite modificar propiedades existentes, pero no agregar o eliminar propiedades

Object.seal(persona5);

persona5.direccion = 'El Recreo';
delete persona5.nombre;
console.log(persona5);

//Nota:
//Impresion de los valores de las propiedades de un objeto

let personaArray = Object.values(persona5);
console.log(personaArray);

let personaString = JSON.stringify(persona5);
//JSON es una notacion, es un objeto
//stringify convierte una cadena a un string cada propiedad
console.log(personaString);