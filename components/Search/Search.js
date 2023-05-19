"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);

  useEffect(() => {
    setSearch("");
  }, [pathname]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      return;
    }
    router.push(`/search/${search}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center px-5 "
    >
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="text"
        name="search"
        id="search"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
      />
      <button
        disabled={!search}
        type="submit"
        className="text-amber-500 disabled:text-gray-400  "
      >
        Search
      </button>
    </form>
  );
};

export default Search;
