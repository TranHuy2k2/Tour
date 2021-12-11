// Modal Handling
var modalContainer = document.getElementsByClassName('modal-container')[0];
var footerLinks = document.getElementsByClassName('footer-line-content-item');
var modalOverlay = document.getElementsByClassName('modal-overlay')[0];
var modalOk = document.querySelector('.modal button');
var tabPanes = document.getElementsByClassName('tab-pane');
for (var footerLink of footerLinks){
    footerLink.addEventListener('click', function(){
        modalContainer.classList.add('open');
        modalOverlay.style.display =' block';

    })
}
for (var tab of tabPanes){
    tab.addEventListener('click', function(){
        modalContainer.classList.add('open');
        modalOverlay.style.display =' block';

    })
}
modalOk.addEventListener('click', function(){
    modalContainer.classList.remove('open');
    modalOverlay.style.display =' none';

})
modalContainer.addEventListener('click', function(){
    modalContainer.classList.remove('open');
    modalOverlay.style.display =' none';
})
// End Modal Handling

//Image Slider
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = document.querySelectorAll('.slide');
const slideIcons = document.querySelectorAll('.slide-icon');
const slidesNum = slides.length;
var current = 0;
nextBtn.addEventListener('click', function(){
    for(var idx = 0; idx < slidesNum; idx++){
        slides[idx].classList.remove('active');
        slideIcons[idx].classList.remove('active');
    }
    current ++;

    if (current > (slidesNum - 1)){
        current = 0 ;
    }
    slides[current].classList.add('active');
    slideIcons[current].classList.add('active');
});
prevBtn.addEventListener('click', function(){
    for(var idx = 0; idx < slidesNum; idx++){
        slides[idx].classList.remove('active');
        slideIcons[idx].classList.remove('active');
    }
    current --;
    if (current < 0){
        current = slidesNum - 1;
    }
    slides[current].classList.add('active');
    slideIcons[current].classList.add('active');
});
var playSlider;
function repeater(){
    playSlider = setInterval(function(){
        for(var idx = 0; idx < slidesNum; idx++){
            slides[idx].classList.remove('active');
            slideIcons[idx].classList.remove('active');
        }
        current ++;
    
        if (current > (slidesNum - 1)){
            current = 0 ;
        }
        slides[current].classList.add('active');
        slideIcons[current].classList.add('active');
    },3500)
}
repeater();

slider.addEventListener('mouseover', function(){
    clearInterval(playSlider)
})

slider.addEventListener('mouseout', function(){
    repeater();

})
// End Image Slider

// Tabs UI
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');

const line = $('.tabs .line');
const tabActive = $('.tab-item.active');

function setLine(tabActive){
    line.style.left = tabActive.offsetLeft + 'px';
    line.style.width = tabActive.offsetWidth + 'px';
}
setLine(tabActive);
tabs.forEach((tab, index) => {
    const pane = panes[index];
    tab.onclick = function(){
        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');
        
        this.classList.add('active');
        pane.classList.add('active');
        setLine(this);

    }
})
// End Tabs UI