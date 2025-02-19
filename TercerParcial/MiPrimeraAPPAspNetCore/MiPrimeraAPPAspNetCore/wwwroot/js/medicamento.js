window.onload = function () {
    listarTipoMedicamento();
}

async function listarMedicamento() {
    fetchGet("Medicamento/saludos", "text", function (res) {
        alert(res);
    })
}