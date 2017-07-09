$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

(function (){
    $(".tags i").click(function () {
        var activeCircle = "fa-circle-o";
        var inactiveCircle = "fa-circle";
        var a = $(".tags i.active");
        
        // set the previous active page / tag
        var page = $(".tags i.active").attr("data-tag");
        $(".pages div.page[data-page="+page+"]").removeClass("active");
        
        $(".tags i.active").removeClass(activeCircle);
        $(".tags i.active").addClass(inactiveCircle)
        $(".tags i.active").removeClass("active");

        // set the next active page  / tag
        var page = $(this).attr("data-tag");
        $(".pages div.page[data-page="+page+"]").addClass("active");
        
        $(this).addClass("active");
        $(this).removeClass(inactiveCircle);
        $(this).addClass(activeCircle);
        
    })
    
    $(".ee-element i.detail").click(function () {
        $(this).parent().toggleClass("hide-detail")
    })
            // add or remove the hide-detail class
       
})();