document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeStylesheet = document.getElementById('theme-stylesheet');
    let currentTheme = localStorage.getItem('theme-preference') || 'light';

    function toggleTheme() {
        if (currentTheme === 'light') {
            currentTheme = 'dark';
        } else {
            currentTheme = 'light';
        }

        themeStylesheet.href = `/src/styles/index-${currentTheme}.css`;
        localStorage.setItem('theme-preference', currentTheme);
    }

    themeStylesheet.href = `/src/styles/index-${currentTheme}.css`;

    themeToggle.addEventListener('click', toggleTheme);

});


const sliderItems = [
    {
        id: 1,
        img: './images/car1.jpeg'
    },
    {
        id: 2,
        img: './images/car2.jpeg'
    },
    {
        id: 3,
        img: './images/car3.jpeg'
    },
];

const container = document.querySelector('.container');
const sliderWrapper = document.getElementById('slider-wrapper');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

let slideIndex = 0;

function renderSlider() {
    sliderWrapper.innerHTML = '';
    sliderItems.forEach((item, index) => {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        slide.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.img})`;

        const infoContainer = document.createElement('div');
        infoContainer.classList.add('info-container');

        slide.appendChild(infoContainer);
        sliderWrapper.appendChild(slide);
    });

    sliderWrapper.style.transform = `translateX(${slideIndex * -100}vw)`;
}

function handleClick(direction) {
    if (direction === 'left') {
        slideIndex = slideIndex > 0 ? slideIndex - 1 : 2;
    } else {
        slideIndex = slideIndex < 2 ? slideIndex + 1 : 0;
    }

    sliderWrapper.style.transform = `translateX(${slideIndex * -100}vw)`;
}

leftArrow.addEventListener('click', () => handleClick('left'));
rightArrow.addEventListener('click', () => handleClick('right'));

renderSlider();

setInterval(() => {
    slideIndex = slideIndex < 2 ? slideIndex + 1 : 0;
    sliderWrapper.style.transform = `translateX(${slideIndex * -100}vw)`;
}, 4000);
