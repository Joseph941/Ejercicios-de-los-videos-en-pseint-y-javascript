// Realizar un algoritmo que coste de un numero de hombres y mujeres, para luego sacar el % de hombres y mujeres, esto haciendo la operacion de NM/TE * 100.
// Variables: num_hombres, num_mujeres, total_estudiantes, procentaje_Hombres, porcentaje_Mujeres
// Salida: x

Funcion expresion()
	Definir num_hombres, num_mujeres como enteros;
	Definir total_estudiantes Como Entero;
	Definir porcentajeH, porcentajeM como reales;
	Escribir "Digite el numero de hombres: ";
	leer num_hombres;
	Escribir "Digite el numero de mujeres: ";
	leer num_mujeres;
	
	total_estudiantes <- num_hombres+num_mujeres;
	porcentajeH <- num_hombres / total_estudiantes * 100;
	porcentajeM <- num_mujeres / total_estudiantes * 100;
	Escribir "El porcentaje de Hombres es: ",porcentajeH, "%";
	Escribir "El porcentaje de Mujeres es: ",porcentajeH, "%";
	
FinFuncion


Algoritmo PorcentajeHombres_PorcentajeMujeres
	expresion()
FinAlgoritmo
