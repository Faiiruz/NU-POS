import React, { useState } from "react";
import { tableProduct } from "../constant/table-data";
import { AiOutlineLeft, AiOutlineRight, AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/router";

const StockStore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const itemsPerPage = 5;

  const filtertableProduct = tableProduct.filter((item) =>
    item.sku.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filtertableProduct.length / itemsPerPage);

  const paginatedData = filtertableProduct.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <div className="flex justify-between">
        <input
          className="border px-2 rounded mb-4"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <table className="bg-white border border-slate-100 w-full">
        <thead>
          <tr className="text-left text-md text-slate-700">
            <th className="py-2 px-4 border-b">SKU</th>
            <th className="py-2 px-4 border-b">Product Name</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-2 border-b">Image</th>
            <th className="py-2 px-2 border-b">Barcode</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Level</th>
            <th className="py-2 px-4 border-b">Stock</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr key={item.id} className="text-sm text-slate-700">
              <td className="py-2 px-4">{item.sku}</td>
              <td className="py-2 px-4">{item.product}</td>
              <td className="py-2 px-4">{item.category}</td>
              <td className="py-2 px-2">
                <img
                  src={item.image}
                  alt={item.product}
                  className="w-10 h-10"
                />
              </td>
              <td className="py-2 px-2">{item.barcode}</td>
              <td className="py-2 px-4">{item.price2}</td>
              <td className="py-2 px-4">{item.level}</td>
              <td className="py-2 px-4">{item.stck}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex mt-4">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="mr-2"
        >
          <AiOutlineLeft />
        </button>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="ml-2"
        >
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
};

export default StockStore;
