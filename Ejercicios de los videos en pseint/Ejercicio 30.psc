// Realizar un algoritmo que el usuario pueda dar una cantidad de numeros a sumarse.
// Variables: N, suma, i
//Salida: x

Funcion expresion()
	Definir N,suma,i Como Entero;
	Escribir "Digite la cantidad de numeros a sumarse: ";
	leer N;
	
	suma <- 0;
	
	Para i <-1 Hasta N Con Paso 1 Hacer
		suma <- suma + i;
		
	FinPara
	
	Escribir "La suma es: ",suma;
FinFuncion


Algoritmo Suma_numeros
	expresion()
FinAlgoritmo
