/* 
    Este archivo actulizate-item.js junta todo los códigos JavaScript necesario
    para el funcionamiento de diferentes elementos de la interfaz. 
    A diferencia de index.js este archivo ejecuta el código para que funcione el sidebar
    de las páginas de Actualizate y no entre en conflicto con otras funcionalidades.
*/
// *************************************************************************
//  ************************** Importaciones **************************
import menu from "./menu.js";
import menuActualizate from "./menu_actualizate.js";
import scrollTop from "./scroll_top_btn.js";

const d = document;
// *************************************************************************
// Cuando se cargue todo el documento HTML en el Navegador se ejecuta el código para los elementos.
d.addEventListener('DOMContentLoaded', () => {
    menu('menu-toggler img', 'nav-menu');
    menuActualizate('sidebar-toggler img', 'sidebar');
    scrollTop(".scroll-top-btn");
})