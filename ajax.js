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
			name: $('input[name="name"]').val(),
			job: $('input[name="job"]').val(),
		};

		console.log(usuario);
		$.post($(this).attr("action"), usuario, function (response) {
			console.log(response);
		});
	});
});
