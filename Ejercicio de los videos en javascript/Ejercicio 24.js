
// Realizar un algoritmo que lea los 7 dias de la semana, y si se ingresa el numero 8, saldra un mensaje de error.
// Variables: num
// Salida: x
function expresion() {
	var num = new Number();
	document.write("Digite un numero del dia de la semana(1-7): ",'<BR/>');
	num = Number(prompt());
	switch (num) {
	case 1:
		document.write("Lunes",'<BR/>');
		break;
	case 2:
		document.write("Martes",'<BR/>');
		break;
	case 3:
		document.write("Miercoles",'<BR/>');
		break;
	case 4:
		document.write("Jueves",'<BR/>');
		break;
	case 5:
		document.write("Viernes",'<BR/>');
		break;
	case 6:
		document.write("Sabado",'<BR/>');
		break;
	case 7:
		document.write("Domingo",'<BR/>');
		break;
	default:
		document.write("Error, no existe dia para ese numero",'<BR/>');
	}
}

function dias_de_la_semana() {
	expresion();
}

