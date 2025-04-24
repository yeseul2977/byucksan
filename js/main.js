gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const header = document.querySelector('header');
const gnbDep1Items = document.querySelectorAll('#gnb .dep1 > li');

// 각 dep1 > li 항목마다 이벤트 걸기
gnbDep1Items.forEach(function (item) {
    // 마우스를 올리면 header에 클래스 추가
    item.addEventListener('mouseenter', function () {
        header.classList.add('scroll');
        header.classList.add('on');
    });

    // 마우스를 뗄 때, header 바깥으로 나갔을 때만 클래스 제거
    item.addEventListener('mouseleave', function (e) {
        if (!header.contains(e.relatedTarget)) {
            header.classList.remove('scroll');
            header.classList.remove('on');
        }
    });
});

// header 전체에서 벗어날 때도 다시 체크
header.addEventListener('mouseleave', function (e) {
    if (!header.contains(e.relatedTarget)) {
        header.classList.remove('scroll');
        header.classList.remove('on');
    }
});

/* header window scroll */
window.addEventListener('scroll', function(){
    if(window.scrollY > 10){
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
        main.style.display = `block`
    }
}) 
/* header lang */
const langBtn = document.querySelector('.lang_wrap button')
const langList = document.querySelector('.lang_wrap ul')
langBtn.addEventListener('click', function() {
    langList.classList.toggle('active')
})
/* header search */
const searchBtn = document.querySelector('.search_wrap button')
const searchBox = document.querySelector('.search_popup')

searchBox.style.display = 'none';
searchBtn.addEventListener('click', function() {
  if(searchBox.style.display === 'none') {
    searchBox.style.display = 'block'
    header.classList.remove('on')
  } else {
    searchBox.style.display = 'none'
  }
})
/* allmenu */
const allmenuOpenBtn = document.querySelector('.allmenu_wrap')
const allmenuCloseBtn = document.querySelector('.btn_allmenu_close')
const allmenu = document.querySelector('.allmenu_popup')

allmenuOpenBtn.addEventListener('click', function() {
    allmenu.style.display = 'flex';
})
allmenuCloseBtn.addEventListener('click', function() {
    allmenu.style.display = 'none'
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
    const sections = document.querySelectorAll('.main_wrap, .product_wrap, .esg_intro, .esg_box, .news_wrap, .recruit_wrap, .qmenu_wrap, footer');
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

    // 현재 섹션을 실시간으로 감지해서 current 인덱스 갱신
    window.addEventListener("scroll", () => {
        const scrollY = window.pageYOffset + window.innerHeight / 2;
        sections.forEach((section, i) => {
            if (scrollY >= section.offsetTop) {
                current = i;
            }
        });
    });

    // 휠 이벤트로 섹션 이동
    window.addEventListener("wheel", (e) => {
        if (isAnimating) return;
        if (e.deltaY > 0) {
            goToSection(current + 1);
        } else {
            goToSection(current - 1);
        }
    });
});
