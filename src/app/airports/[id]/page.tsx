"use client";

import BackgroundLayout from "@/src/components/BackgroundLayout";
import GeneralInfo from "@/src/components/GeneralInfo";
import LocationInfo from "@/src/components/LocationInfo";
import TimezoneInfo from "@/src/components/TimezoneInfo";
import { useAirportDetailsStore } from "@/src/store/airportDetailsStore";
import React, { useEffect, useState } from "react";

const TABS = ["General", "Ubicación", "Zona horaria", "Estadísticas"];

export default function AirportDetailsPage({ params }) {
  const { id } = React.use(params);
  const [activeTab, setActiveTab] = useState(0);
  const { airport, loading, error, fetchAirportById, } = useAirportDetailsStore();

  useEffect(() => {
    if (id) {
      fetchAirportById(id);
    }
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="bg-[#3F495F] p-6 rounded-lg shadow-xl border border-white text-white flex flex-col items-center gap-4 transition-all duration-300">
          <p className="text-lg font-inter">Cargando aeropuerto...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="bg-[#3F495F] p-6 rounded-lg shadow-xl border border-red-500 text-red-400 flex flex-col items-center gap-4 transition-all duration-300">
          <p className="text-lg font-inter">{error}</p>
        </div>
      </div>
    );

  if (!airport)
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="bg-[#3F495F] p-6 rounded-lg shadow-xl border border-white text-white flex flex-col items-center gap-4">
          <p className="text-lg font-inter">
            No se encontraron datos del aeropuerto.
          </p>
        </div>
      </div>
    );

  return (
    <BackgroundLayout>
      <div className="px-6 pt-2 pb-15">
        <h1 className="text-6xl text-center font-gotham pb-6 bg-gradient-to-r from-[#006AFF] to-[#00F9FF] text-transparent bg-clip-text">
          {airport.airport_name}
        </h1>
        <div className="flex gap-2 bg-[#3F495F] px-2 py-1 rounded-md max-h-[78px] w-full font-inter overflow-x-auto scrollbar-none md:overflow-x-hidden">
          {TABS.map((tab, idx) => {
            const isActive = idx === activeTab;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex-1 text-center px-4 py-2 rounded-lg text-white transition-all duration-300 transform
                  ${
                    isActive
                      ? "border border-[#0060FF] bg-[#0060FF]"
                      : "opacity-70 hover:opacity-100 hover:scale-105 hover:bg-[#505f7f]"
                  }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
        <div className="mt-10">
          {activeTab === 0 && <GeneralInfo key={airport.id} airport={airport} />}
          {activeTab === 1 && <LocationInfo key={airport.id} airport={airport} />}
          {activeTab === 2 && <TimezoneInfo airport={airport} />}
        </div>
      </div>
    </BackgroundLayout>
  );
}
