let btnLoader2 = null;
let barraCarga = null;
let txtPorcentaje = null;

//Variables que seleccionaran los elementos para el cuerpo de la pagina y la carga que se va a mostrar
let imgloader = null;
let contentMain = null;

let anchura = 0;

document.addEventListener('DOMContentLoaded', (evento) => {
    cargarElementosDom();
    cargarEventos();
    mostrar_ocultarElemento(imgloader);
    mostrar_ocultarElemento(contentMain);
});

function cargarElementosDom() {
    btnLoader2 = document.querySelector('.ejecutar-loader2');
    barraCarga = document.querySelectorAll('.loader-2__barra');
    txtPorcentaje = document.querySelectorAll('.porcent-barra');
    imgloader = document.querySelector('.img-loader');
    contentMain = document.querySelector('.content-gral');
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

//Solo funciona en linea de codigo general, no accede a las hojas de estilo
function mostrar_ocultarElemento(elemento){
    try {
        if (elemento.style.display === 'none') {
            elemento.style.display = 'block';
            console.log(`Se ha mostrado el elemento${elemento}`);
        }else{
            elemento.style.display = 'none';
            console.log(`Se ha ocultado el elemento ${elemento}`);
        }
    } catch (error) {
        console.error(`Excepción en el método mostrar_ocultarElemento ${error.message}`);
    }
}