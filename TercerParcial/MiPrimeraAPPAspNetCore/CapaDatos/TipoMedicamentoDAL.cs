using System.Data.SqlClient;
using CapaEntidad;
using Microsoft.Extensions.Configuration;

namespace CapaDatos
{
    public class TipoMedicamentoDAL : CadenaDAL
    {

        public List<TipoMedicamentoCLS> listarTipoMedicamento()
        {

            List<TipoMedicamentoCLS> lista = null;

            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("SELECT IIDTIPOMEDICAMENTO, NOMBRE, DESCRIPCION FROM TipoMedicamento WHERE BHABILITADO = 1", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.Text;

                        SqlDataReader dr = cmd.ExecuteReader();

                        if (dr != null)
                        {
                            TipoMedicamentoCLS oTipoMedicamentoCLS;
                            lista = new List<TipoMedicamentoCLS>();

                            while (dr.Read())
                            {
                                oTipoMedicamentoCLS = new TipoMedicamentoCLS();
                                oTipoMedicamentoCLS.idTipoMedicamento = dr.IsDBNull(0) ? 0 : dr.GetInt32(0);
                                oTipoMedicamentoCLS.nombre = dr.IsDBNull(1) ? "" : dr.GetString(1);
                                oTipoMedicamentoCLS.descripcion = dr.IsDBNull(2) ? "" : dr.GetString(2);

                                lista.Add(oTipoMedicamentoCLS);
                            }
                        }
                    }

                } catch(Exception)
                {
                    cn.Close();
                    lista = null;
                    throw;
                }
            }


            return lista;
        }


        public List<TipoMedicamentoCLS> filtrarTipoMedicamento(string nombre)
        {

            List<TipoMedicamentoCLS> lista = null;

            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspFiltrarTipoMedicamento", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@nombretipomedicamento", nombre);
                        SqlDataReader dr = cmd.ExecuteReader();

                        if (dr != null)
                        {
                            TipoMedicamentoCLS oTipoMedicamentoCLS;
                            lista = new List<TipoMedicamentoCLS>();

                            while (dr.Read())
                            {
                                oTipoMedicamentoCLS = new TipoMedicamentoCLS();
                                oTipoMedicamentoCLS.idTipoMedicamento = dr.IsDBNull(0) ? 0 : dr.GetInt32(0);
                                oTipoMedicamentoCLS.nombre = dr.IsDBNull(1) ? "" : dr.GetString(1);
                                oTipoMedicamentoCLS.descripcion = dr.IsDBNull(2) ? "" : dr.GetString(2);

                                lista.Add(oTipoMedicamentoCLS);
                            }
                        }
                    }

                }
                catch (Exception)
                {
                    cn.Close();
                    lista = null;
                    throw;
                }
            }


            return lista;
        }

        public bool InsertarTipoMedicamento(TipoMedicamentoCLS oTipoMedicamentoCLS)
        {
            bool respuesta = false;
            
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspGuardarTipoMedicamento", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@nombre", oTipoMedicamentoCLS.nombre);
                        cmd.Parameters.AddWithValue("@descripcion", oTipoMedicamentoCLS.descripcion);
                        int filas = cmd.ExecuteNonQuery();
                        if (filas > 0)
                        {
                            respuesta = true;
                        }
                    }
                }
                catch (Exception)
                {
                    cn.Close();
                    respuesta = false;
                    throw;
                }
            }
            return respuesta;
        }
    }
}
