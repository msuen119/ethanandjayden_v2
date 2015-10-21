// JavaScript Document

function highlight(menuItem) {
	$("#"+menuItem).attr("src","images/"+menuItem+"_highlight.jpg");
}

function unhighlight(menuItem) {
	$("#"+menuItem).attr("src","images/"+menuItem+".jpg");
}