
// Realizar un algoritmo que coste de un numero de hombres y mujeres, para luego sacar el % de hombres y mujeres, esto haciendo la operacion de NM/TE * 100.
// Variables: num_hombres, num_mujeres, total_estudiantes, procentaje_Hombres, porcentaje_Mujeres
// Salida: x
function expresion() {
	var num_hombres = new Number();
	var num_mujeres = new Number();
	var total_estudiantes = new Number();
	var porcentajeh = new Number();
	var porcentajem = new Number();
	document.write("Digite el numero de hombres: ",'<BR/>');
	num_hombres = Number(prompt());
	document.write("Digite el numero de mujeres: ",'<BR/>');
	num_mujeres = Number(prompt());
	total_estudiantes = num_hombres+num_mujeres;
	porcentajeh = num_hombres/total_estudiantes*100;
	porcentajem = num_mujeres/total_estudiantes*100;
	document.write("El porcentaje de Hombres es: ",porcentajeh,"%",'<BR/>');
	document.write("El porcentaje de Mujeres es: ",porcentajeh,"%",'<BR/>');
}

function porcentajehombres_porcentajemujeres() {
	expresion();
}

