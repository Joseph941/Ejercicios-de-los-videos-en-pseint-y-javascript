
// Realizar un algoritmo en el cual vamos a multiplicar 2 digitos.
// Variables: num1, num2, resultado
// Salida: x
function expresion() {
	var num1 = new Number();
	var num2 = new Number();
	var resultado = new Number();
	document.write("Digite dos numeros: ",'<BR/>');
	num1 = Number(prompt());
	num2 = Number(prompt());
	if (num1==num2) {
		resultado = num1*num2;
	} else {
		if (num1>num2) {
			resultado = num1-num2;
		} else {
			resultado = num1+num2;
		}
	}
	document.write("El resultado es: ",resultado,'<BR/>');
}

function multiplicacion_de2_numeros() {
	expresion();
}

