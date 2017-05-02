var oldWidth;
            $(document).ready(function() {
                if($(document).width() <= 768) {
                    $(".carosel-inner").children(":first").addClass("active");
                    $(".carousel-indicators").children(":first").addClass("active");

                    $('#menu').html("<i class='fa fa-bars' aria-hidden='true'></i>");
                }
                else{
                    $(".carosel-inner").children(":first").addClass("prev");
                    $(".carosel-inner").children(":first").next().addClass("active");
                    $(".carousel-indicators").children(":first").next().addClass("active");
                    $(".carosel-inner").children(":first").next().next().addClass("next");

                    $('#menu').html("<i class='fa fa-bars' aria-hidden='true'></i>  Menu");
                }

                oldWidth = $(window).width();
            });

            $(window).resize(function() {
                //console.log(oldWidth);
                //console.log($(document).width());

                if($(document).width() <= 768 && oldWidth > 768) {
                    $(".carosel-inner").children(":first").removeClass("prev");
                    $(".carosel-inner").children(":first").next().next().removeClass("next");
                    $(".carosel-inner").children(":first").insertAfter($(".carosel-inner").children(":last"));

                    //two seperate .resize produces bugs =/
                    $('#menu').html("<i class='fa fa-bars' aria-hidden='true'></i>");
                }
                else if($(document).width() > 768 && oldWidth <= 768){
                    $(".carosel-inner").children(":last").insertBefore($(".carosel-inner").children(":first"));
                    $(".carosel-inner").children(":first").addClass("prev");
                    $(".carosel-inner").children(":first").next().next().addClass("next");

                    //two seperate .resize produces bugs =/
                    $('#menu').html("<i class='fa fa-bars' aria-hidden='true'></i>  Menu");
                }
                oldWidth = $(window).width();
            });


            $('.carosel-control-right').click(function() {
                $(this).blur();
                if($(document).width() <= 768) {
                    $(this).parent().find('.carosel-item').first().removeClass("active");
                    $(this).parent().find('.carosel-item').first().insertAfter($(this).parent().find('.carosel-item').last());
                    $(this).parent().find('.carosel-item').first().addClass("active");
                }
                else {
                    $(this).parent().find('.carosel-item').first().removeClass("prev");
                    $(this).parent().find('.carosel-item').first().next().removeClass("active");
                    $(this).parent().find('.carosel-item').first().next().next().removeClass("next");
                    $(this).parent().find('.carosel-item').first().insertAfter($(this).parent().find('.carosel-item').last());
                    $(this).parent().find('.carosel-item').first().addClass("prev");
                    $(this).parent().find('.carosel-item').first().next().addClass("active");
                    $(this).parent().find('.carosel-item').first().next().next().addClass("next");
                }

                var current = $(this).parent().find(".carousel-indicators").find(".active");
                current.removeClass("active");
                if(current.next().length > 0)
                    current.next().addClass("active");
                else
                    $(".carousel-indicators").children(":first").addClass("active");
            });

            $('.carosel-control-left').click(function() {
                $(this).blur();

                $(this).blur();

                if($(document).width() <= 768) {
                    $(this).parent().find('.carosel-item').first().removeClass("active");
                    $(this).parent().find('.carosel-item').last().insertBefore($(this).parent().find('.carosel-item').first());
                    $(this).parent().find('.carosel-item').first().addClass("active");
                }
                else {
                    $(this).parent().find('.carosel-item').first().removeClass("prev");
                    $(this).parent().find('.carosel-item').first().next().removeClass("active");
                    $(this).parent().find('.carosel-item').first().next().next().removeClass("next");
                    $(this).parent().find('.carosel-item').last().insertBefore($(this).parent().find('.carosel-item').first());
                    $(this).parent().find('.carosel-item').first().addClass("prev");
                    $(this).parent().find('.carosel-item').first().next().addClass("active");
                    $(this).parent().find('.carosel-item').first().next().next().addClass("next");
                }

                var current = $(this).parent().find(".carousel-indicators").find(".active");
                current.removeClass("active");
                if(current.prev().length > 0)
                    current.prev().addClass("active");
                else
                    $(".carousel-indicators").children(":last").addClass("active");
            });
