
 // Calling the function
$(function() {
    $('#js_toggle_nav').click(function() {
        // $("body").toggleClass("background_blur");
        var bars = $("#bars");

        if(bars.attr("action") == "search"){
            $("#js_search_key_word").removeClass("active")
            $("#marsk").removeClass("active");
            setTimeout(function () {
                $("#marsk").hide();
            }, 500);
            return bars.removeClass().addClass("from_close").attr("action", "");
        }
        if(bars.hasClass("to_arrow")){
            bars.removeClass().addClass("from_arrow");
        }else{
            bars.removeClass().addClass("to_arrow");

        }
        toggleNavigation();

    });

    $(".content").on("scroll", function(){
        
        if($("#bars").hasClass("to_arrow")){
            $("#bars").removeClass().addClass("from_arrow");
            toggleNavigation();
        }

    });
    
});


// The toggleNav function itself
function toggleNavigation() {
    if ($('#container').hasClass('display_nav')) {
        // Close Nav
        $('#container').removeClass('display_nav');
        $("#js_search").show();
    } else {
        // Open Nav
        $('#container').addClass('display_nav');
        $("#js_search").hide();
    }
}




