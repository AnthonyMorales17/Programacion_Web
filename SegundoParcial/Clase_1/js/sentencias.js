/*
        SENTENCIAS DE CONTROL
*/

//If/Else

//var, let, const
let numero = 1;

if (numero == 1){
    console.log("Numero 1");
}else if(numero == 2){
    console.warn("Numero 2")
}else if (numero == 3){
    console.warn("Numero 3")
}else {
    console.log("No es un numero");
}

//Ejercicio referente a las estaciones del año
//Invierno, Otoño, Primavera, Verano

let mes = 8;
let estacion;

if (mes == 1 || mes == 2 || mes == 3){
    estacion = "Invierno";
}else if (mes == 4 || mes == 5 || mes == 6){
    estacion = "Otoño";
}else if (mes == 7 || mes == 8 || mes == 9){
    estacion = "Primavera";
}else if (mes == 10 || mes == 11 || mes == 12){
    estacion = "Verano";
}else {
    estacion = "No corresponde a una estación"
}
console.warn(estacion);

//Ejercicio:
//Calcular la hora del dia

/*
6am - 11am ==> Buenos Dias
12am - 18pm ==> Buenas Tardes
19pm - 23pm ==> Buenas Noches 
24am - 6am ==> Durmiendo
*/

let horaDia = 1;
let mensaje;

//if(horaDia >= 6 && horaDia <= 11){
//    mensaje = "Buenos Dias";
//}else if (horaDia >= 12 && horaDia <= 18){
//    mensaje = "Buenas Tardes";
//}else if (horaDia >= 19 && horaDia <= 23){
//    mensaje = "Buenas Noches";
//}else if (horaDia >= 0 && horaDia < 6){
//    mensaje = "Durmiendo";
//}else {
//    mensaje = "No es una hora correspondida"
//}
//console.warn(mensaje);

//Switch 

let mesE = 12;
let estacionI = 'Estacion Desconocida';

switch(mesE){
    case 1: case 2: case 3:
        estacionI = "Invierno";
        break;
    case 4: case 5: case 6:
        estacionI = "Otoño";
        break;
    case 7: case 8: case 9:
        estacionI = "Primavera";
        break;
    case 10: case 11: case 12:
        estacionI = "Verano";
        break;
    default:
        estacionI = "No corresponde a una Estacion";
}

console.log(estacionI);

//Otra forma de utilizar el if
if(horaDia >= 6 && horaDia <= 11)
    mensaje = "Buenos Dias";
else if (horaDia >= 12 && horaDia <= 18)
    mensaje = "Buenas Tardes";
else if (horaDia >= 19 && horaDia <= 23)
    mensaje = "Buenas Noches";
else if (horaDia >= 0 && horaDia < 6)
    mensaje = "Durmiendo";
else 
    mensaje = "No es una hora correspondida"

console.warn(mensaje);
