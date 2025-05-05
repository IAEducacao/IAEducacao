// Script para interatividade da página Educacional IA

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM carregado. Adicionando interatividade.");

    // Funcionalidade para Quizzes (Exemplo)
    const quizContainers = document.querySelectorAll('.quiz-container');

    quizContainers.forEach(container => {
        const form = container.querySelector('form');
        const feedbackElement = container.querySelector('.quiz-feedback');
        const submitButton = form.querySelector('button[type="submit"]');

        if (form && feedbackElement && submitButton) {
            form.addEventListener('submit', (event) => {
                event.preventDefault(); // Impede o envio padrão do formulário
                const selectedOption = form.querySelector('input[name="quiz-option"]:checked');

                if (selectedOption) {
                    const correctAnswer = form.dataset.correctAnswer; // Armazena a resposta correta no data attribute do form
                    if (selectedOption.value === correctAnswer) {
                        feedbackElement.textContent = 'Resposta Correta! 🎉';
                        feedbackElement.className = 'quiz-feedback correct';
                    } else {
                        feedbackElement.textContent = `Resposta Incorreta. A resposta correta era: ${correctAnswer}.`;
                        feedbackElement.className = 'quiz-feedback incorrect';
                    }
                    feedbackElement.style.display = 'block'; // Mostra o feedback
                    submitButton.disabled = true; // Desabilita o botão após responder
                    // Opcional: desabilitar todas as opções após a resposta
                    form.querySelectorAll('input[name="quiz-option"]').forEach(input => {
                        input.disabled = true;
                    });
                } else {
                    feedbackElement.textContent = 'Por favor, selecione uma opção.';
                    feedbackElement.className = 'quiz-feedback incorrect'; // Reutiliza a classe de incorreto para alerta
                    feedbackElement.style.display = 'block';
                }
            });
        }
    });

    // A funcionalidade de colapsar/expandir já é nativa do <details> e <summary>
    // Nenhum JS adicional é estritamente necessário para isso, mas pode ser adicionado para animações ou controle extra se desejado.

    // Funcionalidade para scroll suave do menu de navegação
    const navLinks = document.querySelectorAll('#menu-navegacao a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o comportamento padrão do link
            const targetId = this.getAttribute('href'); // Pega o href (ex: #introducao)
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calcula a posição do elemento alvo ajustando pela altura do menu fixo
                const headerOffset = document.querySelector('nav#menu-navegacao').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth" // Efeito de rolagem suave
                });
            }
        });
    });

});

