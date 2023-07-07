$(document).ready(function () {


     $('button').click(function () {
        $('.kwadrat').animate({
            'marginLeft': '100px',
            'height': '100px',
            'width': '100px',
        }, 3000
        )
    

        $('.kwadrat').animate({
        "backgroundColor":"blue"
        }, 5000, function () {
            $('.kwadrat').append('<p>"Zakończenie animacji"</p>').css({
                'color': 'white'
            })
    
        });
    });





    

   



});