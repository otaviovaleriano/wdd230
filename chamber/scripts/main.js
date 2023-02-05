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

const div = document.querySelector('.banner-meeting');

if (dayOfWeek === 1 || dayOfWeek === 6) {
    div.style.display = "block";
} else {
    div.style.display = "none";
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

const banner = document.querySelector('.banner-meeting');

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