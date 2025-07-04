// ✅ GSAP 플러그인 등록 (ScrollTrigger와 ScrollToPlugin을 사용하기 위해)
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);


// ✅ 각 섹션의 제목(h2)에 스크롤 트리거 애니메이션 적용
document.querySelectorAll("section h2").forEach(h2 => {
  gsap.from(h2, {
    scrollTrigger: {
      trigger: h2,
      start: "top 50%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power2.out"
  });
});


// ✅ 헤더 관련 이벤트 처리
const header = document.querySelector('header');
const gnbDep1Items = document.querySelectorAll('#gnb .dep1 > li');

// 마우스가 메뉴에 올라가면 header에 클래스 추가
gnbDep1Items.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        header.classList.add('scroll');
        header.classList.add('on');
    });

    // 마우스가 벗어나면 클래스 제거
    item.addEventListener('mouseleave', function (e) {
        if (!header.contains(e.relatedTarget)) {
            header.classList.remove('scroll');
            header.classList.remove('on');
        }
    });
});

// 헤더 전체 영역에서 마우스 벗어났을 때도 처리
header.addEventListener('mouseleave', function (e) {
    if (!header.contains(e.relatedTarget)) {
        header.classList.remove('scroll');
        header.classList.remove('on');
    }
});

// 스크롤 위치에 따라 header에 'scroll' 클래스 토글
window.addEventListener('scroll', function(){
    if(window.scrollY > 10){
        header.classList.add('scroll');
    }else{
        header.classList.remove('scroll');
        main.style.display = `block`;
    }
});


// ✅ 언어 선택 버튼 토글 기능
const langBtn = document.querySelector('.lang_wrap button');
const langList = document.querySelector('.lang_wrap ul');
langBtn.addEventListener('click', function() {
    langList.classList.toggle('active');
});


// ✅ 검색 버튼 클릭 시 검색창 열기/닫기
const searchBtn = document.querySelector('.search_wrap button');
const searchBox = document.querySelector('.search_popup');
searchBox.style.display = 'none';
searchBtn.addEventListener('click', function() {
    if(searchBox.style.display === 'none') {
        searchBox.style.display = 'block';
        header.classList.remove('on');
    } else {
        searchBox.style.display = 'none';
    }
});


// ✅ 전체메뉴 열기/닫기 버튼 기능
const allmenuOpenBtn = document.querySelector('.allmenu_wrap');
const allmenuCloseBtn = document.querySelector('.btn_allmenu_close');
const allmenu = document.querySelector('.allmenu_popup');

allmenuOpenBtn.addEventListener('click', function() {
    allmenu.style.display = 'flex';
    header.classList.remove('on');
});
allmenuCloseBtn.addEventListener('click', function() {
    allmenu.style.display = 'none';
});


// ✅ 제품 섹션(product_box) 안에 있는 각 li 요소 애니메이션
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


// ✅ ESG intro 영역 배경과 텍스트 색상 변경 애니메이션
gsap.to(".esg_intro", {
  backgroundColor: "#ffffff",
  scrollTrigger: {
    trigger: ".product_wrap",
    start: "bottom 60%",
    end: "bottom top",
    scrub: true
  }
});
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


// ✅ ESG 영역: 마우스 오버 시 이미지 변경
const esgImg = document.querySelectorAll('.esg_img img');
const esgCon = document.querySelectorAll('.esg_content div');

esgCon.forEach(function(item, i){
    item.addEventListener('mouseover', function(){
        esgImg.forEach(function(img) {
            img.classList.remove('active');
        });
        esgImg[i].classList.add('active');
    });
});


// ✅ 메인 배너 Swiper 슬라이드 설정
const slideDuration = 5000;
document.documentElement.style.setProperty('--slide-duration',`${slideDuration}ms`);

const mainSwiper = new Swiper('.main_swiper', {
    autoplay : { delay : slideDuration },
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
            return `<span class="num">${current}</span>
                    <div class="progress"><div class="bar"></div></div>
                    <span class="num">${total}</span>`;
        },
    },
});


// ✅ 뉴스 Swiper 슬라이드 설정
const newsSwiper = new Swiper('.news_swiper', {
    autoplay : { delay : slideDuration },
    loop: true,	
    slidesPerView:'4',
    spaceBetween: 60,
    pagination: { el: '.swiper-pagination', type: 'progressbar' },
    breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 20 },
        500: { slidesPerView: 2, spaceBetween: 40 },
        1000: { slidesPerView: 3, spaceBetween: 40 },
        1500: { slidesPerView: 4, spaceBetween: 60 }
    }
});


// ✅ 뉴스 영역 애니메이션
gsap.from(".news_swiper", {
  scrollTrigger: {
    trigger: ".news_wrap h2",
    start: "bottom 80%",
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
      trigger: ".news_swiper",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    delay: index * 0.2,
    ease: "power2.out"
  });
});


// ✅ 인재채용 섹션 애니메이션
gsap.utils.toArray(".recruit_content a").forEach((item, index) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: ".recruit_wrap",
      start: "top 30%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    delay: index * 0.2,
    ease: "power2.out"
  });
});


// ✅ 빠른메뉴(qmenu) 애니메이션
gsap.utils.toArray(".qmenu_item").forEach((item, index) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: ".qmenu_wrap",
      start: "top 30%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    delay: index * 0.2,
    ease: "power2.out"
  });
});


// ✅ 인재채용 영역에서 마우스를 따라다니는 커스텀 커서 구현
const cursor = document.querySelector(".custom-cursor");
const recruitSection = document.querySelector(".recruit_wrap");
const links = recruitSection.querySelectorAll(".recruit_content a");

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

cursor.style.display = "none"; // 기본은 숨김

document.addEventListener("mousemove", (e) => {
  const inRecruit = recruitSection.contains(e.target);

  if (inRecruit) {
    cursor.style.display = "flex";
    mouseX = e.clientX;
    mouseY = e.clientY;
  } else {
    cursor.style.display = "none";
  }
});

function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.2;
  cursorY += (mouseY - cursorY) * 0.2;
  cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
  requestAnimationFrame(animateCursor);
}
animateCursor();


// ✅ 전체메뉴 토글 - 하위메뉴 펼치고 접기
document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".allmenu_toggle");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();

      const currentActive = document.querySelector(".allmenu_toggle.active");
      if (currentActive && currentActive !== toggle) {
        currentActive.classList.remove("active");
        const prevUl = currentActive.nextElementSibling;
        if (prevUl) prevUl.classList.remove("active");
      }

      this.classList.toggle("active");
      const submenu = this.nextElementSibling;
      if (submenu) submenu.classList.toggle("active");
    });
  });
});


// ✅ 섹션 단위로 스크롤 이동하는 기능 구현
function getFullSections() {
  const isMobile = window.innerWidth <= 801;

  return [
    document.querySelector(".main_wrap"),
    document.querySelector(".product_wrap"),
    document.querySelector(".esg_intro"),
    ...(isMobile ? [] : [document.querySelector(".esg_box")]),
    document.querySelector(".news_wrap"),
    document.querySelector(".recruit_wrap"),
    document.querySelector(".qmenu_wrap"),
    document.querySelector("footer")
  ];
}

let fullSections = getFullSections();
let currentSection = 0;
let isAnimating = false;
let scrollTimeout = null;

// 브라우저 크기 바뀌면 다시 섹션 목록 업데이트
window.addEventListener("resize", () => {
  fullSections = getFullSections();
});

// 휠로 한 섹션씩 이동
window.addEventListener("wheel", (e) => {
  e.preventDefault();
  if (isAnimating) return;

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    const delta = e.deltaY;

    if (delta > 0 && currentSection < fullSections.length - 1) {
      scrollToSection(currentSection + 1);
    } else if (delta < 0 && currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  }, 100);
}, { passive: false });

// 섹션 이동 애니메이션
function scrollToSection(index) {
  if (index === currentSection) return;

  isAnimating = true;

  gsap.to(window, {
    scrollTo: {
      y: fullSections[index],
      offsetY: 100,
      autoKill: false
    },
    duration: 1,
    ease: "power2.out",
    onComplete: () => {
      isAnimating = false;
      currentSection = index;
    }
  });
}
