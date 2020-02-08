$(document).ready(() => {
    $(".menu-toggle").click(() => {
        if ($(".nav-items").css("display") == "block") {
            $(".nav-items").css("display", "none");
        } else {
            $(".nav-items").css("display", "block");
        }
    });

    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, () => {
                location.hash = hash;
            });
        }
    });
});