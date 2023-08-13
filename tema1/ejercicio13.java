package tema1;

import java.util.Scanner;

public class ejercicio13 {
    public static void main(String[] args) {
        System.out.println("dime la cantidad de horas");
        int primerNumero=new Scanner(System.in).nextInt();
        System.out.println("dime la cantidad de minutos");
        int segundoNumero=new Scanner(System.in).nextInt();
        System.out.println("dime la cantidad de segundos");
        int tercerNumero=new Scanner(System.in).nextInt();

        System.out.println("es es el total de segundos introducido"+ (primerNumero*3600+segundoNumero*60+tercerNumero));


    }
}
