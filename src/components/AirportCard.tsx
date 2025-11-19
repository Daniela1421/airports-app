import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface AirportCardProps {
  id: string;
  name: string;
  city: string;
  country: string;
  iata: string;
  airplaneIcon: string;
  bgRightImage: string | StaticImageData;
}

export default function AirportCard({
  id,
  name,
  city,
  country,
  iata,
  airplaneIcon,
  bgRightImage,
}: AirportCardProps) {
  return (
    <Link href={`/airports/${id}`}>
      <div className="relative w-full max-w-[800px] min-h-[200px] p-6 rounded-md border border-white ovlerflow-y-scroll md:overflow-hidden bg-gradient-to-r from-[#3F495F] to-[#0E1934] flex">
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-40 pointer-events-none">
          <Image
            src={bgRightImage}
            alt="bg-right"
            fill
            className="object-cover object-right opacity-20"
          />
        </div>
        <Image
          src={airplaneIcon}
          alt="airplane"
          width={36}
          height={36}
          className="absolute right-4 top-4"
        />
        <div className="flex flex-col justify-between">
          <div className="z-10 flex flex-col gap-2">
            <h2 className="text-white font-inter font-bold text-[20px] leading-tight">
              {name}
            </h2>
            <p className="text-white font-inter text-[20px] opacity-80 leading-tight">
              {city}, {country}
            </p>
          </div>
          <div className="">
            <p className="text-[30px] md:text-[42px] font-gotham bg-gradient-to-r from-[#006AFF] to-[#00F9FF] bg-clip-text text-transparent drop-shadow-md">
              {iata.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

