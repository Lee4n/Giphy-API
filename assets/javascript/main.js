var topics = ["husky", "pug", "chihuahua", "rottweiler"];

// event listener for buttons

$("button").on("click", function () {
    var doggo = $(this).attr("data-dog");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + doggo + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        var results = response.data; //data is an array being stored in the variable results

// looping through results

        for (i = 0; i < results.length; i++) {
            if (results[i] !== "r" && results[i] !== "pg-13") {
                var gifBox = $("<div>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var doggoImage = $("<img>");

                doggoImage.attr("src", results[i].images.fixed_height.url);

                gifBox.append(p);
                gifBox.append(doggoImage);

                $("#gifDump").prepend(gifBox);
            };
        };
    });
});