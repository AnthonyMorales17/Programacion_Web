const estudiantes = [
    {nombre: 'Pedro', calificaciones: [10, 5, 7, 8, 3]},
    {nombre: 'Edison', calificaciones: [5, 6, 8, 9, 10]},
    {nombre: 'Anthony', calificaciones: [10, 9, 2, 3, 3]},
    {nombre: 'Maria', calificaciones : [4, 6, 7, 9, 10]},
    {nombre: 'Elizabeth', calificaciones : [4, 3, 2, 9, 7]},
    {nombre: 'Leo', calificaciones : [10, 6, 8, 9, 10]},
    {nombre: 'Jennifer', calificaciones : [10, 10, 8, 9, 10]},
    {nombre: 'Juan', calificaciones : [4, 4, 2, 9, 10]},
    {nombre: 'Jordan', calificaciones : [8, 8, 8, 9, 1]},
    {nombre: 'Fernando', calificaciones : [5, 6, 8, 4, 7]}
];

for (let i = 0; i < estudiantes.length; i++) {
    let calificaciones = estudiantes[i].calificaciones;
    let suma = 0;
    let notaMax = calificaciones[0];
    let notaMin = calificaciones[0];

    for (let j = 0; j < calificaciones.length; j++) {
        suma += calificaciones[j];
        if(calificaciones[j] > notaMax)
            notaMax = calificaciones[j];
        else if(calificaciones[j] < notaMin)
            notaMin = calificaciones[j];
    }

    estudiantes[i].promedio = suma/calificaciones.length;
    estudiantes[i].notaMax = notaMax;
    estudiantes[i].notaMin = notaMin;

    if(estudiantes[i].promedio >= 16) 
        estudiantes[i].calificacion = 'Excelente';
    else if (estudiantes[i].promedio >= 12 && estudiantes[i].promedio < 16)
        estudiantes[i].calificacion = 'Bueno';
    else if (estudiantes[i].promedio >= 8 && estudiantes[i].promedio < 12)
        estudiantes[i].calificacion = 'Aprobado';
    else if (estudiantes[i].promedio < 8)
        estudiantes[i].calificacion = 'Reprobado';
    else {
        estudiantes[i].calificacion = 'No corresponde a una nota';
    }
}

let estudianteMejor = estudiantes[0];
let estudiantePeor = estudiantes[0];
for (let i = 0; i < estudiantes.length; i++) {
    if(estudiantes[i].promedio > estudianteMejor.promedio) {
        estudianteMejor = estudiantes[i];
    } 
    if (estudiantes[i].promedio < estudiantePeor.promedio){
        estudiantePeor = estudiantes[i];
    }
}

console.log("------------------------------");
for (let i = 0; i < estudiantes.length; i++) {
    console.log(estudiantes[i].nombre);
    console.log(`Calificación: ${estudiantes[i].calificacion}`);
    console.log(`Promedio: ${estudiantes[i].promedio.toFixed(2)}`);
    console.log(`Calificación más alta: ${estudiantes[i].notaMax}`);
    console.log(`Calificación más baja: ${estudiantes[i].notaMin}`);
    console.log("----------------------------");
    
}

console.log(
    `El estudiante con el peor promedio es ${estudiantePeor.nombre} con un promedio de ${estudiantePeor.promedio.toFixed(2)}`
);
console.log(
    `El estudiante con el mejor promedio es ${estudianteMejor.nombre} con un promedio de ${estudianteMejor.promedio.toFixed(2)}`
);