
// Realizar un Algoritmo en el cual el programa resuelva el area de un circulo, y nos de la longitud del mismo, area = pi(3.1415) * radio^2, y longitud = 2 * radio.
// Variales: radio, lon, area
// Salida: x
function expresion() {
	var pi;
	var radio = new Number();
	var area = new Number();
	var lon = new Number();
	document.write("Digite el valor del radio: ",'<BR/>');
	radio = Number(prompt());
	area = Math.PI*Math.pow(radio,2);
	lon = 2*radio;
	document.write("El area de la circunferencia es: ",area,'<BR/>');
	document.write("La longitud es: ",lon,'<BR/>');
}

function area_de_un_circulo() {
	expresion();
}

