window.onload = function () {
    listarLaboratorios();
}

//Laboratorio/listarLaboratorios

async function listarLaboratorios() {

    objLaboratorio = {
        url: "Laboratorio/listarLaboratorios",
        cabeceras: ["Id Laboratorio", "Nombre", "Direccion", "Contacto Personal"],
        propiedades: ["idLaboratorio", "nombre", "direccion", "personacontacto"]
    };
    pintar(objLaboratorio);
}

function buscarLaboratorio() {
    let nombrelaboratorio = document.getElementById("txtNombreLaboratorio").value;
    let direccionlaboratorio = document.getElementById("txtDireccionLaboratorio").value;
    let personacontactolaboratorio = document.getElementById("txtPersona").value;

    let queryParams = new URLSearchParams({
        nombre: nombre,
        direccion: direccion,
        persona: persona
    }).toString();

    objLaboratorio.url = "Laboratorio/filtrarLaboratorio?" + queryParams;

    pintar(objLaboratorio);
}

function LimpiarLaboratorio() {
    listarLaboratorios();
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtDireccion").value = "";
    document.getElementById("txtPersona").value = "";
}