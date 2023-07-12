import React, { useState, useEffect } from "react";
import SettlementRepository from "@/repositories/SettlementRepository";
import { AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/router";
import moment from "moment";


const TreeSettle = () => {
  const router = useRouter();
  const [expandedItems, setExpandedItems] = useState([]);
  const [checked, setChecked] = useState(false);
  const [settleData, setSettleData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filtertableStore = settleData.filter((item) =>
    item.org_id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        let token = localStorage.getItem("xa");
        let dataToken = JSON.parse(token);
        const data = await SettlementRepository.getSettlement({ XA: dataToken });
        setSettleData(data["data"]);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const toggleExpand = (itemId) => {
    if (expandedItems.includes(itemId)) {
      setExpandedItems(expandedItems.filter((id) => id !== itemId));
    } else {
      setExpandedItems([...expandedItems, itemId]);
    }
  };

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  const handleCreateSettlement = () => {
    router.push(`/settlement/new/`);
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <div className="flex justify-between">
        <div className="w-1/2">
        <input
          className="border px-2 rounded mb-4 w-full"
          type="text"
          placeholder="Cari Berdasarkan No Transaksi dan Nama Toko"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        </div>
        <button
          onClick={handleCreateSettlement}
          className="flex items-center px-4 py-2 mb-4 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          <AiOutlinePlus className="mr-2" />
          Buat Pembayaran
        </button>
      </div>
      {filtertableStore.map((item) => (
        <div key={item.id} className="flex items-center cursor-pointer mt-2" onClick={() => toggleExpand(item.id)}>
          <span className={`pr-2 ${expandedItems.includes(item.id)}`}>
                {expandedItems.includes(item.id) ? "-" : "+"}
              </span>
          <label className="flex flex-col font-bold">No Transaksi<span className="py-1">{item.org_id}</span></label>
          <label className="flex flex-col px-10 font-bold">Nama Toko<span className="py-1">{item.to_name}</span></label>
          <label className="flex flex-col px-10 font-bold">Total<span className="py-1">{item.total}</span></label>
          <label className="flex flex-col px-10 font-bold">Tanggal<span className="py-1">{item.date ? moment(new Date(item.date.epoch_time * 1000)).format('YYYY-MM-DD h:mm a'):''}</span></label>
        </div>
      ))}
      {expandedItems.length > 0 && (
        <div className="ml-12 mt-1">
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-1 px-4 text-left">No Surat Jalan</th>
                <th className="py-1 px-4 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              {settleData.map((item) => (
                expandedItems.includes(item.id) && (
                  <tr key={item.id}>
                    <td className="py-1 px-4">{item.to_id}</td>
                    <td className="py-1 px-4">{item.sub_total}</td>
                  </tr>
                )
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TreeSettle;
