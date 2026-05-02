import imgEndeToEndPlanning from "figma:asset/752223d8750d3e1c90ba56f2bf434da8555dcf7d.png";
import imgVenueResearch from "figma:asset/0592ac80875ab9547dd0ee051dd01f75279c6945.png";
import imgEventStyling from "figma:asset/ee06713882ac9a642360d23d9d8bbb5faed0677f.png";
import imgGuestHospitality from "figma:asset/c7632bf6c7f00164d7755543ee61ab1684b7bb1d.png";
import imgCatering from "figma:asset/04f48726fbe0329daaff996ba0e8fece14e2e799.png";
import imgLogisticsTravel from "figma:asset/33be561fe031be99efb67d0a20ea43803b1cb32e.png";
import imgArtistsEntertainment from "figma:asset/ac86fffb76c6eb2f1169e7cddf2532ba2004bcb3.png";
import imgInvitesCollaterals from "figma:asset/7810a7200ea5278cdaf15708ae5e2bb8f1564ae6.png";
import imgPhotoshootVideography from "figma:asset/06db250d606f65853d64f0645b759959dfa835c1.png";

export default function ServiceImages() {
  return (
    <div className="bg-white relative size-full" data-name="Service Images">
      <div className="absolute h-[111px] left-[9px] top-[9px] w-[179px]" data-name="ende-to-end-planning">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[241.89%] left-0 max-w-none top-[-33.11%] w-full" src={imgEndeToEndPlanning} />
        </div>
      </div>
      <div className="absolute h-[111px] left-[212px] top-[9px] w-[179px]" data-name="venue-research">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVenueResearch} />
      </div>
      <div className="absolute h-[111px] left-[415px] top-[9px] w-[179px]" data-name="event-styling">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgEventStyling} />
      </div>
      <div className="absolute h-[111px] left-[9px] top-[145px] w-[179px]" data-name="guest-hospitality">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGuestHospitality} />
      </div>
      <div className="absolute h-[111px] left-[212px] top-[145px] w-[179px]" data-name="catering">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCatering} />
      </div>
      <div className="absolute h-[111px] left-[415px] top-[145px] w-[179px]" data-name="logistics-travel">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogisticsTravel} />
      </div>
      <div className="absolute h-[111px] left-[9px] top-[281px] w-[179px]" data-name="artists-entertainment">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[201.36%] left-0 max-w-none top-[-56.08%] w-full" src={imgArtistsEntertainment} />
        </div>
      </div>
      <div className="absolute h-[111px] left-[212px] top-[281px] w-[179px]" data-name="invites-collaterals">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[161.26%] left-0 max-w-none top-0 w-full" src={imgInvitesCollaterals} />
        </div>
      </div>
      <div className="absolute h-[111px] left-[415px] top-[281px] w-[179px]" data-name="photoshoot-videography">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[201.16%] left-0 max-w-none top-[-62.29%] w-full" src={imgPhotoshootVideography} />
        </div>
      </div>
    </div>
  );
}