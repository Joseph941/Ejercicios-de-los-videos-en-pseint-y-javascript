// Realizar un algoritmo que digitando una calificacion nos de un promedio final.
// Variables: Calificacion_Promedio, Calificacion_Baja Calificacion, Suma, i
//Salida: x

Funcion expresion()
	Definir calificacion_promedio, calificacion_baja como real;
	Definir calificacion, suma como real;
	Definir i Como Entero;
	
	suma <- 0;
	calificacion_baja <- 2222;
	
	Para i <-1 Hasta 10 Con Paso 1 Hacer
		Escribir i, ". Digite una calificacion: ";
		Leer calificacion;
		
		suma <- suma + calificacion;
		Si calificacion < calificacion_baja Entonces
			calificacion_baja <- calificacion;
		FinSi
	FinPara
	
	calificacion_promedio <- suma/10;
FinFuncion

	
	Algoritmo Calificacion_y_promedio
		expresion()
FinAlgoritmo
