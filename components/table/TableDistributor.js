import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import OrderRepository from "@/repositories/OrderRepository";
import {
  AiOutlineEye,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlinePlus,
} from "react-icons/ai";
import moment from "moment";

const TableDistributor = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const [orderData, setOrderData] = useState([]);
  const [dataStatus, isSetStatus] = useState({
    1: "Open",
    2: "Parsial",
    4: "Close",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let token = localStorage.getItem("xa");
        let dataToken = JSON.parse(token);
        OrderRepository.getOrder({ XA: dataToken }, 1).then((data) => {
          setOrderData(data["data"]);
          console.log(data);
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const itemsPerPage = 5; // Jumlah item per halaman

  const filterTableData = orderData.filter((item) =>
    item.no_order.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filterTableData.length / itemsPerPage);

  const paginatedData = filterTableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleViewDetail = (orderId) => {
    router.push(`/order-detail/${orderId}`);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleAddNew = () => {
    router.push(`/distributor-order/new/`);
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md h-screen 2xl:h-[700px]">
      <div className="flex justify-between">
        <input
          className="border p-1 px-2 rounded mb-4 w-1/2"
          type="text"
          placeholder="Cari Berdasarkan No.Order dan Tanggal"
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
      <table className="w-full">
        <thead>
          <tr className="text-md text-left text-slate-700">
            <th className="py-2 px-4 ">No Order</th>
            <th className="py-2 px-4 ">Tanggal</th>
            {/* <th className="py-1 px-4 ">Nama Toko</th>
            <th className="py-1 px-4 ">Jumlah Total</th>
            <th className="py-1 px-4 ">Jumlah Diterima</th>
            <th className="py-1 px-4 ">Jumlah Dikirim</th> */}
            <th className="py-2 px-4 ">Status</th>
            <th className="py-2 px-4 "></th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr className="text-left text-slate-600 text-sm" key={item.id}>
              <td className="py-2 px-4">{item.no_order}</td>
              <td className="py-2 px-4">
                {item.date_request
                  ? moment(
                      new Date(item.date_request.epoch_time * 1000)
                    ).format("YYYY-MM-DD h:mm a")
                  : ""}
              </td>
              {/* <td className="py-2 px-4">{item.org_name}</td>
              <td className="py-2 px-4">{item.totalQty}</td>
              <td className="py-2 px-4">{item.totalQty_receive}</td>
              <td className="py-2 px-4">{item.totalQty_send}</td> */}
              <td className="py-2 px-4 text-red-500">
                {dataStatus[item.status]}
              </td>
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

export default TableDistributor;
