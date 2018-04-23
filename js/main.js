
(function ($) {
   
    $('#firstname').on('blur', function() {
        var input = $(this);
        var pattern = /^[a-ząśżźćęółń]+$/i;
        var firstName = pattern.test(input.val());
        if(firstName){
            $('#firstname').css({"border":"1px solid green"}).addClass("ok");
            input.next('.info').text("");

        }
        else{
            input.next('.info').text("Wprowadź poprawne imię").css({"color":"red"});
            $('#firstname').css({"border":"1px solid #ccc"}).removeClass('ok');
        }
    });

     $('#lastname').on('blur', function() {
        var input = $(this);
        var pattern = /^[a-ząśżźćęółń]+(?:\s*-\s*)?[a-ząśżźćęółń]+$/i;
        var lastName = pattern.test(input.val());
        if(lastName){
            $('#lastname').css({"border":"1px solid green"}).addClass("ok");
            input.next('.info').text("");
        }
        else{
            input.next('.info').text("Wprowadź poprawne nazwisko").css({"color":"red"});
            $('#lastname').css({"border":"1px solid #ccc"}).removeClass('ok');
        }
    });

     $('#email').on('blur', function() {
        var input = $(this);
        var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        var email = pattern.test(input.val());
        if(email){
            $('#email').css({"border":"1px solid green"}).addClass("ok");
            input.next('.info').text("");
        }
        else{
            input.next('.info').text("Wprowadź poprawny adres email").css({"color":"red"});
            $('#email').css({"border":"1px solid #ccc"}).removeClass('ok');
        }
    });

    $('#phone').on('blur', function() {
        var input = $(this);
        var pattern = /^(?:\(?\+?48)?(?:[-\.\(\)\s]*(\d)){9}\)?$/;
        var phone = pattern.test(input.val());
        if(phone){
            $('#phone').css({"border":"1px solid green"}).addClass("ok");
            input.next('.info').text("");
        }
        else{
            input.next('.info').text("Wprowadź poprawny numer telefonu").css({"color":"red"});
            $('#phone').css({"border":"1px solid #ccc"}).removeClass('ok');
        }
    });

    $('#postalcode').on('blur', function() {
        var input = $(this);
        var pattern = /^[0-9]{2}-[0-9]{3}/;
        var postalcode = pattern.test(input.val());
        if(postalcode){
            $('#postalcode').css({"border":"1px solid green"});
            input.next('.info').text("");
        }
        else{
            input.next('.info').text("Wprowadź poprawny kod pocztowy").css({"color":"red"});
            $('#postalcode').css({"border":"1px solid #ccc"});
        }
    });


    $('.contact100-form-btn').click(function(event){
        event.preventDefault();
        var name = $('#firstname');
        var lastname = $('#lastname');
        var email = $('#email');
        var phone = $('#phone');
            
        if(name.hasClass('ok') && lastname.hasClass('ok') && email.hasClass('ok') && phone.hasClass('ok')) {
            $.ajax({ 
                type: 'GET', 
                url:'response.json', 
                data: { get_param: 'value' }, 
                dataType: 'json',
                success: function (data) { 
                    console.log(data);
                     $('.success').html(data.status.message);
                }
            });
        }
        else {  
              alert("Uzupełnij wymagane pola!"); 
        }
    });



    /*==================================================================
    [ Show / hide contact ]*/
    $('.btn-hide-contact100').on('click', function(){
        $('.container-contact-100').fadeOut(300);
    });

    $('.btn-show-contact100').on('click', function(){
        $('.container-contact-100').fadeIn(300);
    });

})(jQuery);