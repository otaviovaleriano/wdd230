const images = document.querySelectorAll('[data-src]');

const optionsImg = { threshold: .8, rootMargin: '0px 0px 200px 0px' };

function preloadImage(img) {
    const source = img.getAttribute('data-src');
    if (!source) {
        return;
    }
    img.src = source;
}
const io = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
            // console.log(entries);
        })

    }, optionsImg
);


images.forEach(img => {
    io.observe(img);
});

if (localStorage.getItem('lastVisit')) {
    // If it exists, get the timestamp and display the last visit date and time
    let lastVisit = new Date(parseInt(localStorage.getItem('lastVisit')));
    let messageElement = document.getElementById('days');
    messageElement.innerHTML = 'Welcome back! Your last visit was on ' + lastVisit.toLocaleString();
} else {
    // If it doesn't exist, set the timestamp to the current time and display the welcome message
    localStorage.setItem('lastVisit', Date.now().toString());
    let messageElement = document.getElementById('days');
    messageElement.innerHTML = 'Welcome! This is your first visit to the page.';
}