// Realizar un algoritmo en el cual de digitando un numero, nos diga si es par o impar.
// Variables: num
//Salida: x

Funcion expresion()
	Definir num como entero;
	
	Escribir "Digite un numero: ";
	Leer num;
	
	Si num mod 2 = 0 Entonces
		Escribir "El numero  ",num," es par";
	SiNo
		Escribir "El numero ",num," es impar";
	FinSi
	
FinFuncion


Algoritmo Impar_o_Par
	expresion()
FinAlgoritmo
