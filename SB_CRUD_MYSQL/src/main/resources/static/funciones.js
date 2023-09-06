function eliminar(id){
	swal({
		title: "estas seguro?",
		text: "Una vez eliminado sera para siempre",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	})
	.then((OK)=>{
		if(OK){
			$.ajax({
				url:"/eliminar/"+id,
				success: function(res){
					console.log(res)
				}
			});
			swal("eliminado",{
				icon: "success",
			}).then((ok)=>{
				if(ok){
					location.href="/listar";
				}
			});
			
		}else{
			swal("Borrado cancelado");
		}
	});
}