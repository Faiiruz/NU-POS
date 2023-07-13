import React, { useState, useEffect } from "react";
import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";
import moment from "moment";
import { useRouter } from "next/router";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import DeliveryRepository from "@/repositories/DeliveryRepository";
import Layout from "@/components/layout/Layout";

const TreeDetail = () => {
  const router = useRouter();
  const id = router.query["id"];
  const [expandedItems, setExpandedItems] = useState([]);
  const [detailData, setDetailData] = useState([]);
  const [setStatus, isSetStatus] = useState({ 1: "Open", 2: "Parsial", 4: "Close" });
  const crumbs = [
    { label: "Surat Jalan Toko", url: "/delivery" },
    { label: "Detail Surat Jalan Toko", url: `/delivery-note-detail/${id}` },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        let token = localStorage.getItem("xa");
        let dataToken = JSON.parse(token);
        const data = await DeliveryRepository.getDeliveryDetail({ XA: dataToken }, id);
        setDetailData(data["data"]);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const toggleExpand = (itemId) => {
    if (expandedItems.includes(itemId)) {
      setExpandedItems(expandedItems.filter((id) => id !== itemId));
    } else {
      setExpandedItems([...expandedItems, itemId]);
    }
  };

  return (
    <Layout>
      <div className="p-8">
      <Breadcrumbs crumbs={crumbs} />
        <div className="p-6 bg-white rounded-md shadow-md h-screen 2xl:h-[700px]">
          {detailData.map((item) => (
            <div key={item.id}>
              <div className="w-full flex cursor-pointer mt-2" onClick={() => toggleExpand(item.id)}>
              <span className={`pr-2 ${expandedItems.includes(item.id)}`}>
                {expandedItems.includes(item.id) ? <FaAngleUp/> : <FaAngleDown/>}
              </span>
              <label className="flex flex-col font-bold">No Order<span className="py-1 text-slate-700">{item.no_order}</span></label>
              <label className="flex flex-col px-10 font-bold">Jumlah total<span className="py-1 text-slate-700">{item.totalQty}</span></label>
              <label className="flex flex-col px-10 font-bold">Tanggal<span className="py-1 text-slate-700">{item.date_request ? moment(new Date(item.date_request.epoch_time * 1000)).format('YYYY-MM-DD h:mm') : ''}</span></label>
              <label className="flex flex-col px-10 font-bold">Status<span className="py-1 text-green-500">{setStatus[item.status]}</span></label>
              </div>
              {expandedItems.includes(item.id) && (
                <div className="ml-12 mt-1">
                  <table className="w-full text-left">
                    <thead>
                      <tr>
                        <th className="py-1 px-4 border-b">SKU</th>
                        <th className="py-1 px-4 border-b">Product Name</th>
                        <th className="py-1 px-4 border-b">Category</th>
                        <th className="py-2 px-4 border-b">Quantity</th>
                        <th className="py-2 px-4 border-b">Quantity Recived</th>
                        <th className="py-2 px-4 border-b">Quantity Send</th>
                        <th className="py-2 px-4 border-b">Unit</th>
                        <th className="py-2 px-4 border-b">Volume</th>
                        <th className="py-2 px-4 border-b">Volume Unit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.detail_order.map((detail) => (
                        <tr key={detail.id}>
                          <td className="py-1 px-4 border-b">{detail.product_id}</td>
                          <td className="py-4 px-4 border-b">{detail.product_name}</td>
                          <td className="py-4 px-4 border-b">{detail.category_name}</td>
                          <td className="py-4 px-4 border-b">{detail.qty}</td>
                          <td className="py-4 px-4 border-b">{detail.qty_receive}</td>
                          <td className="py-4 px-4 border-b">{detail.qty_send}</td>
                          <td className="py-4 px-4 border-b">{detail.unit}</td>
                          <td className="py-4 px-4 border-b">{detail.volume}</td>
                          <td className="py-4 px-4 border-b">{detail.volume_unit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TreeDetail;