$(function(){
    $('#my-info-button').hover(
        function() {
            $('.my-info-box').stop(true, true).fadeIn(300);
        },
        function() {
            $('.my-info-box').stop(true, true).fadeOut(300);
        }
    );
});