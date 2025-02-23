$(function(){
    $('.search-button').click(function(){
        $('.search-area').animate({
            top: '15px'
        }, 200);
    });

    $(document).click(function(event){
        if (!$(event.target).closest('.search-area, .search-button').length) {
            $('.search-area').animate({
                top: '-50px'
            }, 200);
            $('#search-input').val('');
        }
    });
});