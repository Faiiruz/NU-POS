import React from 'react';
import { dataTransaction} from '../constant/table-data';
import { useRouter } from 'next/router';
import {AiOutlineEye} from 'react-icons/ai'

const StoreTransaction = () => {
  const router = useRouter();

  const handleViewDetail = () => {
    router.push(`transaction/detail/`);
  };

  return (
    <div>
    <table className="bg-white border border-slate-100 w-full">
      <thead>
        <tr className='text-left text-md text-slate-700'>
          <th className="py-2 px-4 border-b">No Transaction</th>
          <th className="py-2 px-4 border-b">Date</th>
          <th className="py-2 px-4 border-b">Sub Total</th>
          <th className="py-2 px-4 border-b">Discount</th>
          <th className="py-2 px-4 border-b">Grand Total</th>
          <th className="py-1 px-4"></th>
        </tr>
      </thead>
      <tbody>
        {dataTransaction.map((item) => (
          <tr className='text-sm text-slate-700 text-left' key={item.id}>
            <td className="py-4 px-4">{item.no}</td>
            <td className="py-4 px-4">{item.date}</td>
            <td className="py-4 px-4">{item.subtotal}</td>
            <td className="py-4 px-4">{item.discount}</td>
            <td className="py-4 px-4">{item.total}</td>
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
    </div>
  );
};

export default StoreTransaction;