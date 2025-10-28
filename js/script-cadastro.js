// TÓPICO 9: ESTRUTURA PARA VALIDAÇÃO DE FORMULÁRIOS
// Metáfora: O JavaScript é o porteiro do formulário. Ele intercepta a submissão para validar os dados.
console.log("O SCRIPT ESTÁ SENDO LIDO!"); 

document.addEventListener('DOMContentLoaded', function() {
    
    const formCadastro = document.querySelector('#form-cadastro');

    if (formCadastro) {
        formCadastro.addEventListener('submit', function(event) {
            // ESTA LINHA É A CHAVE: impede o envio nativo do formulário
            event.preventDefault(); 
            validarFormulario();
        });
    }
    
    // TÓPICO 10, 11 e 12: Validação e Coleta de Dados
    function validarFormulario() {
        
        // 1. Obter todos os valores dos campos
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const dataNasc = document.getElementById('data-nasc').value.trim();
        const cpf = document.getElementById('cpf').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const cep = document.getElementById('cep').value.trim();
        const endereco = document.getElementById('endereco').value.trim();
        const cidade = document.getElementById('cidade').value.trim();
        const estado = document.getElementById('estado').value.trim();

        // =======================================================
        // 2. Validação de Presença (TÓPICO 10: Se está vazio?)
        // =======================================================
        if (nome === '' || nome.length < 5) {
            alert('Por favor, preencha o Nome Completo (mínimo 5 caracteres).');
            return; 
        }

        if (email === '') {
            alert('Por favor, preencha o campo E-mail.');
            return;
        }

        if (dataNasc === '') {
            alert('Por favor, preencha a Data de Nascimento.');
            return;
        }
        
        if (cpf === '') {
            alert('Por favor, preencha o campo CPF.');
            return;
        }

        if (telefone === '') {
            alert('Por favor, preencha o campo Telefone.');
            return;
        }
        
        if (cep === '') {
            alert('Por favor, preencha o campo CEP.');
            return;
        }

        if (endereco === '') {
            alert('Por favor, preencha o Endereço (Rua/Avenida).');
            return;
        }

        if (cidade === '') {
            alert('Por favor, preencha a Cidade.');
            return;
        }
        
        if (estado === '') { 
            alert('Por favor, selecione o Estado.');
            return;
        }

        // =======================================================
        // 3. Validação de Formato (TÓPICO 11: Se o padrão está correto?)
        // =======================================================
        
        // Metáfora: Agora o porteiro verifica se os documentos têm o CARIMBO e o FORMATO corretos.

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (!regexEmail.test(email)) {
            alert('Por favor, insira um E-mail válido.');
            return;
        }

        const regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        if (!regexCpf.test(cpf)) {
            alert('O CPF deve estar no formato 999.999.999-99.');
            return;
        }

        const regexTelefone = /^\(\d{2}\) (\d{4}-\d{4}|\d{5}-\d{4})$/;
        if (!regexTelefone.test(telefone)) {
            alert('O Telefone deve estar no formato (99) 9999-9999 ou (99) 99999-9999.');
            return;
        }

        const regexCep = /^\d{5}-\d{3}$/;
        if (!regexCep.test(cep)) {
            alert('O CEP deve estar no formato 99999-999.');
            return;
        }

        // =======================================================
        // 4. Coleta de Dados e Simulação de Envio (TÓPICO 12)
        // =======================================================
        
        // Se o código chegou até aqui, TUDO está preenchido e formatado corretamente!
        
        const dadosFormulario = {
            nome: nome,
            email: email,
            dataNascimento: dataNasc,
            cpf: cpf,
            telefone: telefone,
            cep: cep,
            endereco: endereco,
            cidade: cidade,
            estado: estado
        };

        console.log("--- DADOS PRONTOS PARA ENVIO (SIMULAÇÃO) ---");
        console.log(dadosFormulario);
        console.log("-------------------------------------------");
        
        alert("Validação OK! Os dados foram coletados e estão prontos para serem enviados ao servidor (Veja o Console F12 para ver o objeto de dados).");
        
        // Não adicione mais código aqui. O return implícito no final da função é o suficiente.
    }
}); // Fim do DOMContentLoaded