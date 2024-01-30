$(document).ready(function () {
	console.log("Estamos listos");

	let rojo = $(".rojo").css("background", "red");
	rojo = $(".rojo").css("padding", "2rem");
	let dashed = $(".dashed");
	dashed.css("border", "1px black dashed");
	dashed.css("margin", "1rem");

	let parrafos = $("p");
	parrafos.css("cursor", "pointer");

	parrafos.click(function () {
		console.log($(this));
		let self = $(this);
		if (!self.hasClass("grande")) {
			console.log("haciendo grande");
			self.addClass("grande");
		} else {
			console.log("deshaciendo grande");
			self.removeClass("grande");
		}
	});

	$("p,li").addClass("azul");
});
