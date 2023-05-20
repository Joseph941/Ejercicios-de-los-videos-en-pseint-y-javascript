
// Realizar un algoritmo en el cual de una serie de numeros, nos imprima el numero mayor, el numero menor, y nos diga si el numero digitado es igual.
// Variables: adc1, adc2, adc3
// Salida: x
function expresion() {
	var adc3 = new Number();
	var adc2 = new Number();
	var adc1 = new Number();
	document.write("Ingresa el primer numero",'<BR/>');
	adc3 = Number(prompt());
	document.write("Ingresa el segundo numero",'<BR/>');
	adc2 = Number(prompt());
	document.write("Ingresa el tercer numero",'<BR/>');
	adc1 = Number(prompt());
	if ((adc3>adc2 && adc3>adc1)) {
		document.write("El numero mayor es:",adc3,'<BR/>');
	} else {
		if ((adc2>adc3 && adc2>adc1)) {
			document.write("El numero mayor es:",adc2,'<BR/>');
		} else {
			if ((adc3>adc1 && adc1>adc2)) {
				document.write("El numero mayor es:",adc1,'<BR/>');
			} else {
				document.write("los numeros son iguales",'<BR/>');
			}
		}
	}
}

function mayor_menor_igual() {
	expresion();
}

