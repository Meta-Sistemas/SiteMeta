window.onload = function() {
    // Menu
    const btnHamburguer = document.getElementsByClassName("btn-hamburguer");
    const navbar = document.getElementsByClassName("navbar")[0];
    
    for ( btn of btnHamburguer ) {
        btn.addEventListener("click", function() {
            this.classList.toggle("active");
            navbar.classList.toggle("active");
        });
    }

    document.getElementsByClassName("nav-item").onclick = function(){
        document.getElementsByClassName("nav-item").style.color = '#B83F48';
    }

    // Swiper - O que fazemos
    var swiper = new Swiper('.swiper-container-about', {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            800: {
                slidesPerView: 2,
                spaceBetween: 0,
                slidesPerGroup: 1
            },
    
            1000: {
                slidesPerView: 3,
                spaceBetween: 0,
                slidesPerGroup: 1
            }
        }
        
    });
    
    // Swiper - Clientes
    var swiper1 = new Swiper('.swiper-container-client', {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            800: {
                slidesPerView: 3,
                spaceBetween: 35,
                slidesPerGroup: 1
            },
    
            1000: {
                slidesPerView: 4,
                spaceBetween: 30,
                slidesPerGroup: 1
            }
        }
        
    });
    
}