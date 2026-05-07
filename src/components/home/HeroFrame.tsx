import React from 'react';
import CremeButton from "@/src/components/ui/CremeButton";

const HeroFrame = () => {
  return (
    <div className="
        pb-20 pt-40
        flex justify-between items-center
    ">
        <div>
            <h3 className="text-lg font-medium text-charbon/60 mb-2">Disponible pour alternance Côte d&#39;Azur</h3>

            <h1>
                Ingénieur<br/>
                <span className={"italic text-terracotta"}>curieux</span> & authentique.
            </h1>

            <h2 className="text-2xl font-normal mt-4 mb-8 max-w-2xl">
                Élève ingénieur en informatique passionné par l&#39;intelligence artificielle.
            </h2>

            <div className={"flex gap-4"}>
                <CremeButton>Voir mes projets</CremeButton>
                <CremeButton>Télécharger le CV</CremeButton>
            </div>

        </div>

        <img
            src="/chibi/cloud.png"
            alt={"chibi on a cloud"}
            className={"h-50 -scale-x-100"}
        />
    </div>
  );
};

export default HeroFrame;
