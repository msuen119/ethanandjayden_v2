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

    /*$(".nav-stacked li a").each(function() {
       renderPane(data, $(this).attr("aria-controls"));
    }); */
}