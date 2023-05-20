
// Realizar Algoritmo que de un arreglo sume los numeros impares, sume los numeros pares, haga una suma total, y saque el promedio de los numeros impares.
// Variables: p
// Salida: x
function expresion() {
	var i, suma, sumaimp, sumapar;
	var p = new Number();
	i = 1;
	sumapar = 0;
	sumaimp = 0;
	document.write("Ingrese los siguientes numeros: ",'<BR/>');
	while (i<=10) {
		p = Number(prompt());
		suma = suma+p;
		if (p%2==0) {
			sumapar = sumapar+p;
		} else {
			sumaimp = sumaimp+p;
		}
		i = i+1;
	}
	document.write("La suma de los impares",", sumaimp",'<BR/>');
	document.write("La suma de los pares",", sumapar",'<BR/>');
	document.write("La suma total es",", suma",'<BR/>');
	document.write("El promedio de los numeros impares es",", suma/10",'<BR/>');
}

function sumaimpares_sumapares_sumatotal() {
	expresion();
}

