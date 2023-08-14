package tema1;
import java.util.Scanner;

public class ejercicio16 {
    public static void main(String[] args) {
        /* 
        double preciOdisea=2.95;
        double precioElPadrino=3.5;

        System.out.println("Que pelicula vas a alquilar Inserta 1.Padrino 2.Odissea en el espacio.");
        int pelicula=new Scanner(System.in).nextInt();

        System.out.println("dime cuantos dias vas a alquilar la pelicula");
        int dias=new Scanner(System.in).nextInt();

        int total=0;

        System.out.println("dime tu saldo");
        double saldo=new Scanner(System.in).nextDouble();

        if(pelicula == 1){
            total=precioElPadrino*dias;
            if(saldo>=total){
                System.out.println("Gracias por alquilar con nosotros");
            }else{
                System.out.println("No tiene saldo suficiente para alquilar la pelicula para esos dias");
                
            }
        }


        if(pelicula == 2){
            total=preciOdisea*dias;
            if(saldo >= total){
                System.out.println("Gracias por alquilar con nosotros");
            }else{
                System.out.println("No tiene saldo suficiente apra alquilar");
            }
        }

        */

        double preciOdisea=2.95;
        double precioElPadrino=3.5;

        int dias=2;
        
        double precioAlquilerPadrino=dias*precioElPadrino;

        double precioAlquilerOdisea=dias*preciOdisea;

        int saldo=5;

        System.out.println(saldo + " no puede pagar el alquiler de dos dias de el Padrino " + precioAlquilerPadrino + " y tampoco el de Odisea "+ precioAlquilerOdisea );

       
       
       



    }
}
