import React, { useState, useEffect } from "react";
import { tableProduct } from "../constant/table-data";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Link from "next/link";
import { AiOutlineLeft, AiOutlineRight, AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/router";
import ProductRepository from "@/repositories/ProductRepository";

const TableProduct = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownItemId, setDropdownItemId] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const router = useRouter();
  const [productData, setProductData] = useState([]);
  const [dataStatus, isSetStatus] = useState({
    1: "Avaliable",
    2: "Discontinue",
  });
  const [dataLevel, isSetLeve] = useState({
    1: "Owner",
    2: "Pusat",
    4: "Distributor",
    8: "Store",
  });
  const [dataKonsinyasi, isSetKonsinyasi] = useState({
    1: "Non-Konsinyasi",
    2: "Konsinyasi",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let token = localStorage.getItem("xa");
        let dataToken = JSON.parse(token);
        ProductRepository.getProduct({ XA: dataToken }).then((data) => {
          setProductData(data["data"]);
          console.log(data);
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const itemsPerPage = 5;

  const filtertableProduct = productData.filter((item) =>
    item.org_id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filtertableProduct.length / itemsPerPage);

  const paginatedData = filtertableProduct.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDropdownChange = (itemId, action) => {
    if (dropdownItemId === itemId) {
      setDropdownItemId(null); // Toggle dropdown visibility
    } else {
      setDropdownItemId(itemId);
    }

    if (action === "edit") {
      // Handle edit action
      console.log(`Edit item with id: ${itemId}`);
    } else if (action === "delete") {
      // Handle delete action
      setDeleteItemId(itemId);
      setShowDeleteConfirmation(true);
    }
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
    <div className="p-6 bg-white rounded-md shadow-md h-screen 2xl:h-[700px]">
      <div className="flex gap-2">
        <input
          className="border px-2 rounded mb-4 grow"
          type="text"
          placeholder="Cari Berdasarkan SKU, Nama Product, dan Nama Kategori"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          onClick={handleAddNew}
          className="flex items-center px-4 py-2 mb-4 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          <AiOutlinePlus className="mr-2" />
          Tambahkan Produk
        </button>
      </div>
      <table className="bg-white w-full">
        <thead>
          <tr className="text-left text-md text-slate-700">
            <th className="py-2 px-4 border-b">SKU</th>
            <th className="py-2 px-4 border-b">Nama Produk</th>
            {/* <th className="py-2 px-4   ">Category</th>
            <th className="py-2 px-4   ">Image</th> */}
            <th className="py-2 px-4 border-b">Kategori</th>
            <th className="py-2 px-4 border-b">Konsinyasi</th>
            <th className="py-2 px-4 border-b">Harga Distributor</th>
            <th className="py-2 px-4 border-b">Harga Toko</th>
            <th className="py-2 px-4 border-b">Level</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b"></th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr key={item.id} className="text-sm text-slate-700">
              <td className="py-2 px-4 border-b">{item.org_id}</td>
              <td className="py-2 px-4 border-b">{item.name}</td>
              <td className="py-2 px-4 border-b">{item.category_name}</td>
              {/* <td className="py-2 px-4 ">
                <img
                  src={item.image}
                  alt={item.product}
                  className="w-10 h-10"
                />
              </td>
              <td className="py-2 px-4 ">{item.barcode}</td> */}
              <td className="py-2 px-4 border-b">{dataKonsinyasi[item.konsinyasi]}</td>
              <td className="py-2 px-4 border-b">Rp{item.distributor_price}</td>
              <td className="py-2 px-4 border-b">Rp{item.store_price}</td>
              <td className="py-2 px-4 border-b">{dataLevel[item.level]}</td>
              <td className="py-2 px-4 border-b">{dataStatus[item.status]}</td>
              <td className="py-2 px-4 border-b">
                <div
                  onClick={() => handleDropdownChange(item.id, "edit")}
                  className="relative cursor-pointer inline-block"
                >
                  <HiOutlineDotsHorizontal className="w-4 h-4" />
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
                          onClick={() =>
                            handleDropdownChange(item.id, "delete")
                          }
                          className="block px-4 py-2 text-sm text-red-700 hover:bg-red-100 hover:text-red-900 cursor-pointer"
                          role="menuitem"
                        >
                          Hapus Produk
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
