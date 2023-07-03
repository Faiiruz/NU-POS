import React, { useState } from 'react';
import { tableStore } from '../constant/table-data';
import { AiOutlineEye, AiOutlineLeft, AiOutlineRight, AiOutlinePlus } from 'react-icons/ai';
import { useRouter } from 'next/router';

const TableStore = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const filtertableStore = tableStore.filter((item) =>
  item.outlet.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filtertableStore.length / itemsPerPage);

  const paginatedData = filtertableStore.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleViewDetail = () => {
    router.push(`/store/detail/`);
  };

    const handleAddStore = () => {
      router.push(`/store/new/`);
    };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <div className='flex justify-between'>
      <input
        className='border px-2 rounded mb-4'
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
        <button
          onClick={handleAddStore}
          className="flex items-center px-4 py-2 mb-4 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          <AiOutlinePlus className="mr-2" />
          Add Store
        </button> 
      </div>
    <table className="bg-white border border-slate-100 w-full">
      <thead>
        <tr className='text-left text-md text-slate-700'>
          <th className="py-5 px-4 border-b">Name</th>
          <th className="py-5 px-4 border-b">Owner Name</th>
          <th className="py-5 px-4 border-b">No Telp</th>
          <th className="py-5 px-4 border-b">Address</th>
          <th className="py-5 px-4 border-b">Deposit</th>
          <th className="py-5 px-4 border-b"></th>
        </tr>
      </thead>
      <tbody>
        {paginatedData.map((item) => (
          <tr className='text-sm text-slate-700' key={item.id}>
            <td className="py-5 px-4">{item.outlet}</td>
            <td className="py-5 px-4">{item.owner}</td>
            <td className="py-5 px-4">{item.no}</td>
            <td className="py-5 px-4">{item.place}</td>
            <td className="py-5 px-4">{item.deposit}</td>
            <td className="py-5 px-4">
              <button
                onClick={() => handleViewDetail(item.outlet)}
                className="flex items-center justify-center"
              >
                <AiOutlineEye className="w-5 h-5 mr-1" />
                
              </button>
            </td>
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

export default TableStore;