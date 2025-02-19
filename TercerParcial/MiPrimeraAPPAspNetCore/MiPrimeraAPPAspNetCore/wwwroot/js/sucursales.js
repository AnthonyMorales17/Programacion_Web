window.onload = function () {
    listarSucursales();
}

let objSucursal;

function filtrarSucursal() {
    let nombre = get("txtNombre");

    if (nombre == "") {
        listarSucursales();
    } else {
        objSucursal.url = "Sucursal/filtrarSucursal?nombre=" + nombre
        pintar(objSucursal);
    }

}

async function listarSucursales() {

    objSucursal =
    {
        url: "Sucursal/listarSucursal",
        cabeceras: ["Id Sucursal", "Nombre", "Direccion"],
        propiedades: ["idSucursal", "nombre", "direccion"]
    };
    pintar(objSucursal);
}


function buscarSucursal() {
    let nombresucursal = get("txtNombre");
    objSucursal.url = "Sucursal/filtrarSucursal?nombre=" + nombresucursal;
    pintar(objSucursal);
}

function LimpiarSucursal() {
    listarSucursales();
    set("txtNombre", "");
}