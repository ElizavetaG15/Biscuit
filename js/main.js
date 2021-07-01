$('.like-icon').on('click', function() {
    $(this).toggleClass('like-active');
});

$(function() {
    $(".dropdown").on("show.bs.dropdown hide.bs.dropdown", function() {
        $(this).find(".my-dropdown-arr").toggleClass("caretup");
    });
});

$(function() {
    $(".dropdown").on("show.bs.dropdown hide.bs.dropdown", function() {
        $(this).find(".sort-dropdown-arr").toggleClass("caretup");
    });
});