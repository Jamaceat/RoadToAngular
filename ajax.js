$(document).ready(function () {
	// load permite hacer una peticion get
	$.get("https://reqres.in/api/users", { page: 1 }, function (response) {
		console.log(response);
		response.data.forEach((x) =>
			$(".datos").append(`<p>Correo de ${x.first_name} es : ${x.email}</p>`)
		);
	});
});
