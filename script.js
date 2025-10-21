document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('navbar');
    const header = document.querySelector('header');

    // Funcionalidade 1: Menu Hamburguer (Responsividade)
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        const isExpanded = nav.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Opcional: Fechar o menu ao clicar em um link (para single-page)
    const navLinks = document.querySelectorAll('#navbar ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Funcionalidade 2: Cabeçalho Dinâmico (Muda a cor ao rolar)

    // Função para verificar a posição de rolagem
    function handleScroll() {
        // Verifica se a rolagem está no topo (quase zero)
        if (window.scrollY < 20) { 
            header.classList.add('header-topo');
        } else {
            header.classList.remove('header-topo');
        }
    }

    // 1. Aplica o estilo inicial ao carregar a página
    handleScroll();

    // 2. Adiciona o listener para o evento de rolagem
    window.addEventListener('scroll', handleScroll);
});