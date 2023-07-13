import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
import DeliveryRepository from "@/repositories/DeliveryRepository";
import moment from "moment";

const TableDelivery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const [dropdownItemId, setDropdownItemId] = useState(null);
  const [OrderData, setOrderData] = useState([]);
  const [dataStatus, isSetStatus] = useState({ 1: "Send", 2: "Receive" });
  const [dataType, isDataType] = useState({
    1: "Non-Konsinyasi",
    2: "Konsinyasi",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let token = localStorage.getItem("xa");
        let dataToken = JSON.parse(token);
        DeliveryRepository.getDelivery({ XA: dataToken }, 1).then((data) => {
          setOrderData(data["data"]);
          console.log(data);
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const filtertableDelivery = OrderData.filter((item) =>
    item.to_id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDropdownChange = (itemId) => {
    if (dropdownItemId === itemId) {
      setDropdownItemId(null); // Toggle dropdown visibility
    } else {
      setDropdownItemId(itemId);
    }

    // if (action === "edit") {
    //   // Handle edit action
    // } else if (action === "view detail") {
    //   // Handle delete action
    //   setDeleteItemId(itemId);
    //   setShowDeleteConfirmation(true);
    // }
  };

  const handleAddDelivery = () => {
    router.push(`/delivery/new/`);
  };

  const handleViewDetail = (deliveryId) => {
    router.push(`/delivery-note-detail/${deliveryId}`);
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md h-screen 2xl:h-[700px]">
      <div className="flex gap-2">
        <input
          className="border p-1 rounded mb-4 px-2 grow"
          type="text"
          placeholder="Cari Berdasarkan No.Surat Jalan, Tanggal, dan Nama Toko"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          onClick={handleAddDelivery}
          className="flex items-center px-4 py-4 mb-4 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          <AiOutlinePlus className="mr-2" />
          Buat Surat Jalan
        </button>
      </div>
      <table className="bg-white w-full">
        <thead>
          <tr className="text-left text-md text-slate-700">
            <th className="py-2 px-4 border-b">No Surat Jalan</th>
            <th className="py-2 px-4 border-b">Tanggal</th>
            <th className="py-2 px-4 border-b">Nama Toko</th>
            <th className="py-2 px-4 border-b">Harga</th>
            <th className="py-2 px-4 border-b">Tipe</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b"></th>
          </tr>
        </thead>
        <tbody>
          {filtertableDelivery.map((item) => (
            <tr className="text-left text-sm  text-slate-500" key={item.id}>
              <td className="py-2 px-4 border-b">{item.to_id}</td>
              <td className="py-2 px-4 border-b">
                {item.date_send
                  ? moment(new Date(item.date_send.epoch_time * 1000)).format(
                      "YYYY-MM-DD h:mm a"
                    )
                  : ""}
              </td>
              <td className="py-2 px-4 border-b">{item.to_name}</td>
              <td className="py-2 px-4 border-b">Rp{item.price}</td>
              <td className="py-2 px-4 border-b">{dataType[item.type]}</td>
              <td className="py-2 px-4 border-b">{dataStatus[item.status]}</td>
              <td className="py-4 px-4 border-b">
                <div className="relative inline-block">
                  <div
                    onClick={() => handleDropdownChange(item.id, "edit")}
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
                          className="block px-4 py-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                          role="menuitem"
                          href={`/delivery/edit`}
                        >
                          Edit
                        </Link>
                        <button
                          className="block w-full text-left px-4 py-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                          role="menuitem"
                          onClick={() => handleViewDetail(item.id)}
                        >
                          Lihat Detail
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDelivery;
