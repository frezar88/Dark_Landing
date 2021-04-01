function waitLoad() {
    let c = document.querySelector('.first-screen'),
        x = document.querySelector('.site')
    c.classList.toggle('hide__screen')
    x.classList.toggle('hide__screen')
    function show() {
        let a = document.querySelector('.site');
        a.classList.add('show_screen');
    }
    setTimeout(show, 7000)
    function hide() {
        let a = document.querySelector('.first-screen');
        a.classList.add('hide_screen');
        document.getElementById('contact-link').addEventListener('click', () => {
            document.querySelector('footer').scrollIntoView({ block: "center", behavior: "smooth" })
        });
        document.getElementById('insp-link').addEventListener('click', () => {
            document.querySelector('.inspiration').scrollIntoView({ block: "center", behavior: "smooth" })
        });
        document.getElementById('home-link').addEventListener('click', () => {
            document.querySelector('.simplicity').scrollIntoView({ block: "center", behavior: "smooth" })
        });
        document.getElementById('blog-link').addEventListener('click', () => {
            document.querySelector('.blog').scrollIntoView({ block: "center", behavior: "smooth" })
        });
    }

    setTimeout(hide, 7000)

}
document.addEventListener("DOMContentLoaded", waitLoad());

$(document).ready(function () {
    
    //---------burger---------
    $('.header__burger').click(function () {
        $('.header__burger,.header__menu').toggleClass('active')

    });

    $('.header__logo').click(function () {
        $('.header__logo').toggleClass('rotatex')
        
    });
    //---------slider---------
    $('.slider').slick({

        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        speed: 1000,
        easing: 'ease',
        autoplay: true,
        autoplaySpeed: 5000,
        waitForAnimate: true,
        centerMode: false,
        variableWidth: false,
        rows: 1,
        slidesPerRow: 1,
        vertical: false,
        responsive: [   //Адаптив для слайдера
            {

                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            }
        ],


    });
   
});


$(document).ready(function () { $('.slider').slick('setPosition')})

