
// Realizar un algoritmo que obtenga el factorial de un numero.
// Variables: num, factorial, p
// Salida: x
function expresion() {
	var numero;
	var num = new Number();
	var factorial = new Number();
	var p = new Number();
	document.write("Ingresa un numero",'<BR/>');
	numero = prompt();
	if (numero<0) {
		document.write("El numero ",num," no se puede calcular",'<BR/>');
	} else {
		p = 1;
		factorial = 1;
		while (p<=numero) {
			factorial = factorial*p;
			p = p+1;
		}
		document.write("El factorial del numero ",numero," = ",factorial,'<BR/>');
	}
}

function factorial_de_un_numero() {
	expresion();
}

