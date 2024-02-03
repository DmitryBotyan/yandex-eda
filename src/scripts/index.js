const hamburger = document.querySelector(".header__hamburger")
const overlay = document.querySelector('.overlay')
const overlayContainer = document.querySelector('.overlay__container')
const bar = document.querySelector('.bar')
const point1 = document.querySelector('.point-1')
const point2 = document.querySelector('.point-2')
const point3 = document.querySelector('.point-3')
const point4 = document.querySelector('.point-4')
const zp = document.querySelector('.zp')
const day = document.querySelector('.day')
const zakaz = document.querySelector('.z')

hamburger.addEventListener('click', () => {
    overlay.classList.remove('invisible')
})

overlay.addEventListener('click', (e) => {
    if (e.target != overlayContainer) {
        overlay.classList.add('invisible')
    }
})

point1.addEventListener('click', () => {
    zp.textContent = "52 000 ₽"
    day.textContent = "12"
    zakaz.textContent = "300"
    bar.classList.remove('d__container-3')
    bar.classList.remove('d__container-2')
    bar.classList.remove('d__container-1')
    bar.classList.add('d__container-0')
})

point2.addEventListener('click', () => {
    zp.textContent = "64 000 ₽"
    day.textContent = "16"
    zakaz.textContent = "400"
    bar.classList.remove('d__container-1')
    bar.classList.remove('d__container-2')
    bar.classList.remove('d__container-3')
    bar.classList.add('d__container-1')
})

point3.addEventListener('click', () => {
    zp.textContent = "80 000 ₽"
    day.textContent = "20"
    zakaz.textContent = "500"
    bar.classList.remove('d__container-3')
    bar.classList.add('d__container-2')
})

point4.addEventListener('click', () => {
    zp.textContent = "100 000 ₽"
    day.textContent = "24"
    zakaz.textContent = "600"
    bar.classList.remove('d__container-1')
    bar.classList.remove('d__container-2')
    bar.classList.add('d__container-3')
})