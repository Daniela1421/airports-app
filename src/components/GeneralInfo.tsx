import Image from "next/image";
import bgRightImage from "../../public/assets/bgCards.jpg"
import infoIcon from "../../public/assets/infoCircle.svg"

export default function GeneralInfo({ airport }) {
  console.log("airpot---", airport)
  return (
    <div className="relative bg-[#3F495F] p-6 rounded-lg shadow-xl  border border-white text-white max-h-435">
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-40 pointer-events-none">
        <Image
          src={bgRightImage}
          alt="bg-right"
          fill
          className="object-cover object-right opacity-20"
        />
      </div>
      <h2 className="text-[15px] md:text-[25px] font-gotham bg-gradient-to-r from-[#006AFF] to-[#00F9FF] text-transparent bg-clip-text mb-6 flex items-center gap-3 capitalize">
        <Image
          src={infoIcon}
          alt="info"
          width={24}
          height={24}
          className="w-7 h-7"
        />
        Información general
      </h2>

      <div className="grid grid-cols-1 gap-2 mt-4">
          <p className="text-lg font-inter">
            <span className="font-bold">Código IATA:</span> {airport.iata_code || "N/A"}
          </p>
          <p className="text-lg font-inter">
            <span className="font-bold">Código ICAO:</span> {airport.icao_code || "N/A"}
          </p>
          <p className="text-lg font-inter">
            <span className="font-bold">País:</span> {airport.country_name} {`(${airport.country_iso2})`}
          </p>
          <p className="text-lg font-inter">
            <span className="font-bold">Ciudad:</span> {airport.city_iata_code || "N/A"}
          </p>
          <p className="text-lg font-inter">
            <span className="font-bold">Teléfono:</span> {airport.phone_number || "No disponible"}
          </p>
      </div>
    </div>
  );
}
