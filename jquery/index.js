$("h1").addClass("change-text margin-add");
$("button").html("<em>hey</em>");
$("h1").click(function(){
    $("h1").removeClass("margin-add change-text");
});
$("button").click(function(){
    $("h1").text("hloooo");
});
$("input").keypress(function(e){
    $("h1").text(e.key);
});