package tema1;

public class ejercicio19 {
    public static void main(String[] args) {
        int sueldoFijo=200;
        int sueldoPorAlumno=15;

        int totalAlumnos =30;

        System.out.println("el alumno gana "+ (sueldoFijo+(sueldoPorAlumno*totalAlumnos)));

        System.out.println("La academia gana " + totalAlumnos*100);
    }
}
