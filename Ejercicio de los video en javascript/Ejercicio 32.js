
// Realizar un algoritmo que digitando una calificacion nos de un promedio final.
// Variables: Calificacion_Promedio, Calificacion_Baja Calificacion, Suma, i
// Salida: x
function expresion() {
	var calificacion_promedio = new Number();
	var calificacion_baja = new Number();
	var calificacion = new Number();
	var suma = new Number();
	var i = new Number();
	suma = 0;
	calificacion_baja = 2222;
	for (i=1;i<=10;i++) {
		document.write(i,". Digite una calificacion: ",'<BR/>');
		calificacion = Number(prompt());
		suma = suma+calificacion;
		if (calificacion<calificacion_baja) {
			calificacion_baja = calificacion;
		}
	}
	calificacion_promedio = suma/10;
}

function calificacion_y_promedio() {
	expresion();
}

