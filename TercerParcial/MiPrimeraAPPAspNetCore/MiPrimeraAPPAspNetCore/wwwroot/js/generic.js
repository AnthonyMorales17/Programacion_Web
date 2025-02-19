function get(idControl) {
    return document.getElementById(idControl).value;
}

function set(idControl, valor) {
    document.getElementById(idControl).value = valor;
}

async function fetchGet(url, tiporespuesta, callback) {
    try {

        //http://
        let urlCompleta = window.location.protocol + "//" + window.location.host + "/" + url;

        let res = await fetch(urlCompleta);
        if (tiporespuesta == "json")
            res = await res.json();
        else if (tiporespuesta == "text")
            res = await res.text();

        //JSON objeto
        callback(res);
        
    } catch (e) {
        alert(e);
    }
}

let objConfiguracionGlobal;

//{url: "":, cabeceras:[], nombrepropiedades:[]}
function pintar(objConfiguracion) {
    objConfiguracionGlobal = objConfiguracion;
    fetchGet(objConfiguracion.url, "json", function (res) {
        let contenido = "";

        //-----------------------------

        contenido += generartabla(res);


        document.getElementById("divTabla").innerHTML = contenido;
    })
}

function generartabla(res) {

    let contenido = "";


    //["Id Tipo Medicamento", "Nombre", "Descripcion"]
    let cabeceras = objConfiguracionGlobal.cabeceras;
    //["idMedicamento", "nombre", "descripcion"]
    let nombrepropiedades = objConfiguracionGlobal.propiedades;

    contenido += "<table class='table' >";
    contenido += "<thead>";
    contenido += "<tr>";
    for (let i = 0; i < cabeceras.length; i++) {
        contenido += "<td>" + cabeceras[i] + "</td>";
    }
    //contenido += "<td>Id Tipo Medicamento</td>";
    //contenido += "<td>Nombre</td>";
    //contenido += "<td>Descripcion</td>";
    contenido += "</tr>";
    contenido += "</thead>";


    let nroRegistros = res.length;
    let obj;
    let propiedadActual;

    contenido += "<tbody>";

    for (let i = 0; i < nroRegistros; i++) {
        obj = res[i];
        contenido += "<tr>";
        for (let j = 0; j < nombrepropiedades.length; j++) {
            propiedadActual = nombrepropiedades[j]
            contenido += "<td>" + obj[propiedadActual] + "</td>";
        }
        //contenido += "<td>" + obj.idMedicamento + "</td>";
        //contenido += "<td>" + obj.nombre + "</td>";
        //contenido += "<td>" + obj.descripcion + "</td>";
        contenido += "</tr>";
    }

    contenido += "</tbody>";
    contenido += "</table>";
    return contenido;
}