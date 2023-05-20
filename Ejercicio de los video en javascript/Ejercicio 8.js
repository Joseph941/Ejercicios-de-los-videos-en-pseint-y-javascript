
// Realizar un Algoritmo en donde el programa resulva un ejercicio mediante formula general.
// Variables: resultado, a, b
// Salida: x
function expresion() {
	var a = new Number();
	var b = new Number();
	var resultado = new Boolean();
	document.write("Digite el valor de A: ",'<BR/>');
	a = Number(prompt());
	document.write("Digite el valor de B: ",'<BR/>');
	b = Number(prompt());
	resultado = ((3+5*8)<3 && ((-6/3*4)+2<2)) || (a>b);
	document.write("El resultado es: ",resultado,'<BR/>');
}

function formula_general_ejercicio2() {
	expresion();
}

