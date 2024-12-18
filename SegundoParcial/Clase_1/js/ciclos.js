/*
        CICLOS
*/

//Ciclos for

const heroes = ["Batman", "Superman", "Mujer Maravilla", "Aquaman"];

console.warn("********For Tradicional******");
for (let i = 0; i < heroes.length; i++) {
    console.warn(heroes[i]);    
}

console.warn("******* For in ********");
for(let i in heroes){
    console.warn(heroes[i]);
}


console.warn("******* For of ********");
for(let heroe of heroes){
    console.warn(heroe);
}

//usos de la declaracion for
//se usa for tradicional cuando necesitamos el control total de los indices de array
//se usa for..in para el manejo de objetos, es decir para iterar un objeto o los indices de un array
//se usa for..of para iterar los valores directamente de un iterable(array, cadenas de texto, map, set, nodeList)

//Continue, y el break dentro del ciclo for

// for (let contador = 0; contador < 10; contador++) {
//     if(contador % 2 != 0){ // != -> pares, == -> impares
//         continue; //ir a la siguiente iteracion
//     }    
//     console.log(contador);
// }

const carros = ['Ford', 'Mazda', 'Onda', 'Toyota'];
for (let contador = 0; contador < carros.length; contador++) {
    if(contador == 2){
        continue;
        //break; //rompe el bucle al momento de llegar a 2
    }    
    console.log(carros[contador]);
}


let i = 0;
//While
while (carros[i]) {
    if (carros[i]) {
        i++;
        break;
    }
    console.warn(carros[i]);
    i++;
}