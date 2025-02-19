using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CapaEntidad;
using Microsoft.Extensions.Configuration;

namespace CapaDatos
{
    public class LaboratorioDAL : CadenaDAL
    {
        public List<LaboratorioCLS> listarLaboratorios()
        {
            List<LaboratorioCLS> listaLaboratorios = null;

            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspListarLaboratorio", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;

                        SqlDataReader dr = cmd.ExecuteReader();

                        if (dr != null)
                        {
                            LaboratorioCLS oLaboratoriosCLS;
                            listaLaboratorios = new List<LaboratorioCLS>();

                            while (dr.Read())
                            {
                                oLaboratoriosCLS = new LaboratorioCLS();
                                oLaboratoriosCLS.idLaboratorio = dr.GetInt32(0);
                                oLaboratoriosCLS.nombre = dr.GetString(1);
                                oLaboratoriosCLS.direccion = dr.GetString(2);
                                oLaboratoriosCLS.personacontacto = dr.GetString(3);
                                listaLaboratorios.Add(oLaboratoriosCLS);
                            }
                        }
                    }

                }
                catch (Exception)
                {
                    cn.Close();
                    listaLaboratorios = null;
                    throw;
                }
            }


            return listaLaboratorios;
        }

        public List<LaboratorioCLS> FiltrarLaboratorios(string nombre, string direccion, string personacontacto)
        {

            List<LaboratorioCLS> listaLaboratorios = null;

            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspFiltrarLaboratorio", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@nombre", nombre);
                        cmd.Parameters.AddWithValue("@direccion", direccion);
                        cmd.Parameters.AddWithValue("@personacontacto", personacontacto);
                        SqlDataReader dr = cmd.ExecuteReader();

                        if (dr != null)
                        {
                            LaboratorioCLS oLaboratoriosCLS;
                            listaLaboratorios = new List<LaboratorioCLS>();

                            while (dr.Read())
                            {
                                oLaboratoriosCLS = new LaboratorioCLS();
                                oLaboratoriosCLS.idLaboratorio = dr.IsDBNull(0) ? 0 : dr.GetInt32(0);
                                oLaboratoriosCLS.nombre = dr.IsDBNull(1) ? "" : dr.GetString(1);
                                oLaboratoriosCLS.direccion = dr.IsDBNull(2) ? "" : dr.GetString(2);
                                oLaboratoriosCLS.personacontacto = dr.IsDBNull(3) ? "" : dr.GetString(3);
                                listaLaboratorios.Add(oLaboratoriosCLS);
                            }
                        }
                    }

                }
                catch (Exception)
                {
                    cn.Close();
                    listaLaboratorios = null;
                    throw;
                }
            }

            return listaLaboratorios;
        }
    }
}
