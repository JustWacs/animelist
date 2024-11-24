"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const keyword = searchRef.current.value;
      if(!keyword) return
      router.push(`/search/${keyword}`);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value;
    if(!keyword) return
    router.push(`/search/${keyword}`);
  };

  return (
    <div className="flex items-center relative">
      <input className=" p-2 rounded-l text-black" placeholder="Search Anime . . ." 
      onKeyDown={handleKeyDown} 
      ref={searchRef} />
      <button className="p-2 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-r" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default InputSearch;
