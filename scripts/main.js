let date = new Date();
console.log(date)

let year = date.getFullYear();
console.log(year)

document.querySelector('h1').innerHTML = `&copy ${year}`;

let currentDate = document.lastModified;

document.querySelector('div').textContent = `Last Updated: ${currentDate}`;