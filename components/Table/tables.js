import React, { useState } from "react";

// components
import SearchForm from "../SE";
import CardTable from "../Card/CardTable";
import Paging from "../Paging";

// layout for page

// import Admin from "@/component/Layout/Admin";

export default function Tables() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (term) => {
    setSearchTerm(term);
    // Lakukan aksi pencarian yang sesuai, misalnya kirim permintaan ke backend
  };


  return (
    <>
    <div className="mt-[55px] ml-[263px] bg-white w-[1325px] p-4">
      Product
    </div>
    <div className="ml-[243px]">
      <SearchForm onSearch={handleSearch}/>
      </div>
      <div className="flex flex-wrap mt-1 ml-[247px] ">
        <div className="w-70 mb-12 px-4">
          <CardTable />
        </div>
        <div className="w-70 mb-12 px-4">
        </div>
      </div>
    </>
  );
}

// Tables.layout = Admin;
