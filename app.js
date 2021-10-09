let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".btnRegistro")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];


 abrir.addEventListener("click",function(e){
    e.preventDefault();

    modalC.style.opacity="1";
    modalC.style.visibility="visible";
    modal.classList.toggle("modal-close")

});


cerrar.addEventListener("click",function(){
    modal.classList.toggle("modal-close");
    setTimeout(function() {
        modalC.style.opacity="0";
        modalC.style.visibility="hidden";
    } ,800)
})

window.addEventListener("click",function(e){
    console.log(e.target)

    if (e.target == modalC){
    modal.classList.toggle("modal-close");
    setTimeout(function() {
        modalC.style.opacity="0";
        modalC.style.visibility="hidden";
    }, 800)

  }

})

/* slider */
const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider__section');
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnDerecha = document.querySelector('#btn-derecha');
const btnIzq = document.querySelector('#btn-izquierda');

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

btnDerecha.addEventListener('click', moverDerecha);
btnIzq.addEventListener('click', moverIzq);
function moverDerecha()
{
    let sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 0.5s';
    setTimeout(() => {
       slider.style.transition = 'none' ;
       slider.insertAdjacentElement('beforeend', sliderSectionFirst);
       slider.style.marginLeft = '-100%';
    }, 500);
}
function moverIzq()
{
    let sliderSectionLast = document.querySelectorAll('.slider__section')[sliderSection.length - 1];
    slider.style.marginLeft = '0';
    slider.style.transition = 'all 0.5s';
    setTimeout(() => {
       slider.style.transition = 'none' ;
       slider.insertAdjacentElement('afterbegin', sliderSectionLast);
       slider.style.marginLeft = '-100%';
    }, 500);
}
