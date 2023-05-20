
// Realizar un Algoritmo en el cual se usara el operador aux, este tiene como funcion, que cuando el usuario digite 2 valores correspondientes a cada variable, los intercambiara.
// Variables: a, b, aux
// Salida: x
function expresion() {
	var a = new Number();
	var b = new Number();
	var aux = new Number();
	document.write("Digite el valor de a; ",'<BR/>');
	a = Number(prompt());
	document.write("Digite el valor de b: ",'<BR/>');
	b = Number(prompt());
	aux = a;
	a = b;
	b = aux;
	document.write("El nuevo valor de a es: ",a,'<BR/>');
	document.write("El nuevo valor de b es: ",b,'<BR/>');
}

function auxiliar() {
	expresion();
}

