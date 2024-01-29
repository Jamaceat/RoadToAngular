let data = localStorage.getItem("usuarios");
let box_dashed = document.querySelector(".dashed");
let formulario = document.querySelector("#formulario");
let deleteStorageButton = document.querySelector("#deleteLocal");

const LOCAL_STORAGE_KEY = "usuarios";

let datos = getLocalStorage();

if (datos) {
	datos.forEach((usuario) => {
		addToTable(usuario);
	});
	box_dashed.style.display = "block";
}

deleteStorageButton.addEventListener("click", (event) => {
	Array.from(box_dashed.querySelectorAll("div.item")).forEach((x) => {
		x.remove();
	});
	deleteLocalStorage();
});

formulario.addEventListener("submit", (event) => {
	event.preventDefault();
	let nombre = formulario.querySelector("#nombre").value;
	let apellido = formulario.querySelector("#apellido").value;
	let edad = formulario.querySelector("#edad").value;

	let usuario = { nombre, apellido, edad };
	persist(usuario);
});

box_dashed.style.display = "block";

// function addUser() {
// 	let row = createRow();
// 	let contenedor = document.querySelector(".dashed");
// 	contenedor.insertAdjacentHTML("beforeend", row);
// }

function persist(usuario) {
	if (datos) setLocalStorage([...datos, usuario]);
	else setLocalStorage([usuario]);
	addToTable(usuario);
}

function addToTable(usuario) {
	box_dashed.insertAdjacentHTML("beforeend", createRow(usuario));
}

function createRow(x) {
	return `<div class="item">
	<p id="nombre">Nombre: <span>${x.nombre}</span></p>
	<p id="apellido">Apellido: <span>${x.apellido}</span></p>
	<p id="edad">Edad: <span>${x.edad}</span></p>
	<hr/></div>`;
}

function getLocalStorage() {
	return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)); // Consigue el json de los datos guardados en el local storage
}

function setLocalStorage(usuarios) {
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(usuarios));
}

function deleteLocalStorage() {
	localStorage.clear();
}
