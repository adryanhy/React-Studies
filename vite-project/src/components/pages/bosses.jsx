import React, { useState } from "react";
import './bosses.css';
import CardAnime from "../card-anime/CardAnime";

const Boss = () => {
    const chefes = [
        {
            title: "Malenia - Blade of Miquella",
            imageSrc: "./src/assets/malenia-horizontal.png",
            link: "https://eldenring.wiki.fextralife.com/Malenia+Blade+of+Miquella",
            text: "Malenia é uma figura trágica e poderosa dentro do universo de Elden Ring. Ela é a irmã gêmea de Miquella, outra figura chave no jogo. Ambos são filhos de Marika, a Rainha Eterna, e Radagon. Malenia é conhecida por sua ligação com a Podridão Escarlate, uma doença que a corrompe e afeta todos ao seu redor. Mesmo com essa maldição, ela é uma guerreira incrivelmente habilidosa e temida. Ela é a guardiã de Miquella, que está preso em um estado de sono profundo em um casulo. Malenia luta para proteger seu irmão e para encontrar uma cura para ele e para si mesma. A devoção de Malenia a Miquella é um aspecto central de sua personagem, mostrando tanto sua força quanto sua vulnerabilidade."
        },
        {
            title: "Abyss Watchers",
            imageSrc: "./src/assets/abyss.png",
            link: "https://darksouls3.wiki.fextralife.com/Abyss+Watchers",
            text: "Os Abyss Watchers foram uma vez uma ordem de cavaleiros que se dedicou a combater a escuridão do Abismo. No entanto, eles acabaram sendo corrompidos por sua busca implacável, tornando-se vítimas da própria escuridão que juraram destruir. A sede de batalha e a obsessão em eliminar qualquer sinal do Abismo levaram-nos a lutar uns contra os outros em uma guerra interna constante."
        },
        {
            title: "Maliketh, the Black Blade",
            imageSrc: "./src/assets/maliketh.png",
            link: "https://eldenring.wiki.fextralife.com/Maliketh,+the+Black+Blade",
            text: "Pouco se sabe sobre a verdadeira origem e motivações de Maliketh, pois ele é um personagem envolto em mistério e lendas antigas. Alguns dizem que ele foi uma vez um herói, caído em desgraça e corrompido pela escuridão que ele jurou combater. Outros afirmam que ele é uma entidade primordial, despertada para cumprir um propósito sombrio e misterioso."
        },
        {
            title: "Soul of Cinder",
            imageSrc: "./src/assets/soul-of-cinder-horizontal.png",
            link: "https://darksouls3.wiki.fextralife.com/Soul+of+Cinder",
            text: "O Soul of Cinder é mais do que apenas um boss; ele é uma manifestação dos espíritos dos antigos Lords of Cinder, que sacrificaram tudo para reacender o Fogo da Primeira Chama. Ele é a personificação dos inúmeros heróis que vieram antes do Chosen Undead, e sua existência é um lembrete dos incontáveis ciclos de renascimento e desespero que definem o mundo de Dark Souls."
        },
    ];

    const [showStory, setShowStory] = useState(Array(chefes.length).fill(false));

    const toggleStoryVisibility = (index) => {
        setShowStory((prevShowStory) => {
            const newShowStory = [...prevShowStory];
            newShowStory[index] = !newShowStory[index];
            return newShowStory;
        });
    };

    return (
        <div className="Anime">
            <h1>Breve história</h1>
            {chefes.map((chefe, index) => (
                <div key={index} className="chefe-container">
                    <h2>{chefe.title}</h2>
                    <CardAnime 
                        imageSrc={chefe.imageSrc}
                        link={chefe.link}
                    />
                    <button onClick={() => toggleStoryVisibility(index)}>
                        {showStory[index] ? "Esconder história" : "Ver história"}
                    </button>
                    {showStory[index] && <p className="texto-historia">{chefe.text}</p>}
                </div>
            ))}
        </div>
    );
};

export default Boss;
