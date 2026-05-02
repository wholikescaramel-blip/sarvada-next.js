import imgRomanticGarden from "figma:asset/b92d2910583bfc8dcb89359aafd2f86dd016cd76.png";
import imgModernElegance from "figma:asset/bfd91f0a3fdebb9aca029a111083f9c0fbdd56d5.png";
import imgAquaSerenity from "figma:asset/b7af2e2d9f3e213f955b165e4be92a8428f5f230.png";
import imgSunsetSoiree from "figma:asset/3cdccd8cf869d357b2159db07e72c7462c6e65c4.png";
import imgTraditionalSplendor from "figma:asset/d4c25a3c1fec45fc141816e3624ff60f5e865dee.png";
import imgBohemianDream from "figma:asset/c3b03526bcf73940bac2ce794dc9f7450d0e5226.png";

export default function StoriesInStyleImages() {
  return (
    <div className="bg-white relative size-full" data-name="Stories In Style Images">
      <div className="absolute h-[194px] left-[41px] top-[30px] w-[243px]" data-name="Romantic Garden">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRomanticGarden} />
      </div>
      <div className="absolute h-[194px] left-[319px] top-[30px] w-[243px]" data-name="Modern Elegance">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgModernElegance} />
      </div>
      <div className="absolute h-[194px] left-[41px] top-[466px] w-[243px]" data-name="Aqua Serenity">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAquaSerenity} />
      </div>
      <div className="absolute h-[194px] left-[319px] top-[466px] w-[243px]" data-name="Sunset Soirée">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSunsetSoiree} />
      </div>
      <div className="absolute h-[194px] left-[41px] top-[248px] w-[243px]" data-name="Traditional Splendor">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTraditionalSplendor} />
      </div>
      <div className="absolute h-[194px] left-[319px] top-[248px] w-[243px]" data-name="Bohemian Dream">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBohemianDream} />
      </div>
    </div>
  );
}