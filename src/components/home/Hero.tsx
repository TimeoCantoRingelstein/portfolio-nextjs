import React from 'react';
import CremeButton from "@/src/components/ui/CremeButton";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="pb-20 pt-40">
        <div>
            <h3>Disponible pour alternance Côte d&#39;Azur</h3>
            <h1>Ingénieur, curieux & créatif.</h1>
            <h2>Élève ingénieur en informatique passionné par l&#39;intelligence artificielle.</h2>
            <CremeButton>Voir mes projets</CremeButton>
            <CremeButton>Télécharger le CV</CremeButton>
        </div>
        <img
            src="/chibi_cloud.png"
            alt={"chibi on a cloud"}
            className={"-scale-x-100"}
        />
    </div>
  );
};

export default Hero;
