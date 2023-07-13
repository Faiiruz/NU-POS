import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import OrderRepository from "@/repositories/OrderRepository";
import moment from "moment";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";

const TableDetailOrder = () => {
  const router = useRouter();
  const id = router.query["id"];
  console.log(id);
  const [getDetail, setGetDetail] = useState([]);
  const [detailOrder, setDetailOrder] = useState([]);
  const [setStatus, isSetStatus] = useState({
    1: "Open",
    2: "Parsial",
    4: "Close",
  });

  const crumbs = [
    { label: "Pesanan Toko", url: "/order" },
    { label: "Detail Pesanan Toko", url: `/order-detail/${id}` },
  ];

  const handleGoBack = () => {
    router.push("/order");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let token = localStorage.getItem("xa");
        let dataToken = JSON.parse(token);
        OrderRepository.getOrderDetail({ XA: dataToken }, id).then((data) => {
          setGetDetail(data["data"]["order_detail"]);
          setDetailOrder(data["data"]["order"]);
          console.log(data);
        });
      } catch (error) {
        console.error(error);
      }
    };
    console.log(id);
    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <Layout>
      <div className="p-8">
        <Breadcrumbs crumbs={crumbs} />
        <div className="p-6 bg-white rounded-md shadow-md h-screen">
          {detailOrder && (
            <table className="tracking-wide text-left">
              <tbody>
                <tr>
                  <td className="font-semibold">Nama Toko</td>
                  <td className="px-1">:</td>
                  <td>{detailOrder.org_name}</td>
                </tr>
                <tr>
                  <td className="font-semibold ">Status</td>
                  <td className="px-1">:</td>
                  <td>
                    <span className="text-green-500">
                      {setStatus[detailOrder.status]}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold ">Tanggal</td>
                  <td className="px-1">:</td>
                  <td>
                    {detailOrder.date_request
                      ? moment(
                          new Date(detailOrder.date_request.epoch_time * 1000)
                        ).format('MMMM Do YYYY, h:mm a')
                      : ""}
                  </td>
                </tr>
              </tbody>
            </table>
          )}

          <table className="w-full mt-3">
            <thead>
              <tr className="text-left text-md text-slate-700">
                <th className="py-2 px-4 border-b">SKU</th>
                <th className="py-2 px-4 border-b">Nama Produk</th>
                <th className="py-2 px-4 border-b">Kategori</th>
                {/* <th className="py-2 px-4">Price</th> */}
                <th className="py-2 px-4 border-b">Jumlah</th>
                <th className="py-2 px-4 border-b">Jumlah Diterima</th>
                <th className="py-2 px-4 border-b">Jumlah Diterima</th>
                <th className="py-2 px-4 border-b">Unit</th>
                <th className="py-2 px-4 border-b">Isi</th>
                <th className="py-2 px-4 border-b">Unit isi</th>
              </tr>
            </thead>
            <tbody>
              {getDetail &&
                getDetail.map((item) => (
                  <tr
                    className="text-sm text-slate-700 text-left"
                    key={item.id}
                  >
                    <td className=" px-4 border-b">{item.id}</td>
                    <td className=" px-4 border-b">{item.product_name}</td>
                    <td className=" px-4 border-b">{item.category_name}</td>
                    {/* <td className=" px-4">{item.price}</td> */}
                    <td className=" px-4 border-b">{item.qty}</td>
                    <td className=" px-4 border-b">{item.qty_receive}</td>
                    <td className=" px-4 border-b">{item.qty_send}</td>
                    <td className=" px-4 border-b">{item.unit}</td>
                    <td className=" px-4 border-b">{item.volume}</td>
                    <td className=" px-4 border-b">{item.volume_unit}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="flex justify-end mt-4">
            {detailOrder && detailOrder.status !== 4 && (
              <button
                onClick={handleGoBack}
                className="flex items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Close Order
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TableDetailOrder;
