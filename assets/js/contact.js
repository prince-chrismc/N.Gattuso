$(document).ready(function(){
    //forcing fullscreen view
    $('body').css("height", "auto");
    var dif = $(window).height() - $('body').height();
    //console.log(dif);
    var padding = $('.main-content').innerHeight() - $('.main-content').height();

    if(dif+padding >= 0)
        $('.main-content').css("padding", (dif+padding)/2+'px 0');
    else
        $('.main-content').css("padding", "");
    $('body').css("height", "");

    //set proper color initialy
    $("#category").css("color", "#a5a9ad");

    // form submission
    $('form#form').submit(function(e) {
        e.preventDefault();

        //remove errors
        $('form#form .error').remove();
        var hasError = false;

        //for each required input require make sure theres a value
        if(jQuery.trim($("#name").val()) == '') {
            $("#name").parent().append('<span class="error"><b>Oops!</b> You forgot to enter your name</span>');
            hasError = true;
        }

        if(jQuery.trim($("#email").val()) == '') {
            $("#email").parent().append('<span class="error"><b>Oops!</b> You forgot to enter your e-mail</span>');
            hasError = true;
        }
        else {
            //make sure email is valid
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            if(!emailReg.test(jQuery.trim($("#email").val()))) {
                var labelText = $(this).prev('label').text();
                $("#email").parent().append('<span class="error"><b>Oops!</b> You entered an invalid e-mail</span>');
                hasError = true;
            }
        }

        if(jQuery.trim($("#message").val()) == '') {
            $("#message").parent().append('<span class="error"><b>Oops!</b> You forgot to leave a message</span>');
            hasError = true;
        }
        // end of validation

        //lets try to submit this everything is correct
        if(!hasError) {
            $('form#form').prepend('<div class="sending"><h3>We are working to send your message</h3><i class="fa fa-cog fa-spin fa-3x fa-fw"></i></div>');
            $('form#form').slideUp("fast");

            //get the name field value
            var name = $('#name').val();
            //get the name field value
            var email = $('#email').val();
            //get the comments
            var message = $('#message').val();
            //get copy selected
            var cc = '';
            if($("input[name=copy]:checked").length > 0)
                cc = email;
            //get human
            var human = 'robot';
            if($("input[name=human]:checked").length > 0)
                human = 'human';

            $.ajax({
                url:'https://formspree.io/info@ngattuso.com',
                method:'POST',
                data:{
                    _subject:'New Message From ngattuso.com!',
                    _cc:cc,
                    name:name,
                    email:email,
                    message:message,
                    human:human,
                },
                dataType:"json",
                success:function() {
                    console.log('success');
                    $('.sending').remove();
                    $('form#form').before('<form id="post-sub" class="container-fluid"><div class="success"><h3><b>Success!</b> Thank you. Your email was sent successfully.</h3><button type="submit" class="main-btn" style="margin: 1em 0;">Again?</button></div></form>');
                },
                error:function(){
                    $('.sending').remove();
                    $('form#form').before('<div class="container-fluid"><div class="success"><h3><b>Oh no!</b> Something went horribly wrong. <a href="mailto:dj_nick_gattuso@hotmail.com">Contact me directly</a> or try again later.</h3></form>');
                }
            });
        }
        return false;
    });

    $("button[type=reset]").click(function(){
        $("form#form").toggle("slide", { direction: "left" }, 250);

        $("form#form")[0].reset();
        $("#category").css("color", "#a5a9ad");
        $('.error').remove();

        $("form#form").toggle("slide", { direction: "right" }, 500);
    });

    $('form#post-sub').submit(function(e) {
        e.preventDefault();
        $("form#form")[0].reset();
        $("#category").css("color", "#a5a9ad");
        $('form#post-sub').slideUp("fast");
        $('form#form').slideUp("slow");
    });

});


$(window).resize(function(){
    $('body').css("height", "auto");
    var dif = $(window).height() - $('body').height();
    //console.log("win: " + $(window).height() +   '   doc: ' + $(document).height() + " - body: " + $('body').height() + " = " + dif);
    var padding = $('.main-content').innerHeight() - $('.main-content').height();
    if(dif+padding >= 0)
        $('.main-content').css("padding", (dif+padding)/2+'px 0');
    else
        $('.main-content').css("padding", "");
    $('body').css("height", "");
});


$("#category").change(function() {
    if($(this).val() == "0")
        $(this).css("color", "#a5a9ad");
    else
        $(this).css("color", "white");
});


$('.input-group').focusin(function() {
    this.focus();
});

$('.input-group').focusout(function() {
    this.blur();
});
