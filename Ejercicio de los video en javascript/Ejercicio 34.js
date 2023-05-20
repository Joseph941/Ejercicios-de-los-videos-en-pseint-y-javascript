
// Realizar Algoritmo que de 10 numeros resuelva la suma total.
// Variables: suma, num, cont
// Salida: x
function expresion() {
	var suma = new Number();
	var num = new Number();
	var cont = new Number();
	suma = 0;
	cont = 0;
	document.write("-Ingresar 10 numeros-",'<BR/>');
	while (cont<10) {
		document.write("Ingrese un n�mero:",'<BR/>');
		num = Number(prompt());
		suma = suma+num;
		cont = cont+1;
	}
	document.write("La suma total es: ",suma,'<BR/>');
}

function suma_de_10numeros() {
	expresion();
}

