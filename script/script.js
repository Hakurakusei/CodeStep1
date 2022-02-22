const swiper = new Swiper('.swiper', {
    effect:'fade',
    initialSlide: 0,
    shortSwipes: false,
    longSwipes:false,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

});

const header = document.querySelector(".header__body");
header.addEventListener('click',function(){
   document.querySelector('.header__menu').classList.toggle('open');
   document.querySelector('.nav').classList.toggle('open');
});

const child = document.querySelectorAll('.observe');


const cb = function(entries,observer){
    entries.forEach(entry => {
        //監視対象が表示されたとき
        if(entry.isIntersecting){
            entry.target.classList.add('inview');
            observer.unobserve(entry.target);
        }else{
            entry.target.classList.remove('inview');
        }
    });
}

// 監視した要素が画面に表示された時、隠れた時に実行される
const io = new IntersectionObserver(cb);
//observeは複数の要素を監視可能
for(let val of child){
    io.observe(val);
}

