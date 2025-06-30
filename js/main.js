gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);


document.querySelectorAll("section h2").forEach(h2 => {
  gsap.from(h2, {
    scrollTrigger: {
      trigger: h2,
      start: "top 50%", // h2가 화면 아래쪽 70%쯤 들어왔을 때
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power2.out"
  });
});


const header = document.querySelector('header');
const gnbDep1Items = document.querySelectorAll('#gnb .dep1 > li');

/* header mouse event*/
gnbDep1Items.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        header.classList.add('scroll');
        header.classList.add('on');
    });
    item.addEventListener('mouseleave', function (e) {
        if (!header.contains(e.relatedTarget)) {
            header.classList.remove('scroll');
            header.classList.remove('on');
        }
    });
});
/* header 전체에서 벗어날 때도 다시 체크 */
header.addEventListener('mouseleave', function (e) {
    if (!header.contains(e.relatedTarget)) {
        header.classList.remove('scroll');
        header.classList.remove('on');
    }
});
/* header scroll event*/
window.addEventListener('scroll', function(){
    if(window.scrollY > 10){
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
        main.style.display = `block`
    }
}) 
/* header - lang */
const langBtn = document.querySelector('.lang_wrap button')
const langList = document.querySelector('.lang_wrap ul')
langBtn.addEventListener('click', function() {
    langList.classList.toggle('active')
})
/* header - search */
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
/* header - allmenu */
const allmenuOpenBtn = document.querySelector('.allmenu_wrap')
const allmenuCloseBtn = document.querySelector('.btn_allmenu_close')
const allmenu = document.querySelector('.allmenu_popup')

allmenuOpenBtn.addEventListener('click', function() {
    allmenu.style.display = 'flex';
    header.classList.remove('on')
})
allmenuCloseBtn.addEventListener('click', function() {
    allmenu.style.display = 'none'
})

// ✅ product_wrap 요소 선택 (스크롤 트리거용)
const productSection = document.querySelector(".product_wrap");


gsap.utils.toArray(".product_box li").forEach((item, index) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: ".product_wrap",
      start: "top 50%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    delay: index * 0.2
  });
});


/* esg wrap */
gsap.to(".esg_intro", {
  backgroundColor: "#ffffff",
  scrollTrigger: {
    trigger: ".product_wrap",
    start: "bottom 60%",
    end: "bottom top",
    scrub: true
  }
});

// 📌 intro_content 텍스트 올라오며 색상 변경
gsap.to(".intro_content", {
  y: -50,
  opacity: 1,
  color: "#111",
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".product_wrap",
    start: "bottom 60%",
    end: "bottom top",
    scrub: true
  }
});


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

/* main-swiper */
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
/* news swiper */
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

    },
    breakpoints: {
        0: { 
            slidesPerView: 1,
            spaceBetween: 20
        },
        700: {  
            slidesPerView: 2,
            spaceBetween: 40
        },
        1000: {  
            slidesPerView: 3,
            spaceBetween: 40
        },
        1500: { 
            slidesPerView: 4,
            spaceBetween: 60
        }
    }
})

gsap.from(".news_swiper", {
  scrollTrigger: {
    trigger: ".news_wrap h2", // h2 기준으로 트리거
    start: "bottom 80%",      // h2가 거의 다 보일 때 시작
    toggleActions: "play none none none"
  },
  opacity: 0,
  y: 60,
  duration: 1,
  ease: "power2.out"
});
gsap.utils.toArray(".news_swiper .swiper-slide").forEach((slide, index) => {
  gsap.from(slide, {
    scrollTrigger: {
      trigger: ".news_swiper",   // 전체 swiper 보일 때 트리거
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    delay: index * 0.2,          // 순차적으로 하나씩 지연되며 등장
    ease: "power2.out"
  });
});
/* Recruit */
function chBack(a){
    document.querySelector('.recruit_wrap').style.background = `url(./img/recruit${a}.png) no-repeat`;
}
gsap.utils.toArray(".recruit_content a").forEach((item, index) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: ".recruit_wrap",
      start: "top 30%", // recruit_wrap이 화면에 들어올 때 시작
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    delay: index * 0.2, // 순차적으로 하나씩 등장
    ease: "power2.out"
  });
});

gsap.utils.toArray(".qmenu_item").forEach((item, index) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: ".qmenu_wrap",         // 전체 박스 기준으로 시작
      start: "top 30%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    delay: index * 0.2,               // 순차적 지연 효과
    ease: "power2.out"
  });
});



const cursor = document.querySelector(".custom-cursor");
const recruitSection = document.querySelector(".recruit_wrap");
const links = recruitSection.querySelectorAll(".recruit_content a");

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

// 커서 숨김 기본 설정
cursor.style.display = "none";

// recruit 영역 위에 있을 때만 동작
document.addEventListener("mousemove", (e) => {
const inRecruit = recruitSection.contains(e.target);
    
    if (inRecruit) {
      cursor.style.display = "block";  // 보여주기
      mouseX = e.clientX;
      mouseY = e.clientY;
    } else {
      cursor.style.display = "none";   // recruit 영역 벗어나면 숨기기
    }
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // hover 시 변화
  links.forEach(link => {
    link.addEventListener("mouseenter", () => {
      cursor.style.backgroundColor = "rgba(255,255,255)";
      cursor.style.transform += " scale(1.4)";
    });
    link.addEventListener("mouseleave", () => {
      cursor.style.backgroundColor = "rgba(255,255,255,0.3)";
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
    });
  });
