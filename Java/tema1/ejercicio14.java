package tema1;

import java.util.Scanner;

public class ejercicio14 {
    public static void main(String[] args) {
        System.out.println("dime la cantidad en euros");
        double euros= new Scanner(System.in).nextDouble();
        
        double dolares = euros*1.42;
        double libras= euros*87.13/100;
        double Yens = euros*113.86;
        double pesetas = euros * 166.386;

        System.out.println( "Tienes " + euros + "euros ,"+ dolares + " $ ," + libras + " libras , "+ Yens + " Y . "+ pesetas + " pesetas" );
        
        
    }
}
