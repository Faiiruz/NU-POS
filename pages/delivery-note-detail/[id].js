import React, { useState, useEffect } from "react";
import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";
import moment from "moment";
import { useRouter } from "next/router";
import DeliveryRepository from "@/repositories/DeliveryRepository";
import Layout from "@/components/layout/Layout";

const TreeDetail = () => {
  const router = useRouter();
  const id = router.query["id"];
  const [expandedItems, setExpandedItems] = useState([]);
  const [detailData, setDetailData] = useState([]);
  const [setStatus, isSetStatus] = useState({ 1: "Open", 2: "Parsial", 4: "Close" });
  const crumbs = [
    { label: "Delivery Notes", url: "/delivery" },
    { label: "Detail Delivery Notes", url: `/delivery-note-detail/${id}` },
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
        <div className="p-6 bg-white rounded-md shadow-md">
          {detailData.map((item) => (
            <div key={item.id}>
              <div className="w-full cursor-pointer mt-2" onClick={() => toggleExpand(item.id)}>
              <span className={`pr-2 ${expandedItems.includes(item.id) ? "rotate-90" : "rotate-0"}`}>
                {expandedItems.includes(item.id) ? "-" : "+"}
              </span>
                <span className="py-1 px-10 font-bold">{item.no_order}</span>
                <span className="py-1 px-10 font-bold">{item.totalQty}</span>
                <span className="py-1 px-10 font-bold">{item.date_request ? moment(new Date(item.date_request.epoch_time * 1000)).format('YYYY-MM-DD h:mm') : ''}</span>
                <span className="py-1 px-10 font-bold text-red-500">{setStatus[item.status]}</span>
              </div>
              {expandedItems.includes(item.id) && (
                <div className="ml-12 mt-1">
                  <table className="w-full text-left">
                    <thead>
                      <tr>
                        <th className="py-1 px-4">SKU</th>
                        <th className="py-1 px-4">Product Name</th>
                        <th className="py-1 px-4">Category</th>
                        <th className="py-2 px-4">Quantity</th>
                        <th className="py-2 px-4">Quantity Recived</th>
                        <th className="py-2 px-4">Quantity Send</th>
                        <th className="py-2 px-4">Unit</th>
                        <th className="py-2 px-4">Volume</th>
                        <th className="py-2 px-4">Volume Unit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.detail_order.map((detail) => (
                        <tr key={detail.id}>
                          <td className="py-1 px-4">{detail.product_id}</td>
                          <td className="py-4 px-4">{detail.product_name}</td>
                          <td className="py-4 px-4">{detail.category_name}</td>
                          <td className="py-4 px-4">{detail.qty}</td>
                          <td className="py-4 px-4">{detail.qty_receive}</td>
                          <td className="py-4 px-4">{detail.qty_send}</td>
                          <td className="py-4 px-4">{detail.unit}</td>
                          <td className="py-4 px-4">{detail.volume}</td>
                          <td className="py-4 px-4">{detail.volume_unit}</td>
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
