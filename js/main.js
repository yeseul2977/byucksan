gsap.registerPlugin(ScrollTrigger);


/* 해더 window scroll */
window.addEventListener('scroll', function(){
    if(window.scrollY > 10){
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
    }
}) 
/* 해더 mouseover */
const header = document.querySelector('header')
const gnbDep1 = document.querySelectorAll('#gnb .dep1>li')

gnbDep1.forEach(function(item) {
    item.addEventListener('mouseover', function() {
    header.classList.add('scroll')
    })
    item.addEventListener('mouseout', function() {
    header.classList.remove('scroll')
    })
})

/* esg */
const esgImg = document.querySelectorAll('.esg_img img')
const esgCon = document.querySelectorAll('.esg_content div')

console.log(esgImg)
console.log(esgCon)
esgCon.forEach(function(item){
        item.addEventListener('mouseover',function(){
            esgImg.classList.add('active')
        })
        item.addEventListener('mouseout',function(){
            esgImg.classList.remove('active')
        })
    })


/* 메인 스와이퍼 */
const slideDuration = 3000;
document.documentElement.style.setProperty('--slide-duration',`${slideDuration}ms`)

const mainSwiper = new Swiper('.main_swiper', {
    autoplay : {
        delay : slideDuration 
    },
    effect: 'fade',
    loop: true,	
    navigation: {
        nextEl: '.swiper_btn_next',
        prevEl: '.swiper_btn_prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
        return `
            <span class="num">${current}</span>
            <div class="progress"><div class="bar"></div></div>
            <span class="num">${total}</span>
            `
    },
    },
})
/* Recruit */
function chBack(a){
    document.querySelector('.recruit_wrap').style.background = `url(/img/recruit${a}.png) no-repeat`;

}

/* 뉴스 스와이퍼 */
const newsSwiper = new Swiper('.news_swiper', {
    autoplay : {
        delay : slideDuration 
    },
    loop: true,	
    slidesPerView:'4',
    spaceBetween: 60, 
    pagination: {
        el: '.swiper-pagination',
        
    }
})

/* esg intro */
gsap.to('.intro_content', {
    // yPercent: 500, //translateX(100%)
    y:-100,
    duration: 3,
    opacity: 100,
    scrollTrigger: {
        trigger: '.intro_content',
        start: 'top 80%',
        end: 'bottom 40%',
        toggleActions: "play none none restart",      
    } 
})


