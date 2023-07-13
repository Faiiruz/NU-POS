import React from "react";
import { historyDeposit, tableStore } from "../constant/table-data";

const HistoryDeposit = () => {
  const firstData = tableStore[0];

  return (
    <div className="p-6 bg-white rounded-md shadow-md h-screen 2xl:h-[700px]">
      {firstData && (
        <div className="flex flex-col space-y-1 tracking-wide mb-3">
          <a>Outlet Name:{firstData.outlet}</a>
          <a>Owner Name:{firstData.owner}</a>
        </div>
      )}
      <table className="bg-white border border-slate-100 w-full">
        <thead>
          <tr className="text-left text-md text-slate-700">
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Amount</th>
          </tr>
        </thead>
        <tbody>
          {historyDeposit.map((item) => (
            <tr className="text-sm text-slate-700 text-left" key={item.id}>
              <td className="py-4 px-4 border-b">{item.date}</td>
              <td className="py-4 px-4 border-b">{item.ket}</td>
              <td className="py-4 px-4 border-b">{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryDeposit;
