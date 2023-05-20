
// Realizar un algoritmo que sume los numeros pares e impares, con bucle de "repetir".
// Variables: Sumapar, Cont, SumaImpar
// Salida: x
function expresion() {
	var sumapar = new Number();
	var cont = new Number();
	var sumaimpar = new Number();
	cont = 0;
	sumapar = 0;
	sumaimpar = 0;
	do {
		cont = cont+1;
		if (cont%2==0) {
			sumapar = sumapar+cont;
		} else {
			sumaimpar = sumaimpar+cont;
		}
	} while (cont!=50);
	document.write("La suma de los pares es: ",sumapar,'<BR/>');
	document.write("La suma de los impares es: ",sumaimpar,'<BR/>');
}

function sumapares_sumaimpares() {
	expresion();
}

