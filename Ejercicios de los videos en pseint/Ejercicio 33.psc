// Realizar un algoritmo que obtenga el factorial de un numero.
// Variables: num, factorial, p
//Salida: x

Funcion expresion()
	Definir num,factorial,p Como Real

	Escribir 'Ingresa un número'
	Leer numero

	Si numero<0 Entonces
		Escribir 'El numero ',num,' no se puede calcular'
	SiNo
		p <- 1
		factorial <- 1
		Mientras p<=numero Hacer
			factorial <- factorial*p
			p <- p+1
		FinMientras
		Escribir 'El factorial del número ',numero,' = ',factorial
	FinSi
FinFuncion


Algoritmo Factorial_de_un_numero
	expresion()
FinAlgoritmo
