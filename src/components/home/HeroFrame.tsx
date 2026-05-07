import React from 'react';
import CremeButton from "@/src/components/ui/CremeButton";

const HeroFrame = () => {
  return (
    <section className="relative w-full">
      <div className="
          max-w-7xl mx-auto px-6 lg:px-12
          pt-32 pb-20 md:pt-48 md:pb-32
          flex flex-col md:flex-row justify-between items-center
          gap-12 md:gap-20
      ">
          <div className="flex-1 text-center md:text-left">
              <h3 className="text-base md:text-lg font-medium text-charbon/60 mb-4 tracking-wide uppercase">
                  Disponible pour alternance Côte d&#39;Azur
              </h3>

              <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-[1.1]">
                  Ingénieur<br/>
                  <span className={"italic text-terracotta"}>curieux</span> & authentique.
              </h1>

              <p className="text-xl md:text-2xl font-normal text-charbon/80 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed font-serif">
                  Élève ingénieur en informatique passionné par l&#39;intelligence artificielle.
              </p>

              <div className={"flex flex-wrap gap-4 justify-center md:justify-start"}>
                  <CremeButton>Voir mes projets</CremeButton>
                  <CremeButton>Télécharger le CV</CremeButton>
              </div>
          </div>

          <div className="relative shrink-0">

              <div className="relative">
                  {/* Decorative background element could go here */}
                  <img
                      src="/chibi/cloud.png"
                      alt={"chibi on a cloud"}
                      className={"h-48 md:h-64 lg:h-80 -scale-x-100 object-contain drop-shadow-xl"}
                  />
              </div>
          </div>
      </div>
    </section>
  );
};

export default HeroFrame;

