import React from 'react';
import CremeButton from "@/src/components/ui/CremeButton";
import Image from "next/image";

const HeroFrame = () => {
  return (
    <div className="
        pb-20 pt-40
        flex justify-between items-center
    ">
        <div>
            <h3>Disponible pour alternance Côte d&#39;Azur</h3>

            <h1 className=
                "font-serif text-6xl font-semibold tracking-tighter"
            >
                Ingénieur<br/>
                qui <span className={"italic text-terracotta"}>suce</span> David.
            </h1>

            <h2>
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
