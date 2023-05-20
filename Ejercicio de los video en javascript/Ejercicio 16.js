
// Realizar un algoritmo en el cual si el valor que paguemos es mayor a precio*0.15, habra descuento, de otro modo, no habra descuento.
// Variables: precio, descuento, precio_final
// Salida: x
function expresion() {
	var precio = new Number();
	var descuento = new Number();
	var precio_final = new Number();
	document.write("Digite el precio a pagar: ",'<BR/>');
	precio = Number(prompt());
	descuento = precio*0.15;
	precio_final = precio-descuento;
	document.write("El precio a pagar es de: ",precio_final,'<BR/>');
}

function operacion_con_descuento() {
	expresion();
}

