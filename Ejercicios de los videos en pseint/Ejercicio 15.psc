// Realizar un algoritmo en el cual tendremos 3 cuestionarios, esto realizara una operacion de cada cuestionario, será, tiempoA <- cantidadA multiplicado por 5, en el B multiplicado por 8, y en el C multiplicado por 6, y al final escribir cuantas horas y minutos se tardará.
// Variables: TiempoA, TiempoB, TiempoC, CantidadA, CantidadB, CantidadC, Tiempo_Total, horas, minutos
//Salida: x

Funcion expresion()
	Definir cantidadA,cantidadB,cantidadC como enteros;
	Definir tiempoA,tiempoB,tiempoC como enteros;
	Definir tiempo_total Como Entero;
	Definir horas, minutos como enteros;
	
	Escribir "Digite la cantidad de cuestionarios A: ";
	leer cantidadA;
	Escribir "Digite la cantidad de cuestionarios B: ";
	leer cantidadB;
	Escribir "Digite la cantidad de cuestionarios C: ";
	leer cantidadC;
	
	tiempoA <- cantidadA * 5;
	tiempoA <- cantidadA * 8;
	tiempoA <- cantidadA * 6;
	
	tiempo_total <- tiempoA + tiempoB + tiempoC;
	horas <- tiempo_total/60; 
	minutos <- tiempo_total mod 60;
	
	
	Escribir "Se tardara ",horas," horas y ",minutos," minutos";
	
FinFuncion


 Algoritmo Cuestionarios
 expresion()
 FinAlgoritmo
