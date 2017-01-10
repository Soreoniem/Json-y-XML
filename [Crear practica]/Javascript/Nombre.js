// aleatorio de 1 a 100 = ((0→99) +1)
	// var aleatorio = parseInt(Math.round(Math.random() * (100 - 1) + 1));

/*
	Descripción de la práctica
	• 
*/
function miFuncion(practica)
{
	alert("Javascript"
		+ "\nConectado con " + practica);
}

									/*
	        ╔════════════╗
	        ║   JQuery   ║
	┌────╦┐ ╠────────────╣ ┌╦────────┐
	│    ╚══╝            ╚══╝        │
	│   A partir de aquí es JQuery   │
	└────────────────────────────────┘	*/
$(document).ready(function(){
	$("#conectarJQuery")
		.text("Activado JQuery")
		.addClass("conectarCSS");
	
	var aleatorio;
	$("body").mousedown(function(){
		aleatorio = nuevoAleatorio(0, 10);
		$("#conectarJQuery")
			.html("Activado JQuery"
				+ ENTER +"y Metodos de ayuda["+ aleatorio +"]");
	});
});

function clickTabla2()
{ $("#tabla2").css('background-color', 'red'); }

/* Apuntes */
//%(this).attr("id"); /10 %10

/*
	$("boton1").click(function(){
		$etc...
	});
*/