package tema1;

import java.util.Scanner;

public class ejercicio15 {
    public static void main(String[] args) {
        System.out.println("dime los grados centigrados de temperatura");
        int gradosCentigrados = new Scanner(System.in).nextInt();

        double gradosFarenheit = ( 1.8 * gradosCentigrados)+32;

        System.out.println("hace "+ gradosCentigrados + "grados centigrados  o " + gradosFarenheit + "gradosFarenheit");
    }
}
