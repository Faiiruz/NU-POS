import React, {useState} from "react";

// components
import CardTable from "../Card/CardTable";
import SearchForm from "../SE";

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
      <div className="flex flex-wrap mt-1 ml-[247px] ">
      <div >
      <SearchForm onSearch={handleSearch}/>
      </div>
        <div className="w-70 mb-12 mt-2 px-4">
          <CardTable />
        </div>
        <div className="w-70 mb-12 px-4">
        </div>
      </div>
    </>
  );
}

// Tables.layout = Admin;
