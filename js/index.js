/* 
    Este archivo index.js junta todo los códigos JavaScript necesario
    para el funcionamiento de diferentes elementos de la interfaz. 
    Ej: Carousel, Menu de Navegación, etc.
*/
// *************************************************************************
//  ************************** Importaciones **************************
import carousel from "./carousel.js";
import menu from "./menu.js";
import menuActualizate from "./menu_actualizate.js";
import scrollTop from "./scroll_top_btn.js";

//  ************************** Constantes **************************
const d = document,
$nextButton = d.querySelector('.carousel__btn-right img'),
$prevButton = d.querySelector('.carousel__btn-left img'),
$carouselItems = d.querySelectorAll('.carousel-item');

// *************************************************************************
// Cuando se cargue todo el documento HTML en el Navegador se ejecuta el código para los elementos.
d.addEventListener('DOMContentLoaded', () => {
    menu('menu-toggler img', 'nav-menu');
    carousel($prevButton, $nextButton, $carouselItems);
    scrollTop(".scroll-top-btn");
})