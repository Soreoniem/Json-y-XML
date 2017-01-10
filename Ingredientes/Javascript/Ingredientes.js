/*
	Descripción de la práctica
	• Escribir un JSon de ingredientes
		· chocolate: harina, azucar, mantequilla, cacao
*/
var header = document.querySelector("header");
var section = document.querySelector("section");

var requestURL = "../JSon/ingredientes.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = 'json';
request.send();


//-------------

request.onload = function() {
	var ingredientes = request.response;
	verIngredientes(ingredientes);
}

function verIngredientes(varJSon){
	alert("Prueba: "+ varJSon['squadName']);
}