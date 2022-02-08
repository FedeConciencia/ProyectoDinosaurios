
package Controlador;


import Conexion.Conexion;
import Modelo.Dinosaurio;
import java.sql.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class Controlador {

    //METODO PARA INSERTAR DINOSAURIO:
    public void insertarDinosaurio(Dinosaurio dinosaurio) {

        Connection conexion = null;
        Conexion con = new Conexion();
        PreparedStatement ps = null;  //Este objeto permite guardar las consultas que hacemos a la BD.
        ResultSet rs = null;  // este objeto lo usamos cuando obtenemos algo de la base de datos.

        try {

            conexion = con.getConnection(); //metodo getConnection, logueamos el usuario.

            ps = conexion.prepareStatement("INSERT INTO dinosaurio (nombre, imagen, info, fuerza, fechaAlta, fechaBaja, estado) VALUES (?, ?, ?, ?, ?, ?, ?)");

            // Se establecen los parámetros y se ejecuta la sentencia.
            ps.setString(1, dinosaurio.getNombre());
            ps.setString(2, dinosaurio.getImagen());
            ps.setString(3, dinosaurio.getInfo());
            ps.setInt(4, dinosaurio.getFuerza());
            ps.setDate(5, Date.valueOf(dinosaurio.getFechaAlta())); //Se trabaja en java con LocalDate
            ps.setDate(6, Date.valueOf(dinosaurio.getFechaBaja())); //Se trabaja en java con LocalDate
            ps.setString(7, dinosaurio.getEstado());

            //Ejecutamos el comando y mandamos los datos al sistema:
            int resultado = ps.executeUpdate();

            if (resultado > 0) {

                System.out.println("El Registro fue insertado con exito a la Base de Datos.");
                //JOptionPane.showMessageDialog(null, "El Registro fue insertado con exito a la Base de Datos.");
                //out.print("<script>alert('El Registro fue insertado con exito a la Base de Datos.');<script>");

            } else {

                System.out.println("Error al intentar insertar el registro.");
                //JOptionPane.showMessageDialog(null, "Error al intentar insertar el registro.");
                //out.print("<script>alert('Error al intentar insertar el registro.');<script>");
            }

            conexion.close(); //cerramos la conexion.

        } catch (Exception ex) {

            System.err.println("Error. " + ex);
            //out.print("<script>alert('Error de Conexion.');<script>");

        } finally {

            try {

                ps.close();

            } catch (SQLException ex) {

                System.err.println("Error. " + ex);
                //out.print("<script>alert('Error de Conexion.');<script>");
            }

        }
    }

    //METODO PARA GESTIONAR ACTUALIZACION DINOSAURIO:
    public void actualizarDinosaurio(Dinosaurio dinosaurio) {

        Connection conexion = null;
        Conexion con = new Conexion();
        PreparedStatement ps = null;  //Este objeto permite guardar las consultas que hacemos a la BD.
        ResultSet rs = null;  // este objeto lo usamos cuando obtenemos algo de la base de datos.

        try {

            conexion = con.getConnection(); //metodo getConnection, logueamos el usuario.

            ps = conexion.prepareStatement("UPDATE dinosaurio SET nombre = ?, imagen = ?, info = ?, fuerza = ?, fechaAlta = ?, fechaBaja = ?, estado = ?  WHERE idDino = ? ");

            ps.setString(1, dinosaurio.getNombre());
            ps.setString(2, dinosaurio.getImagen());
            ps.setString(3, dinosaurio.getInfo());
            ps.setInt(4, dinosaurio.getFuerza());
            ps.setDate(5, Date.valueOf(dinosaurio.getFechaAlta())); //Se trabaja en java con LocalDate
            ps.setDate(6, Date.valueOf(dinosaurio.getFechaBaja())); //Se trabaja en java con LocalDate
            ps.setString(7, dinosaurio.getEstado());
            ps.setLong(8, dinosaurio.getIdDino());

            //Ejecutamos el comando y mandamos los datos al sistema:
            int resultado = ps.executeUpdate();

            if (resultado > 0) {

                System.out.println("El Registro fue actualizado con exito a la Base de Datos.");
                //JOptionPane.showMessageDialog(null, "El Registro fue modificado con exito a la Base de Datos.");

            } else {

                System.out.println("Error al intentar actualizar el registro.");
                //JOptionPane.showMessageDialog(null, "Error al intentar modificar el registro.");
            }

            conexion.close(); //cerramos la conexion.

        } catch (Exception ex) {

            System.err.println("Error. " + ex);

        } finally {

            try {
                ps.close();

            } catch (SQLException ex) {

                System.err.println("Error. " + ex);
            }

        }

    }

    //METODO BUSCAR ONE CLIENTE:
    public Dinosaurio buscarOneDinosaurio(Long id) {

        Connection conexion = null;
        Conexion con = new Conexion();
        Dinosaurio dinosaurio = null;
        PreparedStatement ps = null;  //Este objeto permite guardar las consultas que hacemos a la BD.
        ResultSet rs = null;  // este objeto lo usamos cuando obtenemos algo de la base de datos.

        try {

            conexion = con.getConnection(); //metodo getConnection, logueamos el usuario.

            ps = conexion.prepareStatement("SELECT *  FROM dinosaurio WHERE idDino = ?");

            ps.setLong(1, id); //pasamos el id parametro y se ingresa en el ? del query

            rs = ps.executeQuery();  //Ejecutamos el Resulset y executeQuery cuando obtenemos algo de la base de datos.

            if (rs.next()) {  //si nos devuelve un dato true

                Long idDino = rs.getLong(1); //cada numero del parametro hace referencia al dato del campo que se desea obtener = idPersona
                String nombre = rs.getString(2);
                String imagen = rs.getString(3);
                String info = rs.getString(4);
                int fuerza = rs.getInt(5);
                LocalDate fechaAlta = (rs.getDate(6)).toLocalDate(); //En java trabajamos con LocalDate
                LocalDate fechaBaja = (rs.getDate(7)).toLocalDate(); //En java trabajamos con LocalDate
                String estado = rs.getString(8);

                dinosaurio = new Dinosaurio(idDino, nombre, imagen, info, fuerza, fechaAlta, fechaBaja, estado);

                System.out.println("El Registro fue encontrado con exito.");
                //JOptionPane.showMessageDialog(null, "El Registro fue encontrado con exito.");

            } else {

                System.out.println("El Registro no fue encontrado en la Base de Datos.");
                //JOptionPane.showMessageDialog(null, "El Registro no fue encontrado en la Base de Datos.");
            }

            conexion.close();

        } catch (Exception ex) {

            System.err.println("Error. " + ex);

        } finally {

            try {

                ps.close();
                rs.close();

            } catch (SQLException ex) {
                System.err.println("Error. " + ex);
            }

        }

        return dinosaurio; //devolvemos el dinosaurio encontrado
    }

    //OBTENER ALL Dinosaurio:
    public List<Dinosaurio> buscarAllDinosaurio() {

        Connection conexion = null;
        Conexion con = new Conexion();
        Dinosaurio dinosaurio = null;
        List<Dinosaurio> listaDinosaurio = new ArrayList<Dinosaurio>();
        PreparedStatement ps = null;  //Este objeto permite guardar las consultas que hacemos a la BD.
        ResultSet rs = null;  // este objeto lo usamos cuando obtenemos algo de la base de datos.

        try {

            conexion = con.getConnection(); //metodo getConnection, logueamos el usuario.

            ps = conexion.prepareStatement("SELECT * FROM dinosaurio");

            rs = ps.executeQuery();

            while (rs.next()) {

                Long idDino = rs.getLong(1); //cada numero del parametro hace referencia al dato del campo que se desea obtener = idPersona
                String nombre = rs.getString(2);
                String imagen = rs.getString(3);
                String info = rs.getString(4);
                int fuerza = rs.getInt(5);
                LocalDate fechaAlta = (rs.getDate(6)).toLocalDate(); //En java trabajamos con LocalDate
                LocalDate fechaBaja = (rs.getDate(7)).toLocalDate(); //En java trabajamos con LocalDate
                String estado = rs.getString(8);

                dinosaurio = new Dinosaurio(idDino, nombre, imagen, info, fuerza, fechaAlta, fechaBaja, estado);

                listaDinosaurio.add(dinosaurio);

            }

            conexion.close();

        } catch (Exception ex) {

            System.err.println("Error. " + ex);

        } finally {

            try {

                ps.close();
                rs.close();

            } catch (SQLException ex) {
                System.err.println("Error. " + ex);
            }

        }

        return listaDinosaurio; //devolvemos la lista de dinosaurios encontrado

    }

    //DELETE LOGICO DINOSAURIO A TRAVES DE UPDATE:
    public void eliminarLogicoDinosaurio(Long id, LocalDate fecha) {

        Connection conexion = null;
        Conexion con = new Conexion();
        PreparedStatement ps = null;  //Este objeto permite guardar las consultas que hacemos a la BD.
        ResultSet rs = null;  // este objeto lo usamos cuando obtenemos algo de la base de datos.

        try {

            conexion = con.getConnection(); //metodo getConnection, logueamos el usuario.

            ps = conexion.prepareStatement("UPDATE dinosaurio SET fechaBaja = ?, estado = ?  WHERE idDino = ? ");

            ps.setDate(1, Date.valueOf(fecha)); //Trabajamos en java con LocalDate
            ps.setString(2, "inactivo");
            ps.setLong(3, id);

            //Ejecutamos el comando y mandamos los datos al sistema:
            int resultado = ps.executeUpdate();

            if (resultado > 0) {

                System.out.println("El Registro fue eliminado (Logico) de la Base de Datos.");
                //JOptionPane.showMessageDialog(null, "El Registro fue modificado con exito a la Base de Datos.");

            } else {

                System.out.println("Error al intentar actualizar el registro.");
                //JOptionPane.showMessageDialog(null, "Error al intentar modificar el registro.");
            }

            conexion.close(); //cerramos la conexion.

        } catch (Exception ex) {

            System.err.println("Error. " + ex);

        } finally {

            try {
                ps.close();

            } catch (SQLException ex) {

                System.err.println("Error. " + ex);
            }

        }

    }

    //METODO ELIMINAR DINOSAURIO:
    public void eliminarDinosaurio(Long id) {

        Connection conexion = null;
        Conexion con = new Conexion();
        PreparedStatement ps = null;  //Este objeto permite guardar las consultas que hacemos a la BD.
        ResultSet rs = null;  // este objeto lo usamos cuando obtenemos algo de la base de datos.

        try {

            conexion = con.getConnection(); //metodo getConnection, logueamos el usuario.

            ps = conexion.prepareStatement("DELETE FROM dinosaurio WHERE idDino = ?");

            ps.setLong(1, id); //Se puede usar indicando el primer signo de pregunta del qwery y alojar la variable

            //Ejecutamos el comando y mandamos los datos al sistema:
            int resultado = ps.executeUpdate();

            if (resultado > 0) {

                System.out.println("El Registro fue eliminado con exito a la Base de Datos.");
                //JOptionPane.showMessageDialog(null, "El Registro fue eliminado con exito a la Base de Datos.");
                
            } else {

                System.out.println("Error al intentar eliminar el registro.");
                //JOptionPane.showMessageDialog(null, "Error al intentar eliminar el registro.");
            }

            conexion.close(); //cerramos la conexion.

        } catch (Exception ex) {

            System.err.println("Error. " + ex);

        } finally {

            try {
                ps.close();

            } catch (SQLException ex) {
                System.err.println("Error. " + ex);
            }

        }

    }

}
