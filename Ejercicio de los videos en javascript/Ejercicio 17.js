
// Realizar un algoritmo en el cual tendremos 3 notas respectivas a los parciales, la nota del examen final y la nota del trabajo final, y de todo esto, obtendremos un promedio final.
// Variables: Parcial1, Parcial2, Parcial3, PromedioP, NotasParcial, ExamenFinal, NotaExamen, NotaFinal, NotaTrabajo, NotaFinalTrabajo
// Salida: x
function expresion() {
	var parcial1 = new Number();
	var parcial2 = new Number();
	var parcial3 = new Number();
	var promediop = new Number();
	var notasparcial = new Number();
	var examenfinal = new Number();
	var notaexamen = new Number();
	var notatrabajo = new Number();
	var notafinaltrabajo = new Number();
	var notafinal = new Number();
	document.write("Digite las 3 notas de los parciales",'<BR/>');
	parcial1 = Number(prompt());
	parcial2 = Number(prompt());
	parcial3 = Number(prompt());
	promediop = (parcial1+parcial2+parcial3)/3;
	notasparcial = promediop*0.55;
	document.write("Digite la nota del examen final: ",'<BR/>');
	examenfinal = Number(prompt());
	notaexamen = examenfinal*0.3;
	document.write("Digite la nota del trabajo final: ",'<BR/>');
	notatrabajo = Number(prompt());
	notafinaltrabajo = notatrabajo*0.15;
	notafinal = notasparcial+notaexamen+notafinaltrabajo;
	document.write("La calificacion final es: ",notafinal,'<BR/>');
}

function examenes_y_notas() {
	expresion();
}

