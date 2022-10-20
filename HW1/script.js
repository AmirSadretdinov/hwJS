$(function(){
    $('.addWork').click(function() {

        var work = $('<div class="work"><div>');
        work.css({
            'width': '500px',
            'height': 'max-content',
            'background-color': 'white',
            'padding': '10px',
            'margin-top': '10px'
        });

        var h2 = $('<h2></h2>');
        h2.css({
            'max-width': '480px',
            'height': 'max-content',
            'margin': '10px'
        });
        var h4 = $('<h4></h4>').css({
            'margin': '10px'
        });
        var close = $('<button id="close"><img src="close.png" style=""></button>').css({
            'width' : 'max-content',
            'height': 'max-content',
            'background-color': 'white',
            'border': 'none'
        })
        var showHide = $('<button id="showHide"><img src="showHide.png"></button>').css({
            'width' : 'max-content',
            'height': 'max-content',
            'background-color': 'white',
            'border': 'none',
            'float': 'right'
            // 'position': 'relative',
            // 'right': '-435px',
            // 'bottom': '0px'
        })
        h2.text($('#name').val());
        h4.text($('#opis').val());
        h2.append(close, showHide);
        work.append(h2, h4);

        $('.column-left h3').remove();
        $('.column-left').append(work);

        /* Сворачивание/разворачивание задач */
        $(showHide).click(function(){
            if( h4.css('display') == 'block' ){
                h4.hide();
                showHide.css({'transform': 'rotate(180deg)'})
            }
            else {
                h4.show();
                showHide.css({'transform': 'rotate(0)'})
            }
        });

        /* Закрытие задачи и удаление */
        $(close).click(function(){
            $(this).parent().parent().remove();
        });
    });
});

