// Realizar un Algoritmo en el cual el programa resuelva el area de un circulo, y nos de la longitud del mismo, area = pi(3.1415) * radio^2, y longitud = 2 * radio.
// Variales: radio, lon, area
// Salida: x

Funcion expresion()
	Definir radio,area,lon Como Real;
	Escribir "Digite el valor del radio: ";
	leer radio;
	area <- pi * radio^2;
	lon <- 2 * radio;
	Escribir "El area de la circunferencia es: ",area;
	Escribir "La longitud es: ",lon;

	
FinFuncion

Algoritmo Area_de_un_circulo
	expresion()
FinAlgoritmo
