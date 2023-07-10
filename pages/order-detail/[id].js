import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import OrderRepository from "@/repositories/OrderRepository";
import moment from "moment";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";

const TableDetailOrder = () => {
  const router = useRouter();
  const id = router.query['id']
  console.log(id);
  const [getDetail, setGetDetail] = useState([])
  const [detailOrder, setDetailOrder] = useState([])
  const [setStatus, isSetStatus] = useState({1: "request", 2: "parsial", 4: "close"})

  const crumbs = [
    { label: "Order", url: "/order" },
    { label: "Detail Order", url: "/order/detail" },
  ];

  const handleGoBack = () => {
    router.push("/order");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let token = localStorage.getItem("xa");
        let dataToken = JSON.parse(token);
        OrderRepository.getOrderDetail({ XA: dataToken }, id )
        .then((data) => {
          setGetDetail(data['data']['order_detail']);
          setDetailOrder(data['data']['order'])
          console.log(data);
        });
      } catch (error) {
        console.error(error);
      }
    };
    console.log(id);
    if(id) {
    fetchData()
    }
  }, [id]);

//   const firstData = tableData[0];

  return (
    <Layout>
      <div className="p-8">
      <Breadcrumbs crumbs={crumbs} />
    <div className="p-6 bg-white rounded-md shadow-md">
      {detailOrder && (
        <div className="flex flex-col space-y-1 mb-3 tracking-wide ">
          <a>Outlet: {detailOrder.org_name}</a>
          {/* <a>Owner: {firstData.owner}</a> */}
          <span>
            Status<a className="ml-1"></a>: {setStatus[detailOrder.status]}
          </span>
          <span>
            {console.log(detailOrder)}
            Date<a className="ml-4"></a>: {detailOrder.date_request ? moment(new Date(detailOrder.date_request.epoch_time * 1000)).format('YYYY-MM-DD'):''}
          </span>
        </div>
      )}
      <table className="w-full">
        <thead>
          <tr className="text-left text-md text-slate-700">
            <th className="py-2 px-4">SKU</th>
            <th className="py-2 px-4">Product Name</th>
            <th className="py-2 px-4">Category</th>
            {/* <th className="py-2 px-4">Price</th> */}
            <th className="py-2 px-4">Quantity</th>
            <th className="py-2 px-4">Quantity Recived</th>
            <th className="py-2 px-4">Quantity Send</th>
            <th className="py-2 px-4">Unit</th>
            <th className="py-2 px-4">Volume</th>
            <th className="py-2 px-4">Volume Unit</th>
          </tr>
        </thead>
        <tbody>
          {getDetail && getDetail.map((item) => (
            <tr className="text-sm text-slate-700 text-left" key={item.id}>
              <td className="py-4 px-4">{item.id}</td>
              <td className="py-4 px-4">{item.product_name}</td>
              <td className="py-4 px-4">{item.category_name}</td>
              {/* <td className="py-4 px-4">{item.price}</td> */}
              <td className="py-4 px-4">{item.qty}</td>
              <td className="py-4 px-4">{item.qty_receive}</td>
              <td className="py-4 px-4">{item.qty_send}</td>
              <td className="py-4 px-4">{item.unit}</td>
              <td className="py-4 px-4">{item.volume}</td>
              <td className="py-4 px-4">{item.volume_unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button
          onClick={handleGoBack}
          className="flex items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          Close Order
        </button>
      </div>
    </div>
    </div>
    </Layout>
  );
};

export default TableDetailOrder;
