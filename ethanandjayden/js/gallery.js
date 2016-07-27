$(document).ready(function () {

    // read json data
    $.ajax({
        type:       "GET",
        url:        "json/albums.json",
        dataType:   "json",
        success:    function(data) {
            renderMenu(data);
        }
    });
});

function renderMenu(data) {

    var pills = {
        'li' : {
            'category<-gallery.categories' : {
                'a': 'category.title',
                'a@href' : '##{category.id}',
                'a@aria-controls': 'category.id'
            }
        }
    };
    // render pills
    $p('ul.nav-pills').render(data, pills);

    var panel = {
        'div.tab-pane' : {
            'category<-gallery.categories' :{
                '.@id' : 'category.id'
            }
        }
    };

    // render panels with no albums
    $p('div.tab-content').render(data, panel);

    $(".nav-stacked li a").each(function() {
       renderPane(data, $(this).attr("aria-controls"));
    });

    $(".nav-pills li").first().addClass("active");
    $("div.tab-pane").first().addClass("active");
}


function renderPane(data, id) {
    var json = JSON.stringify(data);
    var obj = $.parseJSON(json);
    console.log(obj.gallery);

    for( var i=0; i<obj.gallery.categories.length; i++ ) {
        var category = obj.gallery.categories[i];
        if( category.id == id ) {
            for( var a=0; a<category.albums.length; a++ ) {
                var album = category.albums[a];
                var imgUrl = window.location.origin + window.location.pathname + "/../albums/" + album.cover;
                console.log(imgUrl);
                generateHTML(album, imgUrl, id);
            }
        }
    }
}

//generates html for each thumbnail using json data
function generateHTML(album, imgUrl, id) {
    var html =
        "<div class='col-md-4 col-sm-6 col-xs-12'> " +
        "  <div class='thumbnail'> " +
        "    <h5>"+album.title+"</h5>" +
        "    <a href='albums/"+album.html+"'><img style='max-width:170px' src="+imgUrl+"></a> " +
        "    <div class='caption'> " +
        "      <p>"+album.description+"</p>" +
        "    </div>" +
        "  </div>" +
        "</div>";

    $("#"+id+" div.row").append(html);
}
