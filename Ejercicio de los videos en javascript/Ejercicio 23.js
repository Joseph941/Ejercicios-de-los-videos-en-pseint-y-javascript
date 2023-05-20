
// Realizar un algoritmo que nos ayude con la operacion del valor de kilos de manzanas y dependiendo de los kilos, habra o no descuento.
// Variables: PrecioI, PrecioK, Kilos, Descuento, Precio_Final
// Salida: x
function expresion() {
	var preciok = new Number();
	var kilos = new Number();
	var precioi = new Number();
	var descuento = new Number();
	var precio_final = new Number();
	document.write("Cuanto cuesta el kilo de manzanas? ",'<BR/>');
	preciok = Number(prompt());
	document.write("Cuantos kilos de manzana a comprado? ",'<BR/>');
	kilos = Number(prompt());
	precioi = preciok*kilos;
	if (kilos>=0 && kilos<=2) {
		descuento = 0;
	} else {
		if (kilos>=2.01 && kilos<=5) {
			descuento = precioi*0.1;
		} else {
			if (kilos>=5.01 && kilos<=10) {
				descuento = precioi*0.15;
			} else {
				descuento = precioi*0.2;
			}
		}
		precio_final = precioi-descuento;
		document.write("El precio a pagar es: $",precio_final,'<BR/>');
	}
}

function kilos_precio() {
	expresion();
}

