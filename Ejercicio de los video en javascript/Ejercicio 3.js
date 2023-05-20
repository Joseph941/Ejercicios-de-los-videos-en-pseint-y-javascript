
// Realizar un Algoritmo en el cual asignando 3 valores por el usuario a las variables a, b y c, el programa se encargara de resolver si a+b(100+34) es mayor o igual a c(225).
// Variables: resultado, a, b, c
// Salida: x
function expresion() {
	var resultado = new Boolean();
	var a = new Number();
	var b = new Number();
	var c = new Number();
	a = 100;
	b = 34;
	c = 225;
	resultado = a+b>=c;
	document.write("El resultado es: ",resultado,'<BR/>');
}

function verdadero_falso() {
	expresion();
}

