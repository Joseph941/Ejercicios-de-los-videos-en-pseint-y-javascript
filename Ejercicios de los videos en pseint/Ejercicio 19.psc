// Realizar un algoritmo en el cual digitando 3 calificaciones obtengamos un promedio total, y si es mayor a 7 o 70, se mostrará un mensaje de aprobado, y si es menor a 70 o 7, sera reprobado.
// Variables: nota1, nota2, nota3, promedio
//Salida: x

Funcion expresion()
	Definir nota1,nota2,nota3 como reales;
	Definir promedio como real;
	Escribir "Digite las 3 calificaciones: ";
	Leer nota1,nota2,nota3;
	
	Si promedio>=70 Entonces
		Escribir "El alumno esta aprobado con: ",promedio;
	SiNo
		Escribir "El alumno esta reprobado: con ",promedio;
	FinSi
	promedio <- (nota1+nota2+nota3)/3;
FinFuncion


Algoritmo Notas_de_Aprobado_Reprobado
	expresion()
FinAlgoritmo
