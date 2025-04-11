gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

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

/* 해더 window scroll */
window.addEventListener('scroll', function(){
    if(window.scrollY > 10){
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
        main.style.display = `block`
    }
}) 

/* esg */
const esgImg = document.querySelectorAll('.esg_img img')
const esgCon = document.querySelectorAll('.esg_content div')

console.log(esgImg)
console.log(esgCon)

esgCon.forEach(function(item, i){
        item.addEventListener('mouseover',function(){

            esgImg.forEach(function(img) {
                img.classList.remove('active')
            })
            esgImg[i].classList.add('active')
        })
    })

/* 메인 스와이퍼 */
const slideDuration = 5000;
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
    document.querySelector('.recruit_wrap').style.background = `url(./img/recruit${a}.png) no-repeat`;
}

/* 뉴스 스와이퍼 */
const newsSwiper = new Swiper('.news_swiper', {
    autoplay : {
        delay : slideDuration 
    },
    loop: true,	
    slidesPerView:'4',
    spaceBetween: 60, 
    pagination:{
        el: '.swiper-pagination',
        type: 'progressbar'
    }
})

/* esg intro */
// 초기 상태 설정
gsap.set('.intro_content', { y: 100, opacity: 0 });

// 스크롤 트리거 애니메이션
gsap.to('.intro_content', {
  y: 0,
  opacity: 1,
  duration:2,
  scrollTrigger: {
    trigger: '.intro_content',
    start: 'top 90%',
    end: 'bottom 20%',
    toggleActions: "play none none reverse",
  },
  ease: "power2.out"
});



document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.main_wrap, .product_wrap, .esg_intro, .esg_box, .news_wrap, .recruit_wrap, .qmenu_wrap');

    let current = 0;
    let isAnimating = false;

    function goToSection(index) {
      if (index < 0 || index >= sections.length || isAnimating) return;
      isAnimating = true;
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: sections[index].offsetTop - document.querySelector("header").offsetHeight
        },
        ease: "power2.out",
        onComplete: () => {
          current = index;
          isAnimating = false;
        }
      });
    }
  
    window.addEventListener("wheel", (e) => {
      if (isAnimating) return;
      if (e.deltaY > 0) {
        goToSection(current + 1); // 아래로
      } else {
        goToSection(current - 1); // 위로
      }
    });
  }); 

 /*  document.addEventListener("DOMContentLoaded", () => {
    const headerHeight = document.querySelector("header").offsetHeight;
    const sections = [...document.querySelectorAll('.main_wrap, .product_wrap, .esg_intro, .esg_box, .news_wrap, .recruit_wrap, .qmenu_wrap')];
    let current = 0;
    let isAnimating = false;
  
    const goTo = (i) => {
      if (isAnimating || i < 0 || i >= sections.length) return;
      isAnimating = true;
      
      const y = sections[i].offsetTop - headerHeight;
  
      gsap.to(window, {
        duration: 1,
        scrollTo: y,
        ease: "power2.out",
        onComplete: () => {
          current = i;
          isAnimating = false;
        }
      });
    };
  
    window.addEventListener("wheel", (e) => goTo(current + (e.deltaY > 0 ? 1 : -1)));
  });
   */