var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

// header slider
var navArrowLeft = $('.arrow-left');
var navArrowRight = $('.arrow-right');

var prev = $('.slick-prev');
var next = $('.slick-next');
var counts = 0;
var i = 1;
var transform = [
    'translateX(0)',
    'translateX(-100%)',
    'translateX(-200%)',
    'translateX(-300%)',
    'translateX(-400%)',
    'translateX(-500%)',
    'translateX(-600%)',
    'translateX(-700%)',
    'translateX(-800%)',
    'translateX(-900%)',
    'translateX(-1000%)',
    'translateX(-1100%)',
];

const stickDots = $$('.stick');
stickDots.forEach(function (stick, index) {
    stick.onclick = function () {
        $('.stick-acctive').classList.remove('stick-acctive')
        this.classList.add('stick-acctive')
        $('.banner-img').style.transform = transform[index];
        counts = index;
        i = index;
    };
})

setInterval(() => {
    $('.banner-img').style.transform = transform[i];
    $('.stick-acctive').classList.remove('stick-acctive')
    stickDots[i].classList.add('stick-acctive');
    counts = i;

    i++;
    if (i>11) {
        i = 0;
    }
}, 5000);



// CountDown Timer
/*setInterval(() => {
    let currentHours = new Date().getHours();
    var saleTime = new Date();
    var time = new Date();
    if (currentHours<6) {
        saleTime.setHours(6);
        saleTime.setMinutes(0); saleTime.setSeconds(0);
    } else if (currentHours<12) {
        saleTime.setHours(12);
        saleTime.setMinutes(0); saleTime.setSeconds(0);
    } else if (currentHours<18) {
        saleTime.setHours(18);
        saleTime.setMinutes(0); saleTime.setSeconds(0);
    } 
    else {
        saleTime.setHours(23);
        saleTime.setMinutes(59); saleTime.setSeconds(59); saleTime.setMilliseconds(59)
    }
    let distance = saleTime - time;
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let h = hours < 10? '0' + hours : hours;
    let m = minutes < 10? '0' + minutes : minutes;
    let s = seconds < 10? '0' + seconds : seconds;
    $('.hour').innerHTML = h;
    $('.min').innerHTML = m;
    $('.sec').innerHTML = s;
}, 1000);*/

// suggestion__more
function suggestionMore() {
    let more = $('.suggestion__more');
    let collapse = $('.suggestion__collapse')
    more.onclick = function () {
        $('.clone').style.display = 'flex';
        collapse.style.display = 'block';
       
    }
  
}
suggestionMore();