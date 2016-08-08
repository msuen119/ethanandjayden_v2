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
    
    if (location.hash) {
      $("a[href='" + location.hash + "']").tab("show");
    }
    else {
      $("#gallery_name li a").first().tab("show");
      
    }
    
    $("a[data-toggle='pill']").on("shown.bs.tab", function (e) {
      var hash = $(e.target).attr("href");
      location.replace(hash);
    });

}