import React from "react";
import { detailOrder, tableData } from "../constant/table-data";
import { useRouter } from "next/router";

const TableDetailOrder = () => {
  const router = useRouter();

  const handleGoBack = () => {
    // Kembali ke halaman order
    router.push("/order");
  };

  const firstData = tableData[0];

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      {firstData && (
        <div className="flex flex-col space-y-1 mb-3 tracking-wide ">
          <a>Outlet: {firstData.outlet}</a>
          <a>Owner: {firstData.owner}</a>
          <span>
            Status<a className="ml-1"></a>: {firstData.info}
          </span>
          <span>
            Date<a className="ml-4"></a>: {firstData.date}
          </span>
        </div>
      )}
      <table className="w-full">
        <thead>
          <tr className="text-left text-md text-slate-700">
            <th className="py-2 px-4    ">SKU</th>
            <th className="py-2 px-4    ">Product Name</th>
            <th className="py-2 px-4    ">Category</th>
            <th className="py-2 px-4    ">Price</th>
            <th className="py-2 px-4    ">Quantity</th>
            <th className="py-2 px-4    ">Sub Total</th>
            <th className="py-2 px-4    ">Quantity Fulfilled</th>
          </tr>
        </thead>
        <tbody>
          {detailOrder.map((item) => (
            <tr className="text-sm text-slate-700 text-left" key={item.id}>
              <td className="py-4 px-4">{item.sku}</td>
              <td className="py-4 px-4">{item.product}</td>
              <td className="py-4 px-4">{item.category}</td>
              <td className="py-4 px-4">{item.price}</td>
              <td className="py-4 px-4">{item.quantity}</td>
              <td className="py-4 px-4">{item.subtotal}</td>
              <td className="py-4 px-4">{item.fulfilled}</td>
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
  );
};

export default TableDetailOrder;
