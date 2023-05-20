// Realizar un algoritmo en el cual si el valor que paguemos es mayor a precio*0.15, habrá descuento, de otro modo, no habra descuento.
// Variables: precio, descuento, precio_final
//Salida: x

Funcion expresion()
	Definir precio,descuento,precio_final Como Real;
	Escribir "Digite el precio a pagar: ";
	Leer precio;
	descuento <- precio*0.15;
	precio_final <- precio- descuento;
	Escribir "El precio a pagar es de: ",precio_final;
	
FinFuncion

Algoritmo Operacion_con_descuento
	expresion()
FinAlgoritmo
