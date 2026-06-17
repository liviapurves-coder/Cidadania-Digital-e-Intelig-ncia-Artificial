// Base de dados estável com URLs de imagens de alta resolução
const destinos = {
    brasil: {
        pais: "Brasil 🇧🇷",
        ponto: "Cristo Redentor",
        descricao: "Erguido no topo do Morro do Corcovado, no Rio de Janeiro, o monumento em estilo Art Déco é um símbolo internacional de fé e hospitalidade, oferecendo uma das vistas panorâmicas mais icônicas do planeta.",
        preco: "R$ 2.500,00",
        imagem: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80"
    },
    franca: {
        pais: "França 🇫🇷",
        ponto: "Torre Eiffel",
        descricao: "Localizada no Campo de Marte em Paris, esta imponente estrutura de ferro treliçado tornou-se o ícone global da França e um dos monumentos pagos mais visitados do mundo.",
        preco: "R$ 6.800,00",
        imagem: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80"
    },
    japao: {
        pais: "Japão 🇯🇵",
        ponto: "Monte Fuji",
        descricao: "Com seu cone simétrico perfeito coberto de neve, o Monte Fuji é um vulcão ativo considerado uma das três montanhas sagradas do país, inspirando artistas e peregrinos há séculos.",
        preco: "R$ 9.200,00",
        imagem: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80"
    },
    egito: {
        pais: "Egito 🇪🇬",
        ponto: "Pirâmides de Gizé",
        descricao: "O complexo arqueológico na periferia do Cairo abriga a Grande Pirâmide, a única das Sete Maravilhas do Mundo Antigo que ainda permanece de pé, revelando a grandiosidade da engenharia faraônica.",
        preco: "R$ 7.500,00",
        imagem: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=80"
    },
    italia: {
        pais: "Itália 🇮🇹",
        ponto: "Coliseu de Roma",
        descricao: "O imenso anfiteatro de pedra e concreto situado no coração de Roma é o maior já construído pelo Império Romano, carregando séculos de história sobre espetáculos e combates de gladiadores.",
        preco: "R$ 6.200,00",
        imagem: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80"
    },
    estados unidos: {
        pais: "Estados Unidos 🇺🇸",
        ponto: "Estátua da Liberdade",
        descricao: "Situada na Ilha da Liberdade, na Baía de Nova York, este colossal monumento foi um presente da França para celebrar a liberdade e a democracia, acolhendo milhões de imigrantes que chegavam ao país.",
        preco: "R$ 5.500,00",
        imagem: "https://images.unsplash.com/photo-1605538032432-a9f0c8d9baac?auto=format&fit=crop&w=800&q=80"
    }
};

// Captura dos elementos do DOM
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const resultSection = document.getElementById('result-section');
const welcomeMessage = document.getElementById('welcome-message');

const countryTitle = document.getElementById('country-title');
const placeName = document.getElementById('place-name');
const placeDescription = document.getElementById('place-description');
const placePrice = document.getElementById('place-price');
const placeImage = document.getElementById('place-image');

// Função utilitária para remover acentos e caracteres especiais
function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();
}

// Lógica de busca e renderização
function executarBusca() {
    const termoDigitado = searchInput.value;
    const termoFormatado = normalizarTexto(termoDigitado);

    if (destinos[termoFormatado]) {
        const destinoEncontrado = destinos[termoFormatado];
        
        // Atualiza a imagem e os textos
        placeImage.src = destinoEncontrado.imagem;
        placeImage.alt = `Imagem de ${destinoEncontrado.ponto}`;
        countryTitle.textContent = destinoEncontrado.pais;
        placeName.textContent = destinoEncontrado.ponto;
        placeDescription.textContent = destinoEncontrado.descricao;
        placePrice.textContent = destinoEncontrado.preco;

        // Altera a visibilidade das seções
        welcomeMessage.classList.add('hidden');
        resultSection.classList.remove('hidden');
        
        // Reinicia a animação do card para novas pesquisas
        resultSection.firstElementChild.style.animation = 'none';
        setTimeout(() => {
            resultSection.firstElementChild.style.animation = '';
        }, 10);

    } else {
        alert("País não cadastrado! Experimente buscar por: Brasil, França, Japão, Egito, Itália ou Estados Unidos.");
    }
}

// Ouvintes de eventos
searchBtn.addEventListener('click', executarBusca);

searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        executarBusca();
    }
});
