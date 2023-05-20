
// Realizar un algoritmo en el cual de digitando un numero, nos diga si es par o impar.
// Variables: num
// Salida: x
function expresion() {
	var num = new Number();
	document.write("Digite un numero: ",'<BR/>');
	num = Number(prompt());
	if (num%2==0) {
		document.write("El numero  ",num," es par",'<BR/>');
	} else {
		document.write("El numero ",num," es impar",'<BR/>');
	}
}

function impar_o_par() {
	expresion();
}

