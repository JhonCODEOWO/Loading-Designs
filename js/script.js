let btnLoader2 = null;
let barraCarga = null;
let txtPorcentaje = null;

let anchura = 0;

document.addEventListener('DOMContentLoaded', (evento) => {
    cargarElementosDom();
    cargarEventos();
});

function cargarElementosDom() {
    btnLoader2 = document.querySelector('.ejecutar-loader2');
    barraCarga = document.querySelectorAll('.loader-2__barra');
    txtPorcentaje = document.querySelectorAll('.porcent-barra');
}

function cargarEventos(params) {
    btnLoader2.addEventListener('click', () => cargarElemento(barraCarga));
}

function cargarElemento(elemento) {
    try {
        intervalID = setInterval(function () {
            if (anchura < 100) {
                anchura++;
                aplicarWidthCarga(barraCarga, anchura);
                aplicarTxtElement(txtPorcentaje, anchura + "%");
            } else {
                console.log("Anchura mayor a 100");
                anchura = 0;
                clearInterval(intervalID);
            }
        }, 20);
    } catch (error) {
        console.error(`Se ha producido una excepción en cargar elemento: ${error.message}`);
    }
}

function aplicarWidthCarga(elemento, cantidad) {
    //El elemento es un nodelist?
    if (elemento instanceof NodeList) {
        elemento.forEach((element)=> {
            element.style.width = `${cantidad}%`;
        });
    //Si no, aplicamos al elemento
    } else {
        elemento.style.width = `${anchura}%`;
    }
}

function aplicarTxtElement(elemento, texto){
    //El elemento es un nodelist?
    if (elemento instanceof NodeList) {
        elemento.forEach((element)=> {
            element.textContent = texto;
        });
    //Si no, aplicamos al elemento
    } else {
        elemento.style.width = texto;
    }
}