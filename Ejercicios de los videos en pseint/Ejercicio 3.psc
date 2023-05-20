// Realizar un Algoritmo en el cual asignando 3 valores por el usuario a las variables a, b y c, el programa se encargara de resolver si a+b(100+34) es mayor o igual a c(225).
// Variables: resultado, a, b, c
// Salida: x

Funcion expresion()
	Definir resultado Como Logico;
	Definir a Como Entero;
	Definir b Como Entero;
	definir c Como Entero;
	
	a <- 100;
	b <- 34;
	c <- 225;
	
	resultado <- a+b >= c;
	
	Escribir "El resultado es: ",resultado;
	
FinFuncion

Algoritmo Verdadero_Falso
	expresion()
FinAlgoritmo

