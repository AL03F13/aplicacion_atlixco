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
				var datos_t = JSON.parse(respuesta);
				$('#contenido').empty();
				
				$(':mobile-pagecontainer').pagecontainer('change', '#lista_tradiciones',{
					transition: 'pop'
				});
				
				for (var $x=0; $x<datos_t.tradiciones.length;$x++)
				{
				 	$('#contenido').append('<div align="center"><div><h4>'+ datos_t.tradiciones[$x].nombre +'</h4></div><div><h4>'+ datos_t.tradiciones[$x].fecha +'</h4></div><div><h4>'+ datos_t.tradiciones[$x].ubicacion +'</h4></div><div><h4>'+ datos_t.tradiciones[$x].descripcion +'</h4></div><div><img src="http://192.168.1.195/proyecto_atlixco/recursos/imagenes/fotos/'+ datos_t.tradiciones[$x].id_evento +'.jpg"></div></div>');
				}
				
				
			    
			}
		});
	});
}); 
});

