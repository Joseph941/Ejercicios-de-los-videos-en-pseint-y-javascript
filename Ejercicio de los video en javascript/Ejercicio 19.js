
// Realizar un algoritmo en el cual digitando 3 calificaciones obtengamos un promedio total, y si es mayor a 7 o 70, se mostrara un mensaje de aprobado, y si es menor a 70 o 7, sera reprobado.
// Variables: nota1, nota2, nota3, promedio
// Salida: x
function expresion() {
	var nota1 = new Number();
	var nota2 = new Number();
	var nota3 = new Number();
	var promedio = new Number();
	document.write("Digite las 3 calificaciones: ",'<BR/>');
	nota1 = Number(prompt());
	nota2 = Number(prompt());
	nota3 = Number(prompt());
	if (promedio>=70) {
		document.write("El alumno esta aprobado con: ",promedio,'<BR/>');
	} else {
		document.write("El alumno esta reprobado: con ",promedio,'<BR/>');
	}
	promedio = (nota1+nota2+nota3)/3;
}

function notas_de_aprobado_reprobado() {
	expresion();
}

