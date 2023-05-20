// Realizar un algoritmo modo MENÚ, en el cual ingresando en el primer apartado realize la operacion de elevar un numero a una potencia dada por el usuario, al ingresar al apartado 2 sacar la raiz cuadrada de un numero (rc) y al ingresar al apartado 3 solo saldrá del menú.
// Variables: Opcion
//Salida: x

Funcion expresion()
	Definir opcion como entero
	Escribir "MENU"
	Escribir "1. Elevar un numero a una potencia x"
	Escribir "2. Sacar la raiz cuadrada de un numero"
	Escribir "3. Salir"
	Escribir "Digite una opcion:"
	Leer opcion
	Segun opcion Hacer
		1:
			Definir num, pot, resultado como reales
			Escribir "Digite un numero: "
			Leer num
			Escribir "Digite la potencia"
			Leer pot
			resultado <- num^pot
			Escribir "El resultado es: ",resultado
		2:
			Definir num, resultado como reales
			Escribir "Digite un numero: "
			Leer num
			resultado <- rc(num)
			Escribir "El resultado es: ",resultado
		3:
		De Otro Modo:
			Escribir "Se equivoco de opcion de menu"
	FinSegun
FinFuncion


Algoritmo Menú_programa
	expresion()
FinAlgoritmo

