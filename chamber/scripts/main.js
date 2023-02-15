const hamburger = document.querySelector('.ham');

let clickCounter = 1;
hamburger.addEventListener('click', () => {

    clickCounter = clickCounter + 1

    if (clickCounter % 2 == 0 && !(document.querySelector('.navContainer').classList.contains('large'))) {
        document.querySelector('.navContainer').classList.toggle('on');
        const navDiv = document.querySelector('.navContainer');
        const navBar = document.createElement('nav');
        navDiv.appendChild(navBar);

        const a1 = document.createElement('a');
        a1.setAttribute("href", "#");
        a1.textContent = "Discover";
        navBar.appendChild(a1);

        const a2 = document.createElement('a');
        a2.setAttribute("href", "#");
        a2.textContent = "Directory";
        navBar.appendChild(a2);

        const a3 = document.createElement('a');
        a3.setAttribute("href", "#");
        a3.textContent = "Join";
        navBar.appendChild(a3);

        const a4 = document.createElement('a');
        a4.setAttribute("href", "#");
        a4.textContent = "Contact";
        navBar.appendChild(a4);

    } else {
        document.querySelector('nav').remove()
        document.querySelector('.navContainer').classList.toggle('on');
    }
});

function reportWindowSize() {
    if (window.innerWidth >= 940 && !(document.querySelector('.navContainer').classList.contains('on'))) {
        document.querySelector('.navContainer').classList.toggle('on');
        document.querySelector('.navContainer').classList.toggle('large');
        const navDiv = document.querySelector('.navContainer');
        const navBar = document.createElement('nav');
        navDiv.appendChild(navBar);

        const a1 = document.createElement('a');
        a1.setAttribute("href", "../chamber/discover.html");
        a1.textContent = "Discover";
        navBar.appendChild(a1);

        const a2 = document.createElement('a');
        a2.setAttribute("href", "#");
        a2.textContent = "Directory";
        navBar.appendChild(a2);

        const a3 = document.createElement('a');
        a3.setAttribute("href", "#");
        a3.textContent = "Join";
        navBar.appendChild(a3);

        const a4 = document.createElement('a');
        a4.setAttribute("href", "#");
        a4.textContent = "Contact";
        navBar.appendChild(a4);
    } else if (window.innerWidth < 940 && document.querySelector('.navContainer').classList.contains('on') && document.querySelector('.navContainer').classList.contains('large')) {
        document.querySelector('.navContainer').classList.toggle('on');
        document.querySelector('.navContainer').classList.toggle('large');
        document.querySelector('nav').remove()
    }
}

window.addEventListener('resize', reportWindowSize);

window.addEventListener('DOMContentLoaded', reportWindowSize);


const dateToday = document.querySelector('.date');
const options = {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
};

dateToday.textContent = `${new Date().toLocaleDateString("en-US", options)}`;


const lastModified = document.querySelector('#lastModified');
lastModified.textContent = `Last Modification: ${document.lastModified}`


const date = new Date();
let year = date.getFullYear();
console.log(year);


document.querySelector('#currentYear').innerHTML = `&copy;${year} Londrina's Chamber of Commerce | Otavio Silva <br> WDD 230 Project `

const dayOfWeek = date.getDay();

const banner = document.querySelector('.banner-meeting');

if (dayOfWeek === 1 || dayOfWeek === 2) {
    banner.style.display = "block";
} else {
    banner.style.display = "none";
}

// const banner = document.querySelector('.banner-meeting');

// let isHighlighted = false;
// setInterval(() => {
//     if (isHighlighted) {
//         banner.style.backgroundColor = "transparent";
//     } else {
//         banner.style.backgroundColor = "#0090C1";
//     }
//     isHighlighted = !isHighlighted;
// }, 500);

// let opacity = 1;
// const fadeInOut = setInterval(() => {
//     banner.style.opacity = opacity;
//     opacity = opacity === 1 ? 0.5 : 1;
// }, 500);

let opacity = 0;
let fadeIn = true;
setInterval(() => {
    if (fadeIn) {
        opacity += 0.1;
        if (opacity >= 1) {
            fadeIn = false;
        }
    } else {
        opacity -= 0.1;
        if (opacity <= 0) {
            fadeIn = true;
        }
    }
    banner.style.opacity = opacity;
}, 100);

// windchill calculation

const temp = document.querySelector('.t').textContent;
const windSpeed = document.querySelector('.ws').textContent;

let chill = Math.round((35.74 + (0.6215 * temp)) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16)));

console.log(chill)

if (temp <= 50 && windSpeed >= 3) {
    let windChill = document.querySelector('.wc').textContent = chill
}



// Discover Page - images loading 
// const images = document.querySelectorAll('[data-src]');

// const optionsImg = { threshold: .8, rootMargin: '0px 0px 200px 0px' };

// function preloadImage(img) {
//     const source = img.getAttribute('data-src');
//     if (!source) {
//         return;
//     }
//     img.src = source;
// }
// const io = new IntersectionObserver(
//     (entries) => {
//         entries.forEach(entry => {
//             if (!entry.isIntersecting) {
//                 return;
//             } else {
//                 preloadImage(entry.target);
//                 io.unobserve(entry.target);
//             }
//             console.log(entries);
//         })

//     }, optionsImg
// );


// images.forEach(img => {
//     io.observe(img);
// });


/* local storage activity */

localStorage.setItem('name', 'Julie Anderson - Permanent');

sessionStorage.setItem('class', 'WDD 230 - Not Permanent');