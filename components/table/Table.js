import React, { useState } from "react";
import { useRouter } from "next/router";
import { tableData } from "../constant/table-data";
import { AiOutlineEye, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Table = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const itemsPerPage = 5; // Jumlah item per halaman

  const filtertableData = tableData.filter((item) =>
    item.sku.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filtertableData.length / itemsPerPage);

  const paginatedData = filtertableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleViewDetail = () => {
    router.push(`/order/detail/`);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <input
        className="border p-1 px-2 rounded mb-4 "
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <table>
        <thead>
          <tr className="text-md text-left text-slate-700">
            <th className="py-1 px-4 w-1/5">No Order</th>
            <th className="py-1 px-4 w-1/5">Date</th>
            <th className="py-1 px-4 w-1/5">Outlet Name</th>
            <th className="py-1 px-4 w-1/5">Owner Name</th>
            <th className="py-1 px-4 w-1/5">Address</th>
            <th className="py-1 px-4 w-1/5">NO</th>
            <th className="py-1 px-4 w-1/5">Status</th>
            <th className="py-1 px-4 w-1/5"></th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr className="text-left text-slate-600 text-sm" key={item.id}>
              <td className="py-2 px-4">{item.sku}</td>
              <td className="py-2 px-4">{item.date}</td>
              <td className="py-2 px-4">{item.outlet}</td>
              <td className="py-2 px-4">{item.owner}</td>
              <td className="py-2 px-4">{item.place}</td>
              <td className="py-2 px-4">{item.no}</td>
              <td className="text-center py-2 px-4">{item.info}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => handleViewDetail(item.id)}
                  className="flex items-center justify-center"
                >
                  <AiOutlineEye className="w-5 h-5 mr-1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
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

export default Table;
