package tema1;
import java.util.Scanner;

public class ejercicio1{
    public static void main(String[] args) {
        System.out.println("dime tu nombre");
        String nombre = new Scanner(System.in).nextLine();
        System.out.println("dime tu primer apellido");
        String apellido1 = new Scanner(System.in).nextLine();
        System.out.println("dime tu segundo apellido");
        String apellido2 = new Scanner(System.in).nextLine();
        System.out.println("dime tu dni");
        String dni = new Scanner(System.in).nextLine();
        System.out.println("dime tu edad");
        int edad = new Scanner(System.in).nextInt();
        

        System.out.println("Eres "+ nombre + apellido1 + apellido2 + ",tu dni es "+ dni + " y tu edad es "+ edad);
        
    }
}