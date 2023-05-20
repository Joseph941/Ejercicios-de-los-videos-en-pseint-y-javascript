// Realizar un algoritmo en el cual vamos a multiplicar 2 digitos.
// Variables: num1, num2, resultado
//Salida: x

Funcion expresion()
	Definir num1,num2,resultado como reales;
	
	Escribir "Digite dos numeros: ";
	leer num1, num2;
	
	Si num1=num2 Entonces
		resultado <- num1 * num2;
	SiNo
		Si num1>num2 Entonces
			resultado <- num1 - num2;
		SiNo
			resultado <- num1 + num2;
			
		FinSi
	FinSi
	
	Escribir "El resultado es: ",resultado;
	
FinFuncion


Algoritmo Multiplicacion_de2_numeros
	expresion()
FinAlgoritmo
