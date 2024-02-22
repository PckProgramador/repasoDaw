package tema1;

public class ejercicio21 {
    public static void main(String[] args) {
        double porcentajeTeoria=0.4;
        double porcentajePractica=0.6;

        double preguntasTeoria=8;
        double preguntasPractica=4;

        double aciertosTeoria=6;
        double aciertosPractica=1;

        double puntosTeoria=(aciertosTeoria/preguntasTeoria)*porcentajeTeoria;
        double puntosPractica=(aciertosPractica/preguntasPractica)*porcentajePractica;

        System.out.println("el alumno ha sacado" + (puntosTeoria+puntosPractica)*10 +"puntos");
    }
}
