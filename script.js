/* -------------------------------------------------------------------------- */
/* Funcionalidade de Menu Mobile (Hambúrguer) */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* SOLUÇÃO DE SCROLL (CSS + JS ROBUSTO) */
/* -------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    // A. Funcionalidade Menu Mobile (Mantida do Passo 11.3)
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const allAnchorLinks = document.querySelectorAll('a[href^="#"]'); // Seleciona todos os links de âncora

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active') ? '&#10005;' : '&#9776;';
    });

    // B. Funcionalidade de Rolagem e Fechamento de Menu
    allAnchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            
            // 1. FECHAR MENU (SE ESTIVER ABERTO)
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '&#9776;';
            }

            // 2. FORÇAR ROLAGEM SUAVE (Fallback robusto)
            // Se o CSS scroll-behavior: smooth não funcionar, este código atua
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                e.preventDefault(); // Impede o salto imediato
                
                // Pega o elemento de destino
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // O scrollIntoView com 'smooth' força o comportamento em navegadores que 
                    // não reconhecem 'scroll-behavior: smooth' no HTML. 
                    targetElement.scrollIntoView({
                        behavior: 'smooth', 
                        block: 'start'
                    });
                    
                    // OBS: O CSS 'scroll-padding-top' no HTML ainda deve ser o responsável 
                    // por resolver o problema do header fixo.
                }
            }
        });
    });


}


);