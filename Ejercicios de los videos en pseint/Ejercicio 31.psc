// Realizar un algoritmo que sume los numeros pares e impares, con bucle de "repetir".
// Variables: Sumapar, Cont, SumaImpar
//Salida: x

Funcion expresion()
	Definir sumapar, cont, sumaimpar Como Entero
	cont= 0; sumapar=0; sumaimpar=0 
	Repetir
		cont=cont+1;
		Si cont mod 2 = 0 Entonces
			sumapar=sumapar+cont;
		Sino
			sumaimpar=sumaimpar+cont;
		FinSi
	Hasta Que cont=50
	Escribir "La suma de los pares es: ",sumapar;
	Escribir "La suma de los impares es: ",sumaimpar;
FinFuncion


Algoritmo SumaPares_SumaImpares
	expresion()
FinAlgoritmo
