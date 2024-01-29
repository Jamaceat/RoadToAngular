let formulario = document.querySelector("#formulario");
let box_dashed = document.querySelector(".dashed");

box_dashed.style.display = "none";

formulario.addEventListener("submit", (evt) => {
	evt.preventDefault();
	console.log("Evento submit enviado");

	let nombre = document.querySelector("#nombre").value;
	let apellido = document.querySelector("#apellido").value;
	let edad = document.querySelector("#edad").value;
	console.log(nombre, edad, apellido);

	let info = [nombre, apellido, edad];

	let show_info = Array.from(document.querySelectorAll(".dashed p span"));

	show_info.forEach((x, i) => {
		x.textContent = info[i];
	});

	// info.forEach((x) => {
	// 	let p = document.createElement("p");
	// 	p.append(x);
	// 	box_dashed.append(p);
	// });
	box_dashed.style.display = "block";
});
