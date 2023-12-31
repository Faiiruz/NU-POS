import React from "react";
import { dataTransaction } from "../constant/table-data";

const DetailTransaction = () => {
  return (
    <div className="p-6 bg-white rounded-md shadow-md h-screen 2xl:h-[700px]">
      <table className="bg-white border border-slate-100 w-full">
        <thead>
          <tr className="text-left text-md text-slate-700">
            <th className="py-2 px-4 border-b">
              Product Name
            </th>
            <th className="py-2 px-4 border-b">Quantity</th>
            <th className="py-2 px-4 border-b">Unit</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {dataTransaction.map((item) => (
            <tr className="text-sm text-slate-700 text-left" key={item.id}>
              <td className="py-2 px-4 border-b">{item.product}</td>
              <td className="py-2 px-4 border-b">{item.quantity}</td>
              <td className="py-2 px-4 border-b">{item.unit}</td>
              <td className="py-2 px-4 border-b">{item.price1}</td>
              <td className="py-2 px-4 border-b">{item.price2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailTransaction;
