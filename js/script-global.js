// --- LÓGICA DO MODO ESCURO (Dark Mode) ---

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-dark-mode');
    const body = document.body;

    // 1. Lógica para Carregar a Preferência Salva (O carro lembra o banco)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    // 2. Lógica para Alternar o Tema ao Clicar (O Interruptor)
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            // Adiciona ou remove a classe 'dark-mode' no <body>
            body.classList.toggle('dark-mode'); 

            // 3. Lógica para Salvar a Nova Preferência no LocalStorage
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                this.textContent = '☀️ Mudar Tema'; // Muda o texto para "claro"
            } else {
                localStorage.setItem('theme', 'light');
                this.textContent = '🌙 Mudar Tema'; // Muda o texto para "escuro"
            }
        });
    }
});