$(function () {
    
    $("#create-burger").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger-name").val().trim(),
        };

        // POST new burger
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });
    
    $("#devour").on("click", function (event) {
        var id = $(this).data("id");
        var updateBurger = {
            devoured: true
        };

        // PUT updated burger
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: updateBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });
});
