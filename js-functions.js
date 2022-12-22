
/* FUNCIÓN PARA EL FORMULARIO */

var inputs = document.getElementsByClassName('formulario__input');
for (var i = 0; i < inputs.length; i++) {

    inputs[i].addEventListener('keyup', function () {
        if (this.value.length >= 1) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    })
}

/* FIN FUNCIÓN PARA EL FORMULARIO */



/* FUNCIÓN PARA EL SLIDER2 */

const slider = document.querySelector("#slider2");
let sliderSection = document.querySelectorAll(".slider2__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider2__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function Prev() {
    let sliderSection = document.querySelectorAll(".slider2__section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}


btnRight.addEventListener('click', function () {
    Next();
});

btnLeft.addEventListener('click', function () {
    Prev();
});

/*Esta función es para que se desplace el slider automaticamente */
setInterval(function(){
    Next();
}, 6000);



/* FIN FUNCIÓN PARA EL SLIDER2 */






