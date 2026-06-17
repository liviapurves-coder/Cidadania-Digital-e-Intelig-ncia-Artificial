// Banco de dados interno do aplicativo
const database = {
    brasil: {
        pais: "Brasil 🇧🇷",
        local: "Cristo Redentor",
        texto: "Uma das novas Sete Maravilhas do Mundo. O monumento de braços abertos no topo do Corcovado vigia a espetacular Baía do Rio de Janeiro.",
        valor: "R$ 2.400,00",
        imgUrl: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80"
    },
    franca: {
        pais: "França 🇫🇷",
        local: "Torre Eiffel",
        texto: "Construída em 1889, a obra-prima de ferro de Gustave Eiffel define o horizonte de Paris e se destaca como um dos monumentos mais românticos do mundo.",
        valor: "R$ 6.900,00",
        imgUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80"
    },
    japao: {
        pais: "Japão 🇯🇵",
        local: "Monte Fuji",
        texto: "O icônico vulcão de cone perfeito coberto de neve. É um marco espiritual sagrado e uma das paisagens mais fotografadas da Ásia.",
        valor: "R$ 9.500,00",
        imgUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80"
    },
    egito: {
        pais: "Egito 🇪🇬",
        local: "Pirâmides de Gizé",
        texto: "Erguidas há mais de 4.500 anos, são as únicas estruturas sobreviventes das Sete Maravilhas do Mundo Antigo, guardadas pela misteriosa Esfinge.",
        valor: "R$ 7.200,00",
        imgUrl: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=80"
    },
    italia: {
        pais: "Itália 🇮🇹",
        local: "Coliseu de Roma",
        texto: "O maior anfiteatro do Império Romano. Um colossal monumento de pedra que contava com batalhas de gladiadores e espetáculos dramáticos históricos.",
        valor: "R$ 6.100,00",
        imgUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80"
    },
    estados unidos: {
        pais: "Estados Unidos 🇺🇸",
        local: "Estátua da Liberdade",
        texto: "Presenteada pela França em 1886, a imensa estátua de cobre na entrada do porto de Nova York tornou-se o símbolo global máximo de liberdade e esperança.",
        valor: "R$ 5.800,00",
        imgUrl: "https://images.unsplash.com/photo-1605538032432-a9f0c8d9baac?auto=format&fit=crop&w=800&q=80"
    }
};

// Captura de elementos DOM
const inputElement = document.getElementById('search-input');
const btnElement = document.getElementById('search-btn');
const welcomeBlock = document.getElementById('welcome-message');
const cardBlock = document.getElementById('destination-result');

const elImg = document.getElementById('card-img');
const elBadge = document.getElementById('country-badge');
const elTitle = document.getElementById('place-title');
const elText = document.getElementById('place-text');
const elCost = document.getElementById('place-cost');

// Remove acentos e padroniza entrada do usuário
function formatInput(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();
}

// Executa a filtragem e exibição do local
function searchDestination() {
    const cleanQuery = formatInput(inputElement.value);

    if (database[cleanQuery]) {
        const data = database[cleanQuery];

        // Atualiza a interface
        elImg.src = data.imgUrl;
        elImg.alt = `Fotografia de ${data.local}`;
        elBadge.textContent = data.pais;
        elTitle.textContent = data.local;
        elText.textContent = data.texto;
        elCost.textContent = data.valor;

        // Alterna elementos ocultos/visíveis
        welcomeBlock.style.display = 'none';
        cardBlock.style.display = 'block';

        // Reseta animação CSS para re-executar transição visual
        cardBlock.style.animation = 'none';
        cardBlock.offsetHeight; // Força re-renderização
        cardBlock.style.animation = null;

    } else {
        alert("País indisponível no sistema. Digite: Brasil, França, Japão, Egito, Itália ou Estados Unidos.");
    }
}

// Triggers (Gatilhos de ativação)
btnElement.addEventListener('click', searchDestination);
inputElement.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') searchDestination();
});
