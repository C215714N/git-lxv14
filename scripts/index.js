/* Declaraciones */
    const 
        d = document,
        // Menu Hamburguesa
        navButton = d.querySelector('.navbar button'),
        navMenu = d.querySelector('.navbar .nav');
/* Funciones */
    function toggle(target, btn, className, [a,b]){
        target.classList.toggle(className) ?
        btn.classList.replace(a,b) :
        btn.classList.replace(b,a)
    }

/* Eventos */
    // Menu Hamburguesa
    navButton.onclick = toggle(navMenu, navButton, 'active', ['icon-toggle', 'icon-close'])
