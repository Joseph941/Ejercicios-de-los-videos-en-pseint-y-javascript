// Realizar un algoritmo que nos ayude con la operacion del valor de kilos de manzanas y dependiendo de los kilos, habrá o no descuento.
// Variables: PrecioI, PrecioK, Kilos, Descuento, Precio_Final
//Salida: x

Funcion expresion()
	Definir precioK, Kilos, precioI como reales
	Definir descuento, precio_final como reales
	Escribir "Cuanto cuesta el kilo de manzanas? "
	Leer precioK
	Escribir "Cuantos kilos de manzana a comprado? "
	Leer kilos
	precioI <- precioK * kilos  
	Si kilos>=0 y kilos<=2 Entonces
		descuento <- 0
	SiNo
		Si kilos>=2.01 y kilos <=5 Entonces
			descuento <- precioI * 0.1
		SiNo
			Si kilos>=5.01 y kilos <=10 Entonces
				descuento <- precioI * 0.15
			SiNo
				descuento <- precioI * 0.2
			FinSi
		FinSi
		precio_final <- precioI - descuento
		Escribir "El precio a pagar es: $",precio_final
	FinSi
FinFuncion


Algoritmo Kilos_Precio
	expresion()
FinAlgoritmo
