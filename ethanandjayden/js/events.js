/**
 * @author Marsha Suen
 */


$(document).ready(function() {

    // read json data
    $.ajax({
        type:       "GET",
        url:        "json/events.json",
        dataType:   "json",
        success:    function(data) {
            renderList(data);
        }
    });
});


function renderList(data) {

    var source   = $("#events_template").html();
    var template = Handlebars.compile(source);
    var html    = template(data);
    console.log(html);
    $('#event_items').append(html);
}