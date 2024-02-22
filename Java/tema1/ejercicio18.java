package tema1;

public class ejercicio18 {
    public static void main(String[] args) {
        int precioHora=7;
        int claseSemanal1=2;
        int claseSemanal2=3;

        int total= precioHora*claseSemanal1*claseSemanal2*4;
        System.out.println("Ha ganado al mes "+ total + "eurios");

        System.out.println("si quiere ganar 900 euros al mes tiene que dar " + 900.0/precioHora + "horas");
    }
}
