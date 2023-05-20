// Realizar un Algoritmo en donde se realize la operacion de horas_seg <- horas * 3600,y al final escribir los segundos equivalentes a la operación.
// Variables: horas, minutos, segundos, horas_seg, minutos_seg
// Salida: x

Funcion expresion()
	Definir horas,minutos,seg como enteros;
	Definir horas_seg, minutos_seg como enteros;
	
	Escribir "Digite las horas: ";
	leer horas;
	Escribir "Digite los minutos: ";
	leer minutos;
	Escribir "Digite los segundos: ";
	leer seg;
	
	horas_seg <- horas * 3600;
	minutos_seg <- + minutos_seg + seg;
	
	total_seg <- horas_seg + minutos_seg + seg;
	
	Escribir "Los segundos equivalentes son: ",total_Seg;
	

FinFuncion

Algoritmo Operacion_de_horas_min_seg
	expresion()
FinAlgoritmo

