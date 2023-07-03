import React from 'react';
import { dataTransaction} from '../constant/table-data';

const DetailTransaction = () => {

  return (
    <div>
    <table className="bg-white border border-slate-100 w-full">
      <thead>
        <tr className='text-left text-md text-slate-700'>
          <th className="py-2 px-4 border-b border-slate-500">Product Name</th>
          <th className="py-2 px-4 border-b">Quantity</th>
          <th className="py-2 px-4 border-b">Unit</th>
          <th className="py-2 px-4 border-b">Price</th>
          <th className="py-2 px-4 border-b">Discount</th>
          <th className="py-2 px-4 border-b">Total Price</th>
        </tr>
      </thead>
      <tbody>
        {dataTransaction.map((item) => (
          <tr className='text-sm text-slate-700 text-left' key={item.id}>
            <td className="py-4 px-4">{item.product}</td>
            <td className="py-4 px-4">{item.quantity}</td>
            <td className="py-4 px-4">{item.unit}</td>
            <td className="py-4 px-4">{item.price1}</td>
            <td className="py-4 px-4">{item.discount2}</td>
            <td className="py-4 px-4">{item.price2}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default DetailTransaction;