import React from "react";
import './animes.css'
import CardAnime from "../card-anime/CardAnime";



const Anime = () => {
    return (
        <div className="Anime">
            <h1>Demon Slayer</h1>
            <CardAnime
                imageSrc="./src/assets/banner-demon-slayer.png"
                text="Japão, era Taisho. Tanjiro, um bondoso jovem que ganha a vida vendendo carvão, descobre que sua família foi massacrada por um demônio. E pra piorar, Nezuko, sua irmã mais nova e única sobrevivente, também foi transformada num demônio. Arrasado com esta sombria realidade, Tanjiro decide se tornar um matador de demônios para fazer sua irmã voltar a ser humana, e para matar o demônio que matou sua família. Um triste conto sobre dois irmãos, onde os destinos dos humanos e dos demônios se entrelaçam, começa agora."
            />
        </div>
    );
};

export default Anime;