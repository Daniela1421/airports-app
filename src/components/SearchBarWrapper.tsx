"use client";

import SearchBar from "@/src/components/SearchBar";
import { useRouter } from "next/navigation";
import SearchIcon from "../../public/assets/search.svg"
import { useEffect, useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

export default function SearchBarWrapper({ initialValue }: { initialValue: string }) {
  const router = useRouter();
  const [value, setValue] = useState(initialValue);
  const isMobile = useIsMobile();

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);


  return (
    <SearchBar
      placeholder="Buscar aeropuertos..."
      initialValue={value}
      onSearch={(value) => router.push(`/airports?page=1&search=${value}`)}
      layout={isMobile ? "vertical" : "horizontal"}
      icon={SearchIcon}
      inputWidth={ isMobile ? "80%" : "65%"}
    />
  );
}
