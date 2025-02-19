window.onload = function () {
    listarTipoMedicamento();
}

let objTipoMedicamento;

function filtrarTipoMedicamento() {
    let nombre = get("txtNombreTipoMedicamento");

    if (nombre == "") {
        listarTipoMedicamento();
    } else {
        objTipoMedicamento.url = "TipoMedicamento/filtrarTipoMedicamento?nombre=" + nombre;
        pintar(objTipoMedicamento);
    }

}

async function listarTipoMedicamento() {

    objTipoMedicamento =
    {
        url: "TipoMedicamento/listarTipoMedicamento",
        cabeceras: ["Id Tipo Medicamento", "Nombre", "Descripcion"],
        propiedades: ["idTipoMedicamento", "nombre", "descripcion"]
    };
    pintar(objTipoMedicamento);
}

function Buscar()
{
    let nombretipomedicamento = get("txtNombreTipoMedicamento");
    objTipoMedicamento.url = "TipoMedicamento/filtrarTipoMedicamento?nombre=" + nombretipomedicamento;
    pintar(objTipoMedicamento);
}

function LimpiarControl()
{
    listarTipoMedicamento();
    set("txtNombreTipoMedicamento", "");
}

async function registrarTipoMedicamento() {
    let nombre = document.getElementById("txtNombre").value;
    let descripcion = document.getElementById("txtDescripcion").value;
    alert(nombre + " " + descripcion);

    let url = "tipoMedicamento/registrarTipoMedicamento?nombre=" + nombre + "&descripcion=" + descripcion;
    registrarMedicamento(url);
    listarTipoMedicamento();
}