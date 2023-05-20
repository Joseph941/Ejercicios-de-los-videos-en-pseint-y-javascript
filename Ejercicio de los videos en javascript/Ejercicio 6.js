
// Realizar un Algoritmo en el cual se usara el operador de funciones matematicas "azar", el cual tiene como funcion dar un valor completamente aleatorio.
// Variables: num, resultado
// Salida: x
function expresion() {
	var num = new Number();
	var resultado = new Number();
	document.write("Digite un numero: ",'<BR/>');
	num = Number(prompt());
	resultado = Math.floor(Math.random()*num);
	document.write("El resultado es: ",resultado,'<BR/>');
}

function azar_numero() {
	expresion();
}

