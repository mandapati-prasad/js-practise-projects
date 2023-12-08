const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

const getNumber = () => {
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    number.innerHTML = randomNumber;
}

btn.addEventListener("click",getNumber)