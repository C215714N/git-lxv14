/* Declaraciones */
    const 
        d = document,
        // Menu Hamburguesa
        navButton = d.querySelector('.navbar button'),
        navMenu = d.querySelector('.navbar .nav');
/* Funciones */


/* Eventos */
    // Menu Hamburguesa
    navButton.onclick = function(){
        navMenu.classList.toggle('active');
    }
