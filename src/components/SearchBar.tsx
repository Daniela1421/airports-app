"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  initialValue?: string;
  onSearch: (value: string) => void;
  layout?: "vertical" | "horizontal";
  inputWidth?: string;
  buttonWidth?: string;
  icon?: string | null;
}

export default function SearchBar({
  placeholder = "Buscar...",
  initialValue = "",
  onSearch,
  layout = "vertical",
  inputWidth = "80%",
  buttonWidth = "35%",
  icon = null
}: SearchBarProps) {

  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleSearch = () => {
    onSearch(value);
  };

  return (
    <div
      className={`
        flex items-center w-full
        ${layout === "vertical" ? "flex-col gap-6" : "flex-row gap-10"}
        ${layout === "horizontal" ? "justify-end" : "justify-center"}
      `}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={clsx("px-5 rounded-full shadow-md bg-white font-inter text-xl text-gray-800 placeholder-[#006FEE] border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300",
          layout === "vertical" ? "py-3" : "py-2"
        )}
        style={{ width: inputWidth}}
      />
      <button
        onClick={handleSearch}
        className="
          flex items-center gap-3 px-6 py-2 rounded-lg border border-white
          bg-gradient-to-r from-[#0060FF] to-[#00FFE7]
          text-white font-inter text-lg shadow-lg
          hover:scale-105 active:scale-95
          transition-transform duration-300
        "
        style={{ width: layout === "vertical" ? buttonWidth : "auto" }}
      >
        {icon && (
          <Image
            src={icon}
            alt="search"
            width={24}
            height={24}
            className="w-5 h-5"
          />
        )}
        Buscar
      </button>
    </div>
  );
}
