
// Realizar un algoritmo en el cual tendremos 3 cuestionarios, esto realizara una operacion de cada cuestionario, sera, tiempoA <- cantidadA multiplicado por 5, en el B multiplicado por 8, y en el C multiplicado por 6, y al final escribir cuantas horas y minutos se tardara.
// Variables: TiempoA, TiempoB, TiempoC, CantidadA, CantidadB, CantidadC, Tiempo_Total, horas, minutos
// Salida: x
function expresion() {
	var cantidada = new Number();
	var cantidadb = new Number();
	var cantidadc = new Number();
	var tiempoa = new Number();
	var tiempob = new Number();
	var tiempoc = new Number();
	var tiempo_total = new Number();
	var horas = new Number();
	var minutos = new Number();
	document.write("Digite la cantidad de cuestionarios A: ",'<BR/>');
	cantidada = Number(prompt());
	document.write("Digite la cantidad de cuestionarios B: ",'<BR/>');
	cantidadb = Number(prompt());
	document.write("Digite la cantidad de cuestionarios C: ",'<BR/>');
	cantidadc = Number(prompt());
	tiempoa = cantidada*5;
	tiempoa = cantidada*8;
	tiempoa = cantidada*6;
	tiempo_total = tiempoa+tiempob+tiempoc;
	horas = tiempo_total/60;
	minutos = tiempo_total%60;
	document.write("Se tardara ",horas," horas y ",minutos," minutos",'<BR/>');
}

function cuestionarios() {
	expresion();
}

