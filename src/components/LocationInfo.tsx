"use client";

import Image from "next/image";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import locationIcon from "../../public/assets/location.svg";
import bgRightImage from "../../public/assets/bgCards.jpg"; 

export default function LocationInfo({ airport }) {
  const { latitude, longitude, geoname_id } = airport;
  const customIcon = L.icon({
    iconUrl: locationIcon.src,
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  });

  return (
    <div className="flex flex-col gap-10">
      <div className="relative bg-[#3F495F] p-6 rounded-lg shadow-xl border border-white text-white flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-40 pointer-events-none">
          <Image
            src={bgRightImage}
            alt="bg-right"
            fill
            className="object-cover object-right opacity-20"
          />
        </div>
        <div className="flex-1 z-10">
          <h2 className="text-[15px] md:text-[25px] font-gotham bg-gradient-to-r from-[#006AFF] to-[#00F9FF] text-transparent bg-clip-text mb-6 flex items-center gap-3 capitalize">
            <Image
              src={locationIcon}
              alt="location"
              width={24}
              height={24}
              className="w-7 h-7"
            />
            Ubicación
          </h2>

          <div className="grid grid-cols-1 gap-2 text-lg font-inter">
            <p>
              <span className="font-bold">Latitud:</span> {latitude || "N/A"}
            </p>
            <p>
              <span className="font-bold">Longitud:</span> {longitude || "N/A"}
            </p>
            <p>
              <span className="font-bold">ID Geoname:</span> {geoname_id || "N/A"}
            </p>
          </div>
        </div>
      </div>
      {latitude && longitude && (
        <MapContainer
          center={[latitude, longitude]}
          zoom={14}
          scrollWheelZoom={false}
          className="leaflet-container"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          <Marker position={[latitude, longitude]} icon={customIcon}>
            <Tooltip permanent direction="top" offset={[0, -10]} className="bg-[#0060FF] text-white px-2 py-1 rounded">
            {airport.airport_name}
          </Tooltip>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
}
