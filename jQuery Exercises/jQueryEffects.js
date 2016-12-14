// JavaScript File

$("button").on("click",function(){
    $("div").slideToggle(500, function(){
        console.log("Slide is complete!");
        $(this).remove();
    });
});

