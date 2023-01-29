const button = document.querySelector('.btn');

function show() {
    button.classList.add('newstyle');
}

// }
// another option of function - arrow function
// button.addEventListener('click', () => {
//     button.classList.add('newstyle');
// })

button.addEventListener('click', show)