// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$('#btn_listar').on('tap',function(){
		$.ajax({
			type: "POST",
			url: "http://192.168.1.195/proyecto_atlixco/buscar_todas.php",
			error: function(){
			 alert("no se puede conectar al servidor");	
			},
			success: function(respuesta)
			{
				alert(respuesta);
			}
		});
	});
}); 
});

