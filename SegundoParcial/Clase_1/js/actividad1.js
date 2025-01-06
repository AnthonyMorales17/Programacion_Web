function calcularPromedio(a, b, c) {
    console.log('El Promedio es: ' + ((a + b + c)/3));
}

calcularPromedio(15, 15, 9);

//Funcion Expresada

let determinarMayor = function (x, y) {
    if(x>y){
        return x;
    } else if (y > x){
        return y;
    } else {
        return "Numero Iguales";
    }
}

resultado = determinarMayor(3, 5);
console.log(resultado);

//Funcion Flecha

const esPar = (x) => x % 2 == 0;
console.log(esPar(4));
console.log(esPar(3));



//Funcion anonima autoejecutable

setTimeout(function () {
    console.log("----------------------------");
    calcularPromedio(15, 15, 6);
    console.log("----------------------------");

    let mayor = determinarMayor(10,20);
    console.log("El numero mayor es: "+ mayor);
    console.log("----------------------------");


    let numero = 4;
    console.log(esPar(numero));
}, 0);