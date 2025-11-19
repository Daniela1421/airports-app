"use client";

import BackgroundLayout from "../components/BackgroundLayout";
import { useState } from "react";
import SearchIcon from "../../public/assets/search.svg"
import { useRouter } from "next/navigation";
import SearchBar from "../components/SearchBar";
import { useIsMobile } from "../hooks/useIsMobile";

export default function LandingPage() {
  const [search, setSearch] = useState("");
  const router = useRouter(); 
  const isMobile = useIsMobile();

  const handleSearch = (value: string) => {
    console.log("Buscar:", value);
    setSearch(value);
    if (!value.trim()) return;

    router.push(`/airports?page=1&search=${value}`);
  };

  return (
    <BackgroundLayout>
      <div className="flex items-center flex-col justify-center gap-[20px] py-10 my-10">
        <h1 className="text-[55px] md:text-[89px] font-gotham text-center mb-8 pb-8 bg-gradient-to-r from-[#006AFF] to-[#00F9FF] text-transparent bg-clip-text">
          SkyConnect Explorer
        </h1>
        <SearchBar
          placeholder="Buscar aeropuertos..."
          initialValue={search}
          onSearch={handleSearch}
          layout="vertical"
          inputWidth={isMobile ? "80%" : "55%"}
          buttonWidth={isMobile ? "35%" : "15%"}
          icon={SearchIcon}
        />
      </div>
    </BackgroundLayout>
  );
}
