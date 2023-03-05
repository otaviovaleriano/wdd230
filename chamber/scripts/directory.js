// const url = 'https://otaviovaleriano.github.io/wdd230/chamber/json/data.json';

// async function getProphetData() {
//     const response = await fetch(url);
//     console.log(response)
//     const data = await response.json();
//     console.table(data.businesses); // note that we reference the prophet array of the data object given the structure of the json file
//     displayBusiness(data.businesses);
// }

// getProphetData();

// async function fetchData() {
//     const response = await fetch('https://otaviovaleriano.github.io/wdd230/chamber/json/data.json');
//     const data = await response.json();
//     console.table(data)
//     let output = '';

//     data.forEach(item => {
//         output += `
//             <div class="card">
//                 <h2>${item.name}</h2>
//                 <<p>${item.address}</p>
//                 <img src="${item.image}" alt="${item.name}">
//             </div>
//         `;
//     });

//     document.querySelector('.cards').innerHTML = output;
// }

// fetchData();

async function fetchData() {
    const response = await fetch("https://otaviovaleriano.github.io/wdd230/chamber/json/data.json");
    const data = await response.json();
    createTable(data.business);
    return data.business;
}

function createCard(business) {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = business.image;
    card.appendChild(image);

    const body = document.createElement('div');
    body.classList.add('card-body');

    const title = document.createElement('div');
    title.classList.add('card-title');
    title.textContent = business.name;
    body.appendChild(title);

    const address = document.createElement('div');
    address.classList.add('card-text');
    address.textContent = business.address;
    body.appendChild(address);

    const phone = document.createElement('div');
    phone.classList.add('card-text');
    phone.textContent = business.phone;
    body.appendChild(phone);

    const webUrl = document.createElement('a');
    webUrl.classList.add('card-link');
    webUrl.textContent = business['web-url'];
    webUrl.href = business['web-url'];
    webUrl.target = '_blank';
    body.appendChild(webUrl);

    card.appendChild(body);

    return card;
}

async function loadCards() {
    const cardsContainer = document.querySelector('.cards');
    const businesses = await fetchData();

    businesses.forEach(business => {
        const card = createCard(business);
        cardsContainer.appendChild(card);
    });
}

loadCards();

function createTable(data) {
    data.forEach((business) => {
        let tr = document.createElement('tr');
        let td_name = document.createElement('td');
        let td_address = document.createElement('td');
        let td_phone = document.createElement('td');
        let td_url = document.createElement('td');

        td_name.textContent = `${business.name}`;
        td_address.textContent = business.address;
        td_phone.textContent = business.phone;
        td_url.textContent = business['web-url'];


        tr.appendChild(td_name);
        tr.appendChild(td_address);
        tr.appendChild(td_phone);
        tr.appendChild(td_url);

        document.querySelector('table').appendChild(tr);

    })
}


// function createTable(data) {
//     // Get the HTML table element
//     var table = document.querySelector('table');

//     // Create the table header row
//     var header = table.createTHead();
//     var headerRow = header.insertRow(0);
//     var headers = Object.keys(data[0]);
//     for (var i = 0; i < headers.length; i++) {
//         var headerCell = headerRow.insertCell(i);
//         headerCell.textContent = headers[i];
//     }

//     // Create the table body rows
//     var body = table.createTBody();
//     for (var i = 0; i < data.length; i++) {
//         var row = body.insertRow(i);
//         for (var j = 0; j < headers.length; j++) {
//             var cell = row.insertCell(j);
//             cell.textContent = data[i][headers[j]];
//         }
//     }
// }