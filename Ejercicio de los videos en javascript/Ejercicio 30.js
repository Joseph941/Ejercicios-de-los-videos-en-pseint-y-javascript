
// Realizar un algoritmo que el usuario pueda dar una cantidad de numeros a sumarse.
// Variables: N, suma, i
// Salida: x
function expresion() {
	var n = new Number();
	var suma = new Number();
	var i = new Number();
	document.write("Digite la cantidad de numeros a sumarse: ",'<BR/>');
	n = Number(prompt());
	suma = 0;
	for (i=1;i<=n;i++) {
		suma = suma+i;
	}
	document.write("La suma es: ",suma,'<BR/>');
}

function suma_numeros() {
	expresion();
}

