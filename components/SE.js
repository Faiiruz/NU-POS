import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex ml-[20px] mt-[50px] ">
      <input
        type="text"
        placeholder="Cari..."
        value={searchTerm}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded-l"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-r">
        Cari
      </button>
    </form>
  );
};

export default SearchForm;