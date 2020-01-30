var topics = ["husky", "pug", "chihuahua", "rottweiler"];

generateTopics();

// event listener for buttons
function generateTopics() {
    var buttonsArray = topics.map(t => "<button class='topicButton'>" + t + "</button>");
    console.log(buttonsArray)
    $("#buttonsWrapper").append(buttonsArray)
};

$(".topicButton").on("click", function () {
    console.log($(this))
    var topic = $(this).text();
    search(topic);
});

function search(topic) {
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

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
                var doggoImage = $("<img class='gif'>");

                doggoImage.attr("src", results[i].images.fixed_height_still.url);

                gifBox.append(p);
                gifBox.append(doggoImage);

                $("#gifDump").prepend(gifBox);
            };
        };

        // event listener for gifs

        $(".gif").on("click", function () {

            var src = $(this).attr("src").replace(".gif", "");

            // if (src.includes("_s")) {
            //     src = src.replace("_s", "")
            // } else {
            //    src = src.concat("_s")
            // };

            src = src.includes("_s") ? src.replace("_s", "") : src.concat("_s")

            src = src.concat(".gif")

            $(this).attr("src", src);

        });
    });
};