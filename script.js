// Função para mostrar os detalhes dos projetos ao clicar
function showProjectDetails(projectId) {
    const projectDetails = document.querySelectorAll('.project-details');
    projectDetails.forEach(detail => detail.style.display = 'none');

    const project = document.getElementById(projectId);
    project.style.display = 'block';
}

// Função para baixar o currículo (supondo que o arquivo esteja em formato PDF)
function downloadCV() {
    const cvUrl = 'cv-joao.pdf'; // Altere para o caminho do seu currículo
    const a = document.createElement('a');
    a.href = cvUrl;
    a.download = 'Curriculo_Joao_Silva.pdf';
    a.click();
}
