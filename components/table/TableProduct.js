import React, { useState } from 'react';
import { tableProduct } from '../constant/table-data';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import Link from 'next/link';
import {AiOutlineLeft, AiOutlineRight,AiOutlinePlus } from 'react-icons/ai';
import { useRouter } from 'next/router';

const TableProduct = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownItemId, setDropdownItemId] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
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

  const handleDropdownChange = (itemId, action) => {
    if (action === 'edit') {
      // Handle edit action
      console.log(`Edit item with id: ${itemId}`);
    } else if (action === 'delete') {
      // Handle delete action
      setDeleteItemId(itemId);
      setShowDeleteConfirmation(true);
    }
    setDropdownItemId(null);
  };
  const handleDeleteConfirmation = () => {
    // Handle delete action
    console.log(`Delete item with id: ${deleteItemId}`);
    setShowDeleteConfirmation(false);
    setDeleteItemId(null);
  };

  const handleCancelDelete = () => {
    // Reset delete state
    setShowDeleteConfirmation(false);
    setDeleteItemId(null);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  
  const handleAddNew = () => {
    router.push(`/product/new/`);
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
          onClick={handleAddNew}
          className="flex items-center px-4 py-2 mb-4 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          <AiOutlinePlus className="mr-2" />
          Add Product
        </button> 
      </div>
    <table className="bg-white border border-slate-100">
      <thead>
        <tr className='text-left text-md text-slate-700'>
          <th className="py-2 px-4 border-b w-1/5">SKU</th>
          <th className="py-2 px-4 border-b w-1/5">Product Name</th>
          <th className="py-2 px-4 border-b w-1/5">Category</th>
          <th className="py-2 px-4 border-b w-1/5">Image</th>
          <th className="py-2 px-4 border-b w-1/5">Barcode</th>
          <th className="py-2 px-4 border-b w-1/5">Konsinyasi</th>
          <th className="py-2 px-4 border-b w-1/5">Distributor Price</th>
          <th className="py-2 px-4 border-b w-1/5">Selling Price</th>
          <th className="py-2 px-4 border-b w-1/5">Level</th>
          <th className="py-2 px-4 border-b w-1/5">Status</th>
          <th className="py-2 px-4"></th>
        </tr>
      </thead>
      <tbody>
        {paginatedData .map((item) => (
          <tr key={item.id} className='text-sm text-slate-700'>
            <td className="py-2 px-4 w-1/5">{item.sku}</td>
            <td className="py-2 px-4 w-1/5">{item.product}</td>
            <td className="py-2 px-4 w-1/5">{item.category}</td>
            <td className="py-2 px-4 w-1/5">
              <img src={item.image} alt={item.product} className="w-10 h-10"/>
              </td>
            <td className="py-2 px-4 w-1/5">{item.barcode}</td>
            <td className="py-2 px-4 w-1/5">{item.konsinyasi}</td>
            <td className="py-2 px-4 w-1/5">{item.price1}</td>
            <td className="py-2 px-4 w-1/5">{item.price2}</td>
            <td className="py-2 px-4 w-1/5">{item.level}</td>
            <td className="py-2 px-4 w-1/5">{item.info}</td>
            <td className="py-2 px-4 w-1/5">
                <div className="relative inline-block">
                  <div
                    onClick={() => setDropdownItemId(item.id)}
                    className="cursor-pointer"
                  >
                    <HiOutlineDotsHorizontal className="w-4 h-4" />
                  </div>
                  {dropdownItemId === item.id && (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <Link
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                          role="menuitem"
                          href={`/product/edit`}
                        >
                          Edit
                        </Link>
                        <div
                          onClick={() => handleDropdownChange(item.id, 'delete')}
                          className="block px-4 py-2 text-sm text-red-700 hover:bg-red-100 hover:text-red-900 cursor-pointer"
                          role="menuitem"
                        >
                          Delete
                        </div>
                      </div>
                    </div>
                  )}
                </div>
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
    {showDeleteConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded p-6">
            <p>Are you sure you want to delete this item?</p>
            <div className="flex justify-center mt-4">
              <button
                className="mr-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={handleDeleteConfirmation}
              >
                Confirm
              </button>
              <button
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                onClick={handleCancelDelete}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default TableProduct;