import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner3 from "../images/banner2-casino.jpg"

function FeaturedGames() {
    // Array con las imágenes destacadas
    const featuredGames = [
        { src: banner3, alt: "Juego 1" },
        { src: banner3, alt: "Juego 2" },
        { src: banner3, alt: "Juego 3" },
        // 
    ];

    return (
        <Carousel showArrows autoPlay infiniteLoop showThumbs={false} style={{ maxHeight: "400px", overflow: "hidden" }}>
          {featuredGames.map((game, index) => (
            <div key={index} style={{ maxHeight: "400px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img src={game.src} alt={game.alt} style={{ height: "100%", objectFit: "contain" }} />
            </div>
          ))}
        </Carousel>
        
        
    );
}

export default FeaturedGames;
