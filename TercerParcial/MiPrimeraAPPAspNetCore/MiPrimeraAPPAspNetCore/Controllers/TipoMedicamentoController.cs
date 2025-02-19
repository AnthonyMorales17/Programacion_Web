using CapaDatos;
using CapaEntidad;
using CapaNegocio;
using Microsoft.AspNetCore.Mvc;

namespace MiPrimeraAPPAspNetCore.Controllers
{
    public class TipoMedicamentoController : Controller
    {
        private readonly TipoMedicamentoBL _tipoMedicamentoBL;

        public TipoMedicamentoController()
        {
            _tipoMedicamentoBL = new TipoMedicamentoBL();
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Inicio()
        {
            return View();
        }

        public IActionResult SinMenu()
        {
            return View();
        }

        public List<TipoMedicamentoCLS> listarTipoMedicamento()
        {
            TipoMedicamentoBL obj = new TipoMedicamentoBL();
            return obj.listarTipoMedicamento();
        }

        public List<TipoMedicamentoCLS> filtrarTipoMedicamento(string nombre)
        {
            TipoMedicamentoBL obj = new TipoMedicamentoBL();
            return obj.filtrarMedicamento(nombre);
        }

        public string cadena()
        {
            IConfigurationBuilder builder = new ConfigurationBuilder();
            builder.AddJsonFile(Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json"));
            var root = builder.Build();
            var cadenaDato = root.GetConnectionString("cn");
            return cadenaDato;
        }


        public IActionResult Guardar()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Guardar(TipoMedicamentoCLS oTipoMedicamentoCLS)
        {
            if (!ModelState.IsValid)
            {
                return View(oTipoMedicamentoCLS);
            }
            bool resultado = _tipoMedicamentoBL.AgregarTipoMedicamento(oTipoMedicamentoCLS);

            if (resultado)
            {
                return RedirectToAction("Inicio");
            }
            else
            {
                // Manejar el caso en que la inserción falle
                ModelState.AddModelError("", "Ocurrió un error al guardar el tipo de medicamento.");
                return View(oTipoMedicamentoCLS);
            }
        }


    }
}
