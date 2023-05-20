// Realizar un algoritmo en el cual tendremos 3 notas respectivas a los parciales, la nota del examen final y la nota del trabajo final, y de todo esto, obtendremos un promedio final.
// Variables: Parcial1, Parcial2, Parcial3, PromedioP, NotasParcial, ExamenFinal, NotaExamen, NotaFinal, NotaTrabajo, NotaFinalTrabajo
//Salida: x

Funcion expresion()
	Definir parcial1,parcial2,parcial3,promedioP,notasParcial como reales;
	Definir examenFinal, notaExamen como real;
	Definir notaTrabajo,notaFinalTrabajo como reales;
	Definir notaFinal como real;
	Escribir "Digite las 3 notas de los parciales";
	Leer parcial1,parcial2,parcial3;
	promedioP <- (parcial1+parcial2+parcial3)/3;
	notasParcial <- promedioP*0.55;
	Escribir "Digite la nota del examen final: ";
	Leer examenfinal;
	notaExamen <- examenfinal*0.3;
	Escribir "Digite la nota del trabajo final: ";
	Leer notaTrabajo;
	notafinalTrabajo <- notaTrabajo * 0.15;
	notaFinal <- notasParcial+notaExamen+notaFinalTrabajo;
	Escribir "La calificacion final es: ",notaFinal;
FinFuncion


Algoritmo Examenes_y_notas
	expresion()
FinAlgoritmo
