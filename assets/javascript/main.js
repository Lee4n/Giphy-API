var topics = ["husky", "pug", "chihuahua", "rottweiler"];

// event listener for buttons

$("button").on("click", function () {
    var doggo = $(this).attr("data-dog");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + doggo + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });
});