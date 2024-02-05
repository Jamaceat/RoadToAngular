$(document).ready(function () {
	// load permite hacer una peticion get
	$.get("https://reqres.in/api/users", { page: 1 }, function (response) {
		console.log(response);
		response.data.forEach((x) =>
			$(".datos").append(`<p>Correo de ${x.first_name} es : ${x.email}</p>`)
		);
	});

	$("#personaForm").submit(function (e) {
		e.preventDefault();
		let usuario = {
			lengthKey: +$('input[name="name"]').val(),
			nameApplication: $('input[name="job"]').val(),
		};

		console.log(usuario);
		// $.post(
		// 	$(this).attr("action"),
		// 	JSON.stringify(usuario),
		// 	function (response) {
		// 		console.log(response);
		// 	}
		// );
		$.ajaxSetup({
			crossDomain: false,
			xhrFields: {
				withCredentials: false,
			},
		});

		$.ajax({
			type: "POST",
			crossDomain: false,
			xhrFields: {
				withCredentials: false, // Evitar el envío de credenciales
			},
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			url: $(this).attr("action"),
			data: JSON.stringify(usuario),
			beforeSend: function (xhr) {
				console.log("enviando al usuario");
				// xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
				// xhr.setRequestHeader("Origin", "localhost");
				// xhr.withCredentials = true;
			},
			success: function (response) {
				console.log("exito");
				console.log(response);
			},
			error: function (error, bla, otro) {
				console.log(error, bla, otro);
			},
		});
	});
});
