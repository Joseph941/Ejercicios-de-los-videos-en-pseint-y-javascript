// Realizar un algoritmo en el cual, en una compra si excedemos el valor de $100 se nos hará un descuento, de otro modo, si es menor a $100, no habrá descuento.
// Variables: descuento, precio_final, compra
//Salida: x

Funcion expresion()
	Definir compra como real;
	Definir descuento, precio_final como real;
	Escribir "Digite la cantidad a pagar: ";
	Leer compra;
	Si compra>100 Entonces
		descuento <- compra * 0.2;
	SiNo
		descuento <- 0;
	FinSi
	precio_final <- compra - descuento ;
	Escribir "El precio a pagar es: " ,precio_final;
FinFuncion


Algoritmo Precio_total
	expresion()
FinAlgoritmo
