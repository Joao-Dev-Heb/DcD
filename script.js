function showSection(id) {
    // Esconde todas as seções
    document.querySelectorAll('.form-section').forEach(s => {
        s.classList.remove('active');
    });
    
    // Mostra a seção selecionada
    const section = document.getElementById(id);
    if (section) {
        section.classList.add('active');
    }
    
    // Atualiza estado dos botões
    document.querySelectorAll('.container button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = document.querySelector(`.container button[data-target="${id}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    if (id === 'relatorios') {
        renderChart(); // Certifique-se que esta função existe
    }
}

function enviarFormulario(event, tipo) {
    event.preventDefault();
    // Adicione aqui a lógica de envio
    console.log(`Formulário ${tipo} enviado`);
    alert('Dados salvos com sucesso!'); // Temporário para teste
}

// Mostra a primeira seção ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    showSection('confinamento');
});