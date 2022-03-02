let cell = document.querySelectorAll(".box")
let player = 1

cell.forEach(input => input.addEventListener('click', () => {

    if (player === 1 && input.textContent === '') {
        input.innerHTML = `X`;
        document.querySelector(".circle-blue").style.display ="inline-block";
        document.querySelector(".circle-orange").style.display ="none";
        player = 2;
    } else if (player === 2 && input.textContent === '') {
        document.querySelector(".circle-blue").style.display ="none";
        document.querySelector(".circle-orange").style.display ="inline-block";
        input.innerHTML = `O`;
        player = 1;
    }
    // cell.forEach(cell => {
    //     if (cell.innerHTML !== ``) {
    //         document.querySelector(".message").style.display ="flex"
    //         } 
    // })
}))

function reset() {
    cell.forEach(cell => {
        cell.innerHTML = ``
        player = 1;
        document.querySelector(".circle-orange").style.display ="inline-block";
        document.querySelector(".circle-blue").style.display ="none";
        document.querySelector(".message").style.display ="none";
    });
}