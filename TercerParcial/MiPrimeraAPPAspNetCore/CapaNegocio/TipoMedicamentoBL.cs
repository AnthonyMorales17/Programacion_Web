using CapaDatos;
using CapaEntidad;

namespace CapaNegocio
{
    public class TipoMedicamentoBL
    {
        private readonly TipoMedicamentoDAL _tipoMedicamentoDAL;

        public TipoMedicamentoBL()
        {
            _tipoMedicamentoDAL = new TipoMedicamentoDAL();
        }

        public List<TipoMedicamentoCLS> listarTipoMedicamento()
        {
            TipoMedicamentoDAL obj = new TipoMedicamentoDAL();
            return obj.listarTipoMedicamento();
        }

        public List<TipoMedicamentoCLS> filtrarMedicamento(string nombre)
        {
            TipoMedicamentoDAL obj = new TipoMedicamentoDAL();
            return obj.filtrarTipoMedicamento(nombre);
        }

        public bool AgregarTipoMedicamento(TipoMedicamentoCLS oTipoMedicamentoCLS)
        {
            return _tipoMedicamentoDAL.InsertarTipoMedicamento(oTipoMedicamentoCLS);
        }



    }
}
