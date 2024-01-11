$(document).ready(function () {
    $.fn.mainContainerCss=function () {
        $('body').css({
            'background-color': '#607274'
        });
        this.css({
            'margin': '20px 10%',
            'padding': '10px 10px',
            'padding-bottom': '50px',
        })
    }
    $.fn.headingCss=function () {
        this.css({
            'text-align': 'center',
            'color': '#EEE7DA',
            'font-size': '48px',
            'margin-left': '45px',
            'letter-spacing': '2px',
            'font-family': 'Bradley Hand ITC', 
        });
    }
    $.fn.imgsContainerCss=function () {
        this.css({
            'display': 'flex',
            'flex-wrap': 'wrap',
            'justify-content': 'center',
            'align-items': 'center',
            'gap': '10px',
            'margin-top': '50px'
        });
        $('img').css({
            'width': '220px',
            'height': '220px',
            'cursor': 'pointer',
            'border-radius': '15px'
        });
        $('img').hover(function () {
            $(this).css({
                'box-shadow': '1px 1px 5px 5px #BAB098',
                'transform': 'scale(1.5)',
                'transition': 'all .5s'
            });
        }, function () {
            $(this).css({
                'box-shadow': 'none',
                'transform': 'none'
            });
        });
    }
    $.fn.SectionCss=function () {
        $(this).css({
            'padding': '10px 10px',
            'padding-bottom': '50px',
            'overflow': 'hidden',
            'width': '97.7vw',
            'height': '85vh',
        });
        $(this).hover(function () {
            $(this).css({
                'transform': 'scale(1.2)',
                'padding-top': '50px',
                'transition': 'all .7s'
            })
        }, function () {
            $(this).css({
                'transform': 'none',
                'transition': 'all .7s'
            })
        });
        $('.contents').css({
            'height': '100%',
            'width': '80%',
            'margin': '130px auto'
        });
        $('.special-heading').css({
            'color': '#4A5556',
            'font-size': '170px',
            'text-align': 'center',
            'font-weight': '1000',
            'letter-spacing': '-3px',
            'margin': '0',
        });
        $('.special-heading+p').css({
            'margin': '-65px auto',
            'font-size': '45px',
            'text-align': 'center',
            'color':'#F1E8D1'
        });
        $('.label').css({ 
            'font-size': '35px',
            'font-weight': '800',
            'color': '#EEE7DA',
            'width': '100%',
            'height': '100%',
        });
        $('.info').css({
            'padding-top': '100px',
            'padding-bottom': '60px',
            'text-align': 'center',
        });
        $('.info .link').css({ 
            'font-size': '35px',
            'font-weight': '800',
            'color': '#EEE7DA',
            'text-decoration': 'none',
            'width': '100%',
            'height': '100%',
            'cursor': 'pointer',
        });
        $('.info .link').hover(function () {
            $(this).css({
                'transform': 'scale(2.5)',
                'transition': 'all .5s',
                'color': '#B9B4AB',
            })
        }, function () {
            $(this).css({
                'transform': 'scale(1)',
                'transition': 'all .5s',
                'color': '#EEE7DA',
            })
        });
        $('.arrow').css({
            'width': '40px',
            'position': 'absolute',
            'margin-top': '20px',
            'font-size': '24px',
            'cursor': 'pointer',
            'opacity': '0.8',
            'color': '#F2F1EB',
            'transition': 'transform 0.5s ease-in-out',
        });
        $(".arrow").click(function() {
            $("html, body").animate({ scrollTop: $("#gallery").offset().top }, 300);
        });
        function animateSpanUp() {
            $('.arrow').css('transform', 'translateY(-10px)');
        }
        function animateSpanDown() {
            $('.arrow').css('transform', 'translateY(10px)');
        }
        animateSpanUp();
        setInterval(function () {
            animateSpanUp();
            setTimeout(animateSpanDown, 500); 
        }, 1000);
    }
    $.fn.heroSec = function () {
        $('body div:has(h3)').first().attr('id', 'gallery');
        $('body').prepend(`
        <div class="container">
            <div class="contents">
                <h2 class="special-heading">Welcome</h2>
                <p>To My Gallery Plugin</p>
                <div class="info">
                    <a class="link" target="_blank" href="https://www.linkedin.com/in/ahmed-allam-a701791b7/">I hope you use this plugin <br> in your future projects</a><br>
                    <span class="arrow">⬇</span>
                </div>
            </div>
        </div>
        `)
        $('.container').SectionCss();
    }
    $.fn.ContactSec = function () {
        $('body').append(`
        <div class="container">
            <div class="contents">
                <h2 class="special-heading">Thanks</h2>
                <p>For Watching my plugin</p>
                <div class="info">
                    <p class="label">You can find me <a class="link" target="_blank" href="https://www.linkedin.com/in/ahmed-allam-a701791b7/">Here</a></p>
                    <span class="arrow">↑</span>
                </div>
            </div>
        </div>
        `)
        $('.container').SectionCss();
    }
    $.fn.CreateSlider = function () {
        this.append(`
            <div class="slider" id="slider">
                <span class="close-slider">&times;</span>
                <div class="content" id="content">
                    <div class="action lt" id="prev">&lt;</div>
                    <img id="slider-image" src="" alt=""/>
                    <div class="action gt" id="next">&gt;</div>
                </div>
            </div>
        `);
        $('#slider').css({
            'display': 'none',
            'position': 'fixed',
            'top': '0',
            'left': '0',
            'width': '100%',
            'height': '100%',
            'background': 'rgba(0, 0, 0, 0.9)',
            'z-index': '1000'
        });
        $('#slider .content').css({
            'display': 'flex',
            'flex-direction': 'row',
            'justify-content': 'center',
            'align-items': 'center',
            'margin': '3% 3%',
            'height': '90%'
        });
        $('#slider .content img').css({
            'width': '86%',
            'height': '80%',
            'margin': '5% 3%',
            'display': 'block'
        });
        $('.action.lt, .action.gt').css({
            'color': '#fff',
            'cursor': 'pointer',
            'font-size': '35px'
        });
        $('.close-slider').css({
            'position': 'absolute',
            'top': '20px',
            'right': '40px',
            'color': '#fff',
            'cursor': 'pointer',
            'font-size': '35px',
            'color': 'red'
        });
        return this;
    }
    $.fn.openSlider = function (imageUrl) {
        this.find('#slider-image').attr('src', imageUrl);
        $("#slider-image").hide().slideToggle(500);
        this.show();
        return this;
    }
    $.fn.galleryPlugin = function () {
        $('div:has(h3)').first().mainContainerCss();
        $('h3').headingCss();
        $('div:has(img)').eq(1).imgsContainerCss();
        $(this).heroSec();
        $(this).ContactSec();
        var sliderInitialized = false;
        $('div img').on('click', function () {
            if (!sliderInitialized) {
                $('body').CreateSlider();
                sliderInitialized = true;
            }
            var imageUrl = $(this).attr('src');
            var nextElement = $(this).next();
            var prevElement = $(this).prev();
            $('#slider').openSlider(imageUrl);
            $('#next').off().on('click', function () {
                if ($(nextElement).attr('src') === undefined) {
                    nextElement = $('div img:first-child');
                }
                imageUrl = nextElement.attr('src');
                $('#slider').openSlider(imageUrl);
                prevElement = nextElement.prev();
                nextElement = nextElement.next();
            });
            $('#prev').off().on('click', function () {
                if ($(prevElement).attr('src') === undefined) {
                    prevElement = $('div img:last-child');
                }
                imageUrl = prevElement.attr('src');
                $('#slider').openSlider(imageUrl);
                nextElement = prevElement.next();
                prevElement = prevElement.prev();
            });
            $('.close-slider').off().on('click', function () {
                console.log('close slider');
                $('#slider').hide();
            });
        });
        return this;
    }
});
