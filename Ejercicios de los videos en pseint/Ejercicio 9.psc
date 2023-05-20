// Realizar un Algoritmo en el cual se usará el operador aux, este tiene como funcion, que cuando el usuario digite 2 valores correspondientes a cada variable, los intercambiará.
// Variables: a, b, aux
// Salida: x

Funcion expresion()
	Definir a,b,aux como enteros;
	
	Escribir "Digite el valor de a; ";
	leer a;
	Escribir "Digite el valor de b: ";
	leer b;
	
	aux <- a;
	a <- b;
	b <- aux;
	
	Escribir "El nuevo valor de a es: ",a;
	Escribir "El nuevo valor de b es: ",b;
	
FinFuncion

Algoritmo Auxiliar
	expresion()
FinAlgoritmo
	