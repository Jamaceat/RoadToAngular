// // console.log("Hola");

// // let caja = document.querySelector("#micaja");

// // caja.style.background = "red";
// // caja.style.padding = "20px";
// // caja.style.color = "white";

// // function cambiarColor(color) {
// // 	caja.style.background = color;
// // }
// // --------------------------------------------------

// let divs = document.getElementsByTagName("div");

// console.log(typeof divs);
// console.log(divs);
// console.log(Array.from(divs));
// divs = Array.from(divs);
// divs.forEach((element) => {
// 	element.style.background = "blue";
// });

// divs[4].querySelector("div").style.background = "green";

// let boton = document.querySelector("#boton");
// boton.addEventListener("click", () => cambiarColor());

// function cambiarColor(event) {
// 	console.log("click");
// 	let btStyle = boton.style.background;
// 	if (btStyle == "green") {
// 		boton.style.background = "red";
// 	} else {
// 		boton.style.background = "green";
// 	}
// }

let areaPrueba = document.querySelectorAll("#areaPrueba2")[0];
console.log(areaPrueba);

areaPrueba.addEventListener("keydown", (event) => {
	console.log("pulsando tecla", String.fromCharCode(event.keyCode));
});

// window.addEventListener
let encabezado = document.querySelector("h1");
encabezado.style.fontSize = "50px";
let tiempo = setInterval(() => {
	console.log("set interval ejecutado");

	if (encabezado.style.fontSize == "50px") {
		encabezado.style.fontSize = "100px";
	} else {
		encabezado.style.fontSize = "50px";
	}
}, 1000);

let stopper = document.querySelector("#stopButton");
console.log(stopper);
stopper.addEventListener("click", () => {
	console.log("paró");
	clearInterval(tiempo);
});
