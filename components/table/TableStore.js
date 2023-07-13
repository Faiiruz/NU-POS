import React, { useState, useEffect } from "react";
import {
  AiOutlineEye,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlinePlus,
} from "react-icons/ai";
import { useRouter } from "next/router";
import OrganizationRepository from "@/repositories/OrganizationRepository";

const TableStore = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [organizationData, setOrganizationData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let token = localStorage.getItem("xa");
        let dataToken = JSON.parse(token);
        OrganizationRepository.getOrganization({ XA: dataToken }).then(
          (data) => {
            setOrganizationData(data["data"]);
            console.log(data);
          }
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const itemsPerPage = 5;

  const filtertableStore = organizationData.filter((item) =>
    item.org_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filtertableStore.length / itemsPerPage);

  const paginatedData = filtertableStore.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleViewDetail = (store_id) => {
    router.push(`/detail-organization/${store_id}`);
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
    <div className="p-6 bg-white rounded-md shadow-md h-screen 2xl:h-[700px]">
      <div className="flex gap-2">
        <input
          className="border px-2 rounded mb-4 grow"
          type="text"
          placeholder="Cari Berdasarkan Nama Toko"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          onClick={handleAddStore}
          className="flex items-center px-4 py-2 mb-4 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          <AiOutlinePlus className="mr-2" />
          Tambah Toko
        </button>
      </div>
      <table className="bg-white w-full">
        <thead>
          <tr className="text-left text-md text-slate-700">
            <th className="py-2 px-2 border-b">Nama Toko</th>
            <th className="py-2 px-2 border-b">No Telp</th>
            <th className="py-2 px-2 border-b">Alamat</th>
            <th className="py-2 px-2 border-b"></th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr className="text-sm text-slate-700" key={item.id}>
              <td className="py-2 px-2 border-b">{item.org_name}</td>
              <td className="py-2 px-2 border-b">{item.org_phone}</td>
              <td className="py-2 px-2 border-b">{item.org_address}</td>
              <td className="py-2 px-2 border-b">
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
