$(document).ready(function () {

    // read json data
    $.ajax({
        type:       "GET",
        url:        "json/albums.json",
        dataType:   "json",
        success:    function(data) {
            renderGallery(data);
        }
    });
});

function renderGallery(data) {

    var gallery = $("#gallery_template").html();
    var menu = Handlebars.compile(gallery);
    var menu_template = menu(data);
    $('#gallery_name').append(menu_template);

    var source = $("#album_template").html();
    var thumbnails = Handlebars.compile(source);
    var thumbnails_template = thumbnails(data);
    $('#album_items').append(thumbnails_template);

    $(".nav-pills li").first().addClass("active");
    $("div.tab-pane").first().addClass("active");
}

