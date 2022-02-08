
package Principal;

import Controlador.Controlador;
import Modelo.Dinosaurio;
import java.time.LocalDate;
import java.util.List;


public class Principal {
    
    public static void main(String[] args) {
        
        /*
        
        //Prueba de Insert Dinosaurio (Funciona OK) =>
        
        //LocalDate.parse("2020-01-01") o LocalDate.of("2020-01-01")
        
        Dinosaurio dino = new Dinosaurio("Tiranosaurio", "Tirano.jpg", "Rey Jurasico", 7, LocalDate.parse("2020-02-02"), LocalDate.parse("1900-01-01"), "activo");
        
        Controlador controlador = new Controlador();
        
        controlador.insertarDinosaurio(dino);

        */
        
        /*
        
        //Prueba de buscarOne Dinosaurio (Funciona OK) =>
        
        Controlador controlador = new Controlador();
        
        Dinosaurio dinosaurio = controlador.buscarOneDinosaurio(1L);
        
        System.out.println(dinosaurio.toString());
        
        */
        
        /*
        
        //Prueba de buscarAll Dinosaurio (Funciona OK) =>
        
        Controlador controlador = new Controlador();
        
        List<Dinosaurio> listaDino = controlador.buscarAllDinosaurio();
        
        for(Dinosaurio item: listaDino){
            
            System.out.println(item.toString());
            
        }

        */
        
        /*
        
        //Prueba de Update Dinosaurio (Funciona OK) =>
        
        Controlador controlador = new Controlador();
        
        Dinosaurio dino = new Dinosaurio(1L, "Velociraptor", "Velo.jpg", "Velocidad", 8, LocalDate.parse("2020-02-02"), LocalDate.parse("1900-01-01"), "activo");
        
        controlador.actualizarDinosaurio(dino);
        
        */
        
        
        //Prueba de Eliminar Logico Dinosaurio (Funciona OK) =>
        
        /*
        
        Controlador controlador = new Controlador();
        
        controlador.eliminarLogicoDinosaurio(1L, LocalDate.parse("2022-02-03"));

        */
        
        
        
    }
    
}



