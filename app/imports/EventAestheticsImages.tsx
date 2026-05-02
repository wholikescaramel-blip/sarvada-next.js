import imgImageOne from "figma:asset/2de624e41bdc06312b8670f35bbccfb045eacbca.png";
import imgImageTwo from "figma:asset/69dfc31527385eee5eda9aff54e2a5241d9cc728.png";
import imgImageThree from "figma:asset/1116d49b8111520023d61f86c22bed4d1f226df1.png";
import imgImageFour from "figma:asset/e7957e0b6cdc7c8474a28bf1dcfb39e61fcbfa19.png";
import imgImageFive from "figma:asset/d8700b5cded27eaa6778d02ceb154daae155f091.png";
import imgImageSix from "figma:asset/5652450b2165b35f601a0a8be2c6dcdf3256db62.png";
import imgImageSeven from "figma:asset/4dde7337b10a3e91296232863e769c0f92aa4061.png";
import imgImageEight from "figma:asset/e3c248fd23b79c2869051656e33ee5a1b8ff0669.png";
import imgImageNine from "figma:asset/2ff4151e55eeb8b58c6bca06feefad4ae9276c46.png";

export default function EventAestheticsImages() {
  return (
    <div className="bg-white relative size-full" data-name="Event Aesthetics Images">
      <div className="absolute h-[111px] left-[9px] top-[9px] w-[179px]" data-name="image-one">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageOne} />
      </div>
      <div className="absolute h-[111px] left-[212px] top-[9px] w-[179px]" data-name="image-two">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTwo} />
      </div>
      <div className="absolute h-[111px] left-[415px] top-[9px] w-[179px]" data-name="image-three">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[110.68%] left-[-2.85%] max-w-none top-[0.13%] w-[102.95%]" src={imgImageThree} />
        </div>
      </div>
      <div className="absolute h-[111px] left-[9px] top-[145px] w-[179px]" data-name="image-four">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFour} />
      </div>
      <div className="absolute h-[111px] left-[212px] top-[145px] w-[179px]" data-name="image-five">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFive} />
      </div>
      <div className="absolute h-[111px] left-[415px] top-[145px] w-[179px]" data-name="image-six">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSix} />
      </div>
      <div className="absolute h-[111px] left-[9px] top-[281px] w-[179px]" data-name="image-seven">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSeven} />
      </div>
      <div className="absolute h-[111px] left-[212px] top-[281px] w-[179px]" data-name="image-eight">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageEight} />
      </div>
      <div className="absolute h-[111px] left-[415px] top-[281px] w-[179px]" data-name="image-nine">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageNine} />
      </div>
    </div>
  );
}