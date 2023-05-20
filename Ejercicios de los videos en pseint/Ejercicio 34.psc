// Realizar Algoritmo que de 10 numeros resuelva la suma total.
// Variables: suma, num, cont
//Salida: x

Funcion expresion()
	definir suma, num, cont como enteros
	
	suma <- 0
	cont <- 0
	
	Escribir "-Ingresar 10 numeros-"
	mientras cont < 10 hacer
		escribir "Ingrese un número:"
		leer num
		suma <- suma + num
		cont <- cont + 1
	FinMientras
	
	Escribir "La suma total es: ", suma
FinFuncion


Algoritmo Suma_de_10Numeros
	expresion()
FinAlgoritmo

