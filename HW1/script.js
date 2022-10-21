$(function(){
    $('.addWork').click(function() {

        /* Блок дела */
        var work = $('<div class="work"><div>');
        work.css({
            'width': '500px',
            'height': 'max-content',
            'background-color': 'white',
            'padding': '10px',
            'margin-top': '10px'
        });


        /* Название дела */
        var h2 = $('<h2></h2>');
        h2.css({
            'max-width': '480px',
            'height': 'max-content',
            'margin': '10px'
        });

        /* Описание дела */
        var h4 = $('<h4></h4>').css({
            'margin': '10px'
        });

        /* Кнопка закрытия дела */
        var close = $('<button id="close"><img src="close.png" style=""></button>').css({
            'width' : 'max-content',
            'height': 'max-content',
            'background-color': 'white',
            'border': 'none'
        });

        /* Кнока свернуть дело */
        var showHide = $('<button id="showHide"><img src="showHide.png"></button>').css({
            'width' : 'max-content',
            'height': 'max-content',
            'background-color': 'white',
            'border': 'none',
            'float': 'right'
        });

        /* Блок "Уведомления об удалении дела" */
        var workDelete = $('<div class="workDelete">Дело удалено<div>').css({
            'width': '190px',
            'height': '25px',
            'padding': '10px',
            'margin-top': '8px',
            'background-color': '#f44336',
            'color': 'white',
            'font-size': '20px',
            'font-style': 'medium',
            'text-align': 'center',
            'position': 'relative',
            'top': '-478px',
            'left': '1550px'
        });

        /* Блок "Уведомления о создании дела" */
        var workAdd = $('<div class="workDelete">Дело добавлено<div>').css({
            'width': '190px',
            'height': '25px',
            'padding': '10px',
            'margin-top': '8px',
            'background-color': '#007e33',
            'color': 'white',
            'font-size': '20px',
            'font-style': 'medium',
            'text-align': 'center',
            'position': 'relative',
            'top': '-478px',
            'left': '1550px'
        });

        /* Высвечивание уведомления о создании дела и автоматическое удаление */
        workAdd.appendTo($('body')).delay(3000).slideUp(200);

        /* Запись текста в название дела */
        h2.text($('#name').val());

        /* Запись текста в описание */
        h4.text($('#opis').val());

        /* Добавление кнопок закрыть и свернуть */
        h2.append(close, showHide);

        /* Добавление названия и описания дела в блок дела*/
        work.append(h2, h4);

        /* Удаление заголовка "Списпок дел пуст..." */
        $('.column-left h3').remove();

        /* Добавление дела на страницу */
        $('.column-left').append(work);

        /* Сворачивание/разворачивание дел */
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

        /* Событие при клике на кнопку закрыть */
        $(close).click(function(){

            /* Закрытие дела */
            $(this).parent().parent().remove();

            /* Высвечивание уведомления о удалении дела и автоматическое удаление */
            workDelete.appendTo($('body')).delay(3000).slideUp(200);
        });
    });
});

