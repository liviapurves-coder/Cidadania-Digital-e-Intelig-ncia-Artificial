// Banco de dados simulado de países e pontos turísticos
const destinos = {
    brasil: {
        pais: "Brasil 🇧🇷",
        ponto: "Cristo Redentor",
        descricao: "Uma das Sete Maravilhas do Mundo Moderno, de braços abertos sobre o Rio de Janeiro.",
        preco: "R$ 2.500,00 (Voo + Hospedagem por pessoa)"
    },
    franca: {
        pais: "França 🇫🇷",
        ponto: "Torre Eiffel",
        descricao: "O maior símbolo de Paris, linda tanto de dia quanto iluminada durante a noite.",
        preco: "R$ 6.800,00 (Voo + Hospedagem por pessoa)"
    },
    japao: {
        pais: "Japão 🇯🇵",
        ponto: "Monte Fuji",
        descricao: "A montanha mais alta do Japão, um vulcão ativo cercado por lagos e paisagens de tirar o fôlego.",
        preco: "R$ 9.200,00 (Voo + Hospedagem por pessoa)"
    },
    egito: {
        pais: "Egito 🇪🇬",
        ponto: "Pirâmides de Gizé",
        descricao: "Monumentos milenares construídos pelos antigos faraós que desafiam o tempo.",
        preco: "R$ 7.500,00 (Voo + Hospedagem por pessoa)"
    },
    italia: {
        pais: "Itália 🇮🇹",
        ponto: "Coliseu de Roma",
        descricao: "O maior anfiteatro já construído, palco de grandes combates na Roma Antiga.",
        preco: "R$ 6.200,00 (Voo + Hospedagem por pessoa)"
    },
    estados unidos: {
        pais: "Estados Unidos 🇺🇸",
        ponto: "Estátua da Liberdade",
        descricao: "O grande monumento localizado na ilha de Manhattan, símbolo de liberdade em Nova York.",
        preco: "R$ 5.500,00 (Voo + Hospedagem por pessoa)"
    }
};

// Seleção de elementos do HTML
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const resultSection = document.getElementById('result-section');
const welcomeMessage = document.getElementById('welcome-message');

const countryTitle = document.getElementById('country-title');
const placeName = document.getElementById('place-name');
const placeDescription = document.getElementById('place-description');
const placePrice = document.getElementById('place-price');

// Função de busca
function buscarDestino() {
    // Pega o texto digitado, remove espaços extras e deixa em minúsculo
    const termoBusca = searchInput.value.trim().toLowerCase();

    if (destinos[termoBusca]) {
        const resultado = destinos[termoBusca];
        
        // Atualiza os dados no HTML
        countryTitle.textContent = resultado.pais;
        placeName.textContent = resultado.ponto;
        placeDescription.textContent = resultado.descricao;
        placePrice.textContent = resultado.preco;

        // Mostra o card e esconde a mensagem de boas-vindas
        resultSection.classList.remove('hidden');
        welcomeMessage.classList.add('hidden');
    } else {
        alert("País não encontrado! Tente pesquisar por: Brasil, Franca, Japao, Egito, Italia ou Estados Unidos.");
    }
}

// Evento de clique no botão
searchBtn.addEventListener('click', buscarDestino);

// Permite buscar ao apertar a tecla "Enter" no teclado
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        buscarDestino();
    }
});
