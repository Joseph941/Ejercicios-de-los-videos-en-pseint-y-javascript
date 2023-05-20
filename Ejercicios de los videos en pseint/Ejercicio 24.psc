// Realizar un algoritmo que lea los 7 dias de la semana, y si se ingresa el numero 8, saldra un mensaje de error.
// Variables: num
//Salida: x

Funcion expresion()
	Definir num Como Entero;
	
	Escribir "Digite un numero del dia de la semana(1-7): ";
	leer num;
	
	Segun num Hacer
		1: Escribir "Lunes";
		2: Escribir "Martes";
		3: Escribir "Miercoles";
		4: Escribir "Jueves";
		5: Escribir "Viernes";
		6: Escribir "Sabado";
		7: Escribir "Domingo";
		De Otro Modo:
			Escribir  "Error, no existe dia para ese numero";
	FinSegun
FinFuncion


Algoritmo Dias_de_la_semana
	expresion()
FinAlgoritmo
