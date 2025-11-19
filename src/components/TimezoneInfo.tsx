"use client";

import Image from "next/image";
import timezoneIcon from "../../public/assets/global.svg";
import clockIcon from "@/public/assets/clockCircle.svg";

export default function TimezoneInfo({ airport }) {
  if (!airport) return null;
  
  const { timezone, gmt_offset, local_time } = airport;

  return (
    <div className="flex flex-col gap-6">
      <div className="relative bg-[#3F495F] p-6 rounded-lg shadow-xl border border-white text-white flex flex-col gap-4">
        <h2 className="text-[15px] md:text-[25px] font-gotham bg-gradient-to-r from-[#006AFF] to-[#00F9FF] text-transparent bg-clip-text flex items-center gap-3">
          <Image 
            src={timezoneIcon} 
            alt="timezone" 
            width={30} 
            height={30} 
          />
          Zona Horaria
        </h2>
        <p className="text-lg font-inter">
          <span className="font-bold">Zona:</span> {timezone || "N/A"}
        </p>
        <p className="text-lg font-inter">
          <span className="font-bold">GMT:</span> {gmt_offset || "N/A"}
        </p>
      </div>
      <div className="relative bg-[#3F495F] p-6 rounded-lg shadow-xl border border-white text-white flex flex-col gap-4">
        <h2 className="text-[15px] md:text-[25px] font-gotham bg-gradient-to-r from-[#006AFF] to-[#00F9FF] text-transparent bg-clip-text flex items-center gap-3">
          <Image 
            src={clockIcon} 
            alt="local-time" 
            width={30} 
            height={30} 
          />
          Hora Local
        </h2>
        <p className="text-lg font-inter">{local_time || "No disponible"}</p>
      </div>
    </div>
  );
}
