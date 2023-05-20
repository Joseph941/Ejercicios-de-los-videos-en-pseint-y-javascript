
// Realizar un algoritmo en el cual, en una compra si excedemos el valor de $100 se nos hara un descuento, de otro modo, si es menor a $100, no habra descuento.
// Variables: descuento, precio_final, compra
// Salida: x
function expresion() {
	var compra = new Number();
	var descuento = new Number();
	var precio_final = new Number();
	document.write("Digite la cantidad a pagar: ",'<BR/>');
	compra = Number(prompt());
	if (compra>100) {
		descuento = compra*0.2;
	} else {
		descuento = 0;
	}
	precio_final = compra-descuento;
	document.write("El precio a pagar es: ",precio_final,'<BR/>');
}

function precio_total() {
	expresion();
}

