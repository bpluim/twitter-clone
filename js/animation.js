$(document).ready(function() {
    $('.tweet-compose').on('click', function() {
        $('#tweet-controls').css('display','block');
        $('.tweet-compose').css('height','5em')
    });

    function updateCount () {
        var maxChar = $('.tweet-compose').val();

        if (maxChar.length < 140) {
            $('#char-count').html(140 - maxChar.length);
        } else {
            $('#char-count').html(0);
            $('.tweet-compose').val(maxChar.substring(0,140));
        }

        if(maxChar.length >= 130) {
            $('#char-count').css('color','red');
        } else {
            $('#char-count').css('color', '#999');
        }

        if(maxChar.length >= 140) {
            $('button').hide();
        } else {
            $('.button').show();
        }


    }

    $('.tweet-compose').keyup(function () {
        updateCount();
    });
    $('.tweet-compose').keypress(function () {
        updateCount();
    });
    $('.tweet-compose').keydown(function () {
        updateCount();
    });

    // $('.button').on('click', function() {
    //     $('#stream').prepend('<p>asdf</p>');
    // });

    function initialTweet() {
        $('.tweet').hover(function() {
            $(this).find('.tweet-actions').css('visibility','visible');
        }, function() {
            $(this).find('.tweet-actions').css('visibility', 'hidden')
        });
        
        $('.tweet').on('mouseenter', function(){
            $(this).find('.stats, .reply').slideDown();
        })

        $('.tweet').on('mouseleave', function(){
            $(this).find('.stats, .reply').slideUp();
        })

        $('.favorite').on('click', function(e) {
            $(this).parent().parent().siblings('.fav-icon').css('visibility', 'visible');
            e.stopPropagation();
        });

        $('.favorite').on('dblclick', function(e) {
            $(this).parent().parent().siblings('.fav-icon').css('visibility', 'hidden');
            e.stopPropagation();
        });

        $('.retweet').on('click', function(e) {
            $(this).parent().parent().siblings('.retweet-icon').css('visibility', 'visible');
            e.stopPropagation();
        });

        $('.retweet').on('dblclick', function(e) {
            $(this).parent().parent().siblings('.retweet-icon').css('visibility', 'hidden');
            e.stopPropagation();
        });
    }



    var submitIt = function() {
        $('#tweet-submit').on('click', function(e) {
            //stores what the user wrote
            var newTweet = $('#tweet-content .tweet-compose').val();
            //copies first tweet
            $('.tweet:first').clone().prependTo('#stream');
            //copies the profile pic over
            $('.avatar:eq(1)').attr('src', 'img/alagoon.jpg');
            //copies name over
            $('.fullname:first').text('Ralph Charrito');
            $('.username:first').text('@Ralph');
            //copies text over
            $('.tweet-text:first').text(newTweet);
            $('.reply .tweet-compose:first').attr("placeholder", "reply to @Ralph");
            $('.time:first').text(function() {
                var dt = new Date();
                var time = dt.getHours() + "h, " + dt.getMinutes() + "m, " + dt.getSeconds() + "s";
                return time;
            })
            //resets to original input
            initialTweet();
            e.preventDefault();
            $('#tweet-content .tweet-compose').val('');
            $('#char-count').text('140');
            $.now();
            //enables tweet info reveal
            // toggleTweet();
        });
    };

    submitIt();

    $('.tweet').hover(function() {
        $(this).find('.tweet-actions').css('visibility','visible');
    }, function() {
        $(this).find('.tweet-actions').css('visibility', 'hidden')
    });

    $('.tweet').on('mouseenter', function(){
        $(this).find('.stats, .reply').slideDown();
    })

    $('.tweet').on('mouseleave', function(){
        $(this).find('.stats, .reply').slideUp();
    })

    $('.favorite').on('click', function(e) {
        $(this).parent().parent().siblings('.fav-icon').css('visibility', 'visible');
        e.stopPropagation();
    });

    $('.favorite').on('dblclick', function(e) {
        $(this).parent().parent().siblings('.fav-icon').css('visibility', 'hidden');
        e.stopPropagation();
    });

    $('.retweet').on('click', function(e) {
        $(this).parent().parent().siblings('.retweet-icon').css('visibility', 'visible');
        e.stopPropagation();
    });

    $('.retweet').on('dblclick', function(e) {
        $(this).parent().parent().siblings('.retweet-icon').css('visibility', 'hidden');
        e.stopPropagation();
    });

    function favCounter() {
        var count = parseInt($('.num-favorites').html());
        $('.favorite').on('click', function(e) {
            var counter = $('.num-favorites').html(count += 1);
            $('.num-favorites').text(counter);
            e.stopPropagation();
        });
    }

    favCounter();
    
})