// TÓPICO 13: Templates JavaScript e Manipulação do DOM
// Metáfora: Esta função pega um objeto (os dados do projeto) e "carimba"
// um bloco HTML completo, injetando os valores (${...}) nos lugares certos.

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Dados: Uma lista de objetos para simular dados de um servidor
    const dadosProjetos = [
        {
            titulo: "Água Limpa para Todos",
            descricao: "Instalação de filtros e sistemas de captação de água em comunidades rurais com escassez.",
            ano: 2024,
            status: "Ativo",
            imagemUrl: "img/img-agua.jpg" // Caminho corrigido
        },
        {
            titulo: "Alfabetização Digital",
            descricao: "Cursos de informática e acesso à internet para idosos e jovens de baixa renda.",
            ano: 2023,
            status: "Concluído",
            imagemUrl: "img/img-digital.jpg"
        },
        {
            titulo: "Horta Comunitária",
            descricao: "Criação de hortas orgânicas em espaços urbanos para gerar renda e alimentação saudável.",
            ano: 2024,
            status: "Em Andamento",
            imagemUrl: "img/img-horta.jpg"
        }
    ];

    // 2. Elemento Alvo: O container onde vamos inserir o conteúdo
    const containerProjetos = document.getElementById('lista-projetos');

    // Verifica se o container existe
    if (!containerProjetos) {
        console.error("Erro: O elemento com ID 'lista-projetos' não foi encontrado na página.");
        return;
    }

    // 3. Template Literal (A forma HTML)
    function criarTemplateProjeto(projeto) {
        return `
            <article class="projeto-card">
                <img src="${projeto.imagemUrl}" alt="Imagem do projeto ${projeto.titulo}">
                <h3>${projeto.titulo} (${projeto.ano})</h3>
                <p>${projeto.descricao}</p>
                <span class="status ${projeto.status.toLowerCase().replace(' ', '-')}">Status: ${projeto.status}</span>
            </article>
        `;
    }

    // 4. Inserção no DOM: Itera sobre os dados e insere no container

    let htmlTotal = '';
    dadosProjetos.forEach(projeto => {
        // Gera o HTML do projeto e o adiciona à string total
        htmlTotal += criarTemplateProjeto(projeto);
    });

    // Injeta todo o HTML gerado de uma vez no container
    containerProjetos.innerHTML = htmlTotal;
    
    console.log("Projetos carregados dinamicamente com sucesso!");

}); // Fim do DOMContentLoaded