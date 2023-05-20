
// Realizar un Algoritmo en donde se realize la operacion de horas_seg <- horas * 3600,y al final escribir los segundos equivalentes a la operacion.
// Variables: horas, minutos, segundos, horas_seg, minutos_seg
// Salida: x
function expresion() {
	var total_seg;
	var horas = new Number();
	var minutos = new Number();
	var seg = new Number();
	var horas_seg = new Number();
	var minutos_seg = new Number();
	document.write("Digite las horas: ",'<BR/>');
	horas = Number(prompt());
	document.write("Digite los minutos: ",'<BR/>');
	minutos = Number(prompt());
	document.write("Digite los segundos: ",'<BR/>');
	seg = Number(prompt());
	horas_seg = horas*3600;
	minutos_seg = +minutos_seg+seg;
	total_seg = horas_seg+minutos_seg+seg;
	document.write("Los segundos equivalentes son: ",total_seg,'<BR/>');
}

function operacion_de_horas_min_seg() {
	expresion();
}

