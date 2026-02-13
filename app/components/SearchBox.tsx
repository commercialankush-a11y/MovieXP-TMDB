"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {


    router.push(`/?query=${encodeURIComponent(query)}`);
  };

  return (
    <div className="flex w-full max-w-md gap-2">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleSearch}
        className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
}
