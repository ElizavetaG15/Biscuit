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

$(function() {
    $(".dropdown").on("show.bs.dropdown hide.bs.dropdown", function() {
        $(this).find(".city-dropdown-arr").toggleClass("caretup");
    });
});

$(function() {
    $(".dropdown").on("show.bs.dropdown hide.bs.dropdown", function() {
        $(this).find(".day-dropdown-arr").toggleClass("caretup");
    });
});


$(function() {
    $("#phone").mask("+7(999) 999-99-99");
});



$(function() {
    $('.order-delete').on('click', function() {
        $(this).parent().remove();
    });
});