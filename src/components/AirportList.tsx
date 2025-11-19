"use client";

import AirportCard from "./AirportCard";
import flight from "../../public/assets/flight.svg"; 
import bgCard from "../../public/assets/bgCards.jpg"
import { getCityNameFromTimezone } from "../utils/getCityName";

export const AirportList = ({ airports }) => {
  if (!airports.length)
    return <p className="text-white">No se encontraron aeropuertos.</p>;

  return (
    <div className="grid grid-cols-2 gap-8">
      {airports.map((airport) => (
        <AirportCard 
          key={airport.id}
          id={airport.id} 
          name={airport.airport_name}
          city={getCityNameFromTimezone(airport.timezone)}
          country={airport.country_name}
          iata={airport.iata_code}
          airplaneIcon={flight}
          bgRightImage={bgCard}
        />
      ))}
    </div>
  );
}
