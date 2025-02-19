using System.Data.SqlClient;
using CapaEntidad;
using Microsoft.Extensions.Configuration;

namespace CapaDatos
{
    public class SucursalDAL : CadenaDAL
    {
        public List<SucursalCLS> listarSucursales()
        {
            List<SucursalCLS> listaSucursales = null;

            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspListarSucursal", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;

                        SqlDataReader dr = cmd.ExecuteReader();

                        if (dr != null)
                        {
                            SucursalCLS oSucursalesCLS;
                            listaSucursales = new List<SucursalCLS>();

                            while (dr.Read())
                            {
                                oSucursalesCLS = new SucursalCLS();
                                oSucursalesCLS.idSucursal = dr.GetInt32(0);
                                oSucursalesCLS.nombre = dr.GetString(1);
                                oSucursalesCLS.direccion = dr.GetString(2);
                                listaSucursales.Add(oSucursalesCLS);
                            }
                        }
                    }

                }
                catch (Exception)
                {
                    cn.Close();
                    listaSucursales = null;
                    throw;
                }
            }


            return listaSucursales;
        }


        public List<SucursalCLS> FiltrarSucursales(string nombre)
        {

            List<SucursalCLS> listaSucursales = null;

            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspFiltrarSucursal", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@nombresucursal", nombre);
                        SqlDataReader dr = cmd.ExecuteReader();

                        if (dr != null)
                        {
                            SucursalCLS oSucursalCLS;
                            listaSucursales = new List<SucursalCLS>();

                            while (dr.Read())
                            {
                                oSucursalCLS = new SucursalCLS();
                                oSucursalCLS.idSucursal = dr.IsDBNull(0) ? 0 : dr.GetInt32(0);
                                oSucursalCLS.nombre = dr.IsDBNull(1) ? "" : dr.GetString(1);
                                oSucursalCLS.direccion = dr.IsDBNull(2) ? "" : dr.GetString(2);

                                listaSucursales.Add(oSucursalCLS);
                            }
                        }
                    }

                }
                catch (Exception)
                {
                    cn.Close();
                    listaSucursales = null;
                    throw;
                }
            }

            return listaSucursales;
        }


    }
}
