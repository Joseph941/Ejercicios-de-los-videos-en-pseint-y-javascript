
// Realizar un Algoritmo en el cual el programa sumara 2 numeros enteros.
// Variables: resultado, num1, num2
// Salida: x
function expresion() {
	var resultado = new Number();
	var num1 = new Number();
	var num2 = new Number();
	document.write("Digite un numero: ",'<BR/>');
	num1 = Number(prompt());
	document.write("Digite otro numero: ",'<BR/>');
	num2 = Number(prompt());
	resultado = num1+num2;
	document.write("El resultado es: ",resultado,'<BR/>');
}

function suma_de_enteros() {
	expresion();
}

