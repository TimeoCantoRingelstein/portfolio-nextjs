import React from 'react';
import MyButton from "@/components/MyButton";

const Hero = () => {
  return (
    <div className="pb-20 pt-40">
        <h3>Disponible pour alternance Côte d&#39;Azur</h3>
        <h1>Ingénieur, curieux & créatif.</h1>
        <h2>Élève ingénieur en informatique passionné par l&#39;intelligence artificielle.</h2>
        <MyButton
            label = "Voir mes projets"
        />
        <MyButton
            label = "Télécharger le CV"
        />
    </div>
  );
};

export default Hero;
