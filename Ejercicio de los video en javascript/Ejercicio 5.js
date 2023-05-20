
// Realizar un Algoritmo en el cual se usara el operador de funciones matematicas "abs", el cual tiene como funcion (valor absoluto), devolver el valor.
// Variables: num, resultado
// Salida: x
function expresion() {
	var num = new Number();
	var resultado = new Number();
	document.write("Digite un numero: ",'<BR/>');
	num = Number(prompt());
	resultado = Math.abs(num);
	document.write("El resultado es: ",resultado,'<BR/>');
}

function abs_valor_absoluto() {
	expresion();
}

