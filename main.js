$(document).ready(function () {
	// Codigo aqui

	login();

	console.log(window.location.href.indexOf("index"));
	console.log(window.location.href.indexOf("About"));

	if (window.location.href.indexOf("index") > -1) {
		$(".bxslider").bxSlider({
			mode: "fade",
			captions: true,
			slideWidth: 1200,
		});

		let articles = [
			{
				title: "Prueba de titulo 1 ",
				date: `${moment().format("dddd")} / ${moment().format(
					"DD"
				)} ${moment().format("MMMM")} de ${moment().format("YYYY")}`,
				content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Quisquam velit, voluptas tempore vel cupiditate saepe
		recusandae. Porro facere dolor molestiae, at veritatis totam id
		est nam aspernatur sint asperiores animi nihil doloribus.
		Reiciendis, ullam deleniti eum ratione aut voluptatum natus odit
		perferendis minus repellat facilis consequatur dolorem harum
		explicabo exercitationem?`,
			},
			{
				title: "Prueba de titulo 2 ",
				date: `${moment().format("dddd")} / ${moment().format(
					"DD"
				)} ${moment().format("MMMM")} de ${moment().format("YYYY")}`,
				content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Quisquam velit, voluptas tempore vel cupiditate saepe
		recusandae. Porro facere dolor molestiae, at veritatis totam id
		est nam aspernatur sint asperiores animi nihil doloribus.
		Reiciendis, ullam deleniti eum ratione aut voluptatum natus odit
		perferendis minus repellat facilis consequatur dolorem harum
		explicabo exercitationem?`,
			},
			{
				title: "Prueba de titulo 3 ",
				date: `${moment().format("dddd")} / ${moment().format(
					"DD"
				)} ${moment().format("MMMM")} de ${moment().format("YYYY")}`,
				content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Quisquam velit, voluptas tempore vel cupiditate saepe
		recusandae. Porro facere dolor molestiae, at veritatis totam id
		est nam aspernatur sint asperiores animi nihil doloribus.
		Reiciendis, ullam deleniti eum ratione aut voluptatum natus odit
		perferendis minus repellat facilis consequatur dolorem harum
		explicabo exercitationem?`,
			},
			{
				title: "Prueba de titulo 4 ",
				date: `${moment().format("dddd")} / ${moment().format(
					"DD"
				)} ${moment().format("MMMM")} de ${moment().format("YYYY")}`,
				content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Quisquam velit, voluptas tempore vel cupiditate saepe
		recusandae. Porro facere dolor molestiae, at veritatis totam id
		est nam aspernatur sint asperiores animi nihil doloribus.
		Reiciendis, ullam deleniti eum ratione aut voluptatum natus odit
		perferendis minus repellat facilis consequatur dolorem harum
		explicabo exercitationem?`,
			},
			{
				title: "Prueba de titulo 5 ",
				date: `${moment().format("dddd")} / ${moment().format(
					"DD"
				)} ${moment().format("MMMM")} de ${moment().format("YYYY")}`,
				content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Quisquam velit, voluptas tempore vel cupiditate saepe
		recusandae. Porro facere dolor molestiae, at veritatis totam id
		est nam aspernatur sint asperiores animi nihil doloribus.
		Reiciendis, ullam deleniti eum ratione aut voluptatum natus odit
		perferendis minus repellat facilis consequatur dolorem harum
		explicabo exercitationem?`,
			},
		];

		let articleGenerator = (article) => {
			return `<article class="post">
			<h2>${article.title}</h2>
			<span class="date">${article.date}</span>
			<p>
			${article.content}
			</p>
			<a href="#" class="button-more">Leer más</a>
		</article>`;
		};

		let theme = $("#theme");

		articles.map(articleGenerator).forEach((x) => {
			$("#post").append(x);
		});

		$("#to-green").click(function () {
			theme.attr("href", `themes/green.css`);
		});
		$("#to-blue").click(function () {
			theme.attr("href", `themes/blue.css`);
		});
		$("#to-red").click(function () {
			theme.attr("href", `themes/red.css`);
		});
	}

	$(".subir").click(function (e) {
		e.preventDefault();
		$("html,body").animate({ scrollTop: 0 }, 2000);

		return false;
	});

	$("#login form").submit(function (e) {
		e.preventDefault();
		let name = $("#form_name").val();
		let email = $("#form_email").val();
		let password = $("#form_password").val();
		localStorage.setItem("user", JSON.stringify({ name, email, password }));
		login();
	});

	$("#logout").click(function (e) {
		e.preventDefault();
		console.log("click logout");
		localStorage.clear();
		$("#about p").show();
		$("#login").toggle();
		$("#logout").toggle();
		$("#user_logged").toggle();

		login();
	});

	// ------------------------------- AnyOtherPage
	if (
		window.location.href.indexOf("About") > -1 ||
		window.location.href.indexOf("Contactos") > -1 ||
		window.location.href.indexOf(`Reloj`) > -1
	) {
		let theme = $("#theme");

		$("#to-green").click(function () {
			theme.attr("href", `../themes/green.css`);
		});
		$("#to-blue").click(function () {
			theme.attr("href", `../themes/blue.css`);
		});
		$("#to-red").click(function () {
			theme.attr("href", `../themes/red.css`);
		});
	}

	// --------------------------- Acordeon

	if (window.location.href.indexOf(`About`) > -1) {
		$("#acordeon").accordion();
	}
	// --------------------------------Reloj
	if (window.location.href.indexOf(`Reloj`) > -1) {
		$("#reloj").html(`<p>${moment().format("h:mm:ss")}</p>`);
		setInterval(function () {
			$("#reloj").html(`<p>${moment().format("h:mm:ss")}</p>`);
		}, 1000);
	}

	if (window.location.href.indexOf(`Contactos`) > -1) {
		$(`form input[name='date']`).datepicker({ dateFormat: "dd-mm-yy" });
		$.validate({ lang: "es" });
	}
});

// --------------------------- login

function login() {
	let userInfo = JSON.parse(localStorage.getItem("user"));
	if (userInfo) {
		$("#user_logged strong").html(userInfo.name);
		$("#user_logged").toggle();

		$("#about").prepend();

		$("#login").toggle();

		$("#logout").toggle();
	}
}
