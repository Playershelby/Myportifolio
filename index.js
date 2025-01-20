// Seleciona os elementos do carrossel
const images = document.querySelectorAll('.carousel img');
const indicators = document.querySelectorAll('.carousel .indicators div');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

// Função para exibir a imagem correspondente ao índice
function showImage(index) {
    // Verifica se o índice está dentro dos limites
    if (index < 0 || index >= images.length) return;

    // Atualiza o índice atual
    currentIndex = index;

    // Oculta todas as imagens e remove a classe 'active' dos indicadores
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

// Função para navegar para a imagem anterior
function prevImage() {
    const newIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(newIndex);
}

// Função para navegar para a próxima imagem
function nextImage() {
    const newIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(newIndex);
}

// Função para abrir o WhatsApp (exemplo)
function abrirWhatsApp() {
    alert("Abrindo WhatsApp...");
    // window.open("https://wa.me/SEU_NUMERO", "_blank"); // Substitua SEU_NUMERO pelo número desejado
}

// Adiciona eventos aos botões de navegação
prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);

// Adiciona eventos aos indicadores
indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        const index = parseInt(indicator.getAttribute('data-index'));
        showImage(index);
    });
});

// Exibe a primeira imagem ao carregar a página
showImage(currentIndex);
setInterval(nextImage, 5000); // Muda a imagem a cada 5 segundos