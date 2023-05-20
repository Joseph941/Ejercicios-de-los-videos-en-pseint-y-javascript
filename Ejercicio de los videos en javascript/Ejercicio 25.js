
// Realizar un algoritmo que dependiendo de la decada nos diga que tipo de boda tendremos.
// Variables: decada
// Salida: x
function expresion() {
	var decada = new Number();
	document.write("Digite una decada",'<BR/>');
	decada = Number(prompt());
	switch (decada) {
	case 10:
		document.write("Bodas de hojalata",'<BR/>');
		break;
	case 20:
		document.write("Bodas de porcelana",'<BR/>');
		break;
	case 30:
		document.write("Bodas de Bodas de perla",'<BR/>');
		break;
	case 40:
		document.write("Bodas de Rub�",'<BR/>');
		break;
	case 50:
		document.write("Bodas de oro",'<BR/>');
		break;
	case 60:
		document.write("Bodas de Diamante",'<BR/>');
		break;
	default:
		document.write("Decada no existente",'<BR/>');
	}
}

function aniversario() {
	expresion();
}

