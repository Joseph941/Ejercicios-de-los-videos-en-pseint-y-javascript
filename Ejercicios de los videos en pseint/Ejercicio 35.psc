// Realizar Algoritmo que de un arreglo sume los numeros impares, sume los numeros pares, haga una suma total, y saque el promedio de los numeros impares.
// Variables: p
//Salida: x

Funcion expresion()
	Definir p como entero;
	i=1; sumapar=0; sumaimp=0;
	Escribir "Ingrese los siguientes numeros: ";
	Mientras i <=10 Hacer
		leer p;
		suma=suma+p;
		si p mod 2=0 Entonces
			sumapar <- sumapar+p;
		SiNo
			sumaimp <- sumaimp+p;
			
		FinSi
		i=i+1;
	FinMientras
	
	Escribir "La suma de los impares" ", sumaimp"
	Escribir "La suma de los pares" ", sumapar"
	Escribir "La suma total es" ", suma"
	
	Mostrar "El promedio de los numeros impares es" ", suma/10"
	
FinFuncion


Algoritmo SumaImpares_sumaPares_SumaTotal
	expresion()
FinAlgoritmo
