let cell = document.querySelectorAll(".box")
let player = 1

cell.forEach(input => input.addEventListener('click', () => {

    if (player === 1 && input.textContent === '') {
        input.innerHTML = `X`;
        player = 2;
    } else if (player === 2 && input.textContent === '') {
        input.innerHTML = `O`;
        player = 1;
    }
}))