package tema1;
import java.util.Scanner;
public class ejercicio12 {
    public static void main(String[] args) {
        System.out.println("Dime el precio normal");
        double precioNormal=new Scanner(System.in).nextDouble();
        System.out.println("Dime el porcentaje de rebaja");
        int porcentajeReabaja=new Scanner(System.in).nextInt();

        System.out.println("Precio normal del artículo:"+ precioNormal+" euros \n"+
            "Porcentaje de reabaja aplicado " + porcentajeReabaja + "% \n"+
            "Descuento aplicado " + precioNormal*porcentajeReabaja/100 + " euros \n" +
            "Precio final "+ (precioNormal - (precioNormal*porcentajeReabaja/100)) + "euros");
    }
}
