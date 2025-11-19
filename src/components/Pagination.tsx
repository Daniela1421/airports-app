"use client";

import Link from "next/link";

export default function Pagination({ page, totalPages, search, hasResults }) {
  const query = search ? `&search=${encodeURIComponent(search)}` : "";
  const pages = [];

  if (page > 1) {
    pages.push(page - 1);
  }

  pages.push(page);

  if (page < totalPages && hasResults) {
    pages.push(page + 1);
  }

  return (
    <div className="flex items-center justify-center gap-3 mt-10">
      {page > 1 && (
        <Link
          href={`/airports?page=${page - 1}${query}`}
          className="px-4 py-2 rounded-lg bg-[#0060FF] text-white text-lg"
        >
          Anterior
        </Link>
      )}
      {pages.map((p) => (
        <Link
          key={p}
          href={`/airports?page=${p}${query}`}
          className={`px-4 py-2 rounded-lg text-white text-lg ${
            p === page ? "bg-[#0042b5]" : "bg-[#0060FF]"
          }`}
        >
          {p}
        </Link>
      ))}
      {hasResults && page < totalPages && (
        <Link
          href={`/airports?page=${page + 1}${query}`}
          className="px-4 py-2 rounded-lg bg-[#0060FF] text-white text-lg"
        >
          Siguiente
        </Link>
      )}
    </div>
  );
}



