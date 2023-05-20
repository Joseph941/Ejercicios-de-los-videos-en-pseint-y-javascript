
// Realizar un algoritmo modo MENU, en el cual ingresando en el primer apartado realize la operacion de elevar un numero a una potencia dada por el usuario, al ingresar al apartado 2 sacar la raiz cuadrada de un numero (rc) y al ingresar al apartado 3 solo saldra del menu.
// Variables: Opcion
// Salida: x
function expresion() {
	var opcion = new Number();
	document.write("MENU",'<BR/>');
	document.write("1. Elevar un numero a una potencia x",'<BR/>');
	document.write("2. Sacar la raiz cuadrada de un numero",'<BR/>');
	document.write("3. Salir",'<BR/>');
	document.write("Digite una opcion:",'<BR/>');
	opcion = Number(prompt());
	switch (opcion) {
	case 1:
		var num = new Number();
		var pot = new Number();
		var resultado = new Number();
		document.write("Digite un numero: ",'<BR/>');
		num = Number(prompt());
		document.write("Digite la potencia",'<BR/>');
		pot = Number(prompt());
		resultado = Math.pow(num,pot);
		document.write("El resultado es: ",resultado,'<BR/>');
		break;
	case 2:
		var num = new Number();
		var resultado = new Number();
		document.write("Digite un numero: ",'<BR/>');
		num = Number(prompt());
		resultado = Math.sqrt(num);
		document.write("El resultado es: ",resultado,'<BR/>');
		break;
	case 3:
		break;
	default:
		document.write("Se equivoco de opcion de menu",'<BR/>');
	}
}

function men�_programa() {
	expresion();
}

