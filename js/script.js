AOS.init();

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        touchDrag: true,
        mouseDrag: true,
        slideTransition:'ease-in',
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        navSpeed: 700,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
})

const navSlider = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle nav class
        nav.style.display = 'flex'
        nav.classList.toggle('nav-active');

        // Toggle animation
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            } 
            else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.4}s`;
            }
        }) 
        burger.classList.toggle('toggle');
    })
}





navSlider();