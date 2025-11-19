export const dynamic = "force-dynamic";

import { fetchAirports } from "@/src/services/airportsService";
import { AirportList } from "@/src/components/AirportList";
import BackgroundLayout from "@/src/components/BackgroundLayout";
import SearchBarWrapper from "@/src/components/SearchBarWrapper";
import Pagination from "@/src/components/Pagination";

export default async function AirportsSearchPage({ searchParams }) {
  const params = await searchParams;
  const search = (params.search ?? "").trim().toLowerCase();
  const page = Number(params.page ?? 1);

  const data = await fetchAirports({ search, page, limit: 6 });
  const totalPages = Math.ceil(data?.pagination?.total / data?.pagination?.limit);

  const filteredAirports = data.data.filter((airport) => {
    const name = airport.airport_name?.toLowerCase() ?? "";
    const iata = airport.iata_code?.toLowerCase() ?? "";
    const icao = airport.icao_code?.toLowerCase() ?? "";
   
    return (
      name.includes(search) ||
      iata.includes(search) ||
      icao.includes(search)
    );
  });

  const hasResults = filteredAirports.length > 0;
   console.log("filte", filteredAirports)
  return (
    <BackgroundLayout>
      <div className="min-h-screen px-6 py-10">
        <div className="flex flex-col md:flex-row mb-10 items-center justify-between gap-6">
          <h2 className="text-[30px] md:text-[45px] font-gotham bg-gradient-to-r from-[#006AFF] to-[#00F9FF] text-transparent bg-clip-text whitespace-nowrap">
            SkyConnect Explorer
          </h2>
          <SearchBarWrapper initialValue={search} />
        </div>
        <AirportList airports={filteredAirports} />
        <Pagination page={page} totalPages={totalPages} search={search} hasResults={hasResults} />
      </div>
    </BackgroundLayout>
  );
}



