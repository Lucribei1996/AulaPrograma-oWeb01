// TÓPICO 8: LÓGICA DO MENU HAMBÚRGUER (script.js)

// 1. Pegar os elementos do DOM
const menuToggle = document.querySelector('.menu-toggle');
const menuPrincipal = document.getElementById('menu-principal');

// 2. Criar a função que alterna a exibição do menu
function toggleMenu() {
    // Alterna a classe 'active' no botão (útil para animações futuras)
    menuToggle.classList.toggle('active');
    
    // Altera o estado de acessibilidade (ARIA)
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    menuToggle.setAttribute('aria-expanded', !isExpanded);

    // Metáfora: Quando você toca uma campainha (o botão), 
    // a porta (o menu) alterna entre estar fechada (display: none) e aberta (display: flex).
    if (menuPrincipal.style.display === 'flex' || menuPrincipal.style.display === 'block') {
        menuPrincipal.style.display = 'none';
    } else {
        menuPrincipal.style.display = 'flex'; 
    }
}

// 3. Atribuir a função ao evento de clique
menuToggle.addEventListener('click', toggleMenu);