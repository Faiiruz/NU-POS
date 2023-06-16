import React, {useState} from "react";

// components
import SearchForm from "../SE";
import CardStore from "../Card/CardStore";

// layout for page

// import Admin from "@/component/Layout/Admin";

export default function TableStore() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (term) => {
    setSearchTerm(term);
    // Lakukan aksi pencarian yang sesuai, misalnya kirim permintaan ke backend
  };
  return (
    <>
      <div className="flex flex-wrap mt-1 ml-[247px] ">
      <div >
      <SearchForm onSearch={handleSearch}/>
      </div>
        <div className="w-70 mb-12 mt-2 px-4">
          <CardStore/>
        </div>
        <div className="w-70 mb-12 px-4">
        </div>
      </div>
    </>
  );
}