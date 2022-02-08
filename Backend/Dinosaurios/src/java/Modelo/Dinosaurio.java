
package Modelo;


import java.time.LocalDate;

public class Dinosaurio {
    
    
    //Variables de Clase =>
    
    private Long idDino;
    private String nombre;
    private String imagen;
    private String info;
    private int fuerza;
    private LocalDate fechaAlta;
    private LocalDate fechaBaja;
    private String estado;
    
    //Constructores =>

    public Dinosaurio() {
    }

    public Dinosaurio(Long idDino, String nombre, String imagen, String info, int fuerza, LocalDate fechaAlta, LocalDate fechaBaja, String estado) {
        this.idDino = idDino;
        this.nombre = nombre;
        this.imagen = imagen;
        this.info = info;
        this.fuerza = fuerza;
        this.fechaAlta = fechaAlta;
        this.fechaBaja = fechaBaja;
        this.estado = estado;
    }

    public Dinosaurio(String nombre, String imagen, String info, int fuerza, LocalDate fechaAlta, LocalDate fechaBaja, String estado) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.info = info;
        this.fuerza = fuerza;
        this.fechaAlta = fechaAlta;
        this.fechaBaja = fechaBaja;
        this.estado = estado;
    }
    
    //Metodos Setter and Getters =>

    public Long getIdDino() {
        return idDino;
    }

    public void setIdDino(Long idDino) {
        this.idDino = idDino;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public int getFuerza() {
        return fuerza;
    }

    public void setFuerza(int fuerza) {
        this.fuerza = fuerza;
    }

    public LocalDate getFechaAlta() {
        return fechaAlta;
    }

    public void setFechaAlta(LocalDate fechaAlta) {
        this.fechaAlta = fechaAlta;
    }

    public LocalDate getFechaBaja() {
        return fechaBaja;
    }

    public void setFechaBaja(LocalDate fechaBaja) {
        this.fechaBaja = fechaBaja;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }
    
    //Metodo String devolver datos =>

    @Override
    public String toString() {
        return "idDino:" + idDino + "\nNombre: " + nombre + "\nImagen: " + imagen + 
                "\nInfo: " + info + "\nFuerza: " + fuerza + "\nFechaAlta: " + fechaAlta + 
                "\nFechaBaja: " + fechaBaja + "\nEstado: " + estado;
    }
    
    
    
    
}

