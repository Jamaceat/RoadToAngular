$(document).ready(function () {
	// Codigo aqui
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

	articles.map(articleGenerator).forEach((x) => {
		console.log(x);
		$("#post").append(x);
	});

	let theme = $("#theme");

	$("#to-green").click(function () {
		console.log("click");
		theme.attr("href", `themes/green.css`);
	});
	$("#to-blue").click(function () {
		theme.attr("href", `themes/blue.css`);
		console.log("click");
	});
	$("#to-red").click(function () {
		console.log("click");
		theme.attr("href", `themes/red.css`);
	});
});
