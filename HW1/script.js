$(function(){
    $('.addWork').click(function() {

        var work = $('<div class="work"><div>');
        work.css({
            'width': '500px',
            'height': '100px',
            'background-color': 'white',
            'padding': '20px',
            'margin-top': '10px'
        });

        var h2 = $('<h2></h2>');
        var h4 = $('<h4></h4>');
        var close = $('<button id="close"><img src="close.png" style=""></button>').css({
            'width': '12px',
            'height': '12px',
            'margin-left': '15px',
            'border': 'none'
        })
        h2.text($('#name').val());
        h4.text($('#opis').val());
        h2.append(close);
        work.append(h2, h4);

        $('.column-left h3').remove();
        $('.column-left').append(work);
        $(close).click(function(){
            $(this).parent().parent().remove();
        });

    });
});