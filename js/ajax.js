function search()
{
	var searchInput = $("input[name=searchInput]").val();

	if (searchInput.length > 3)
	{
		$.ajax({
			url: 'http://www.omdbapi.com/',
			type: 'GET',
			data: {t: searchInput, plot: 'short', apikey: '989557ce'},
		})
		.done(function(response) {
			console.log("success");
			$("#movieTitle").text(response.Title);
			$("#moviePoster").attr('src', response.Poster);
			$("#moviePlot").html("<strong>Genre:</strong> " + response.Genre + "<br>"
								+ "<strong>Year:</strong> " + response.Year + "<br>"
								+ "<strong>Plot</strong><br> " + response.Plot);
		})
		.fail(function() {
			console.log("error");
			$("#movieTitle").text("");
			$("#moviePoster").attr('src', "");
			$("#moviePlot").text("");
		})
		.always(function(response) {
			console.log(response);
		});
	}
}