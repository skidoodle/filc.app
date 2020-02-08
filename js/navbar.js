$(document).ready(() => {
    $(".menu-toggle").click(() => {
        if ($(".nav-items").css("display") == "block") {
            $(".nav-items").css("display", "none");
        } else {
            $(".nav-items").css("display", "block");
        }
    });
});