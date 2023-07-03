import React from 'react';
import { detailOrder} from '../constant/table-data';
import { useRouter } from 'next/router';

const TableDetailOrder = () => {
  const router = useRouter();

  const handleGoBack = () => {
    // Kembali ke halaman order
    router.push('/order');
  };
  

  return (
    <div>
    <table className="bg-white border border-slate-100 w-full">
      <thead>
        <tr className='text-left text-md text-slate-700'>
          <th className="py-2 px-4 border-b">SKU</th>
          <th className="py-2 px-4 border-b">Product Name</th>
          <th className="py-2 px-4 border-b">Category</th>
          <th className="py-2 px-4 border-b">Price</th>
          <th className="py-2 px-4 border-b">Quantity</th>
          <th className="py-2 px-4 border-b">Sub Total</th>
          <th className="py-2 px-4 border-b">Quantity Fulfilled</th>
        </tr>
      </thead>
      <tbody>
        {detailOrder.map((item) => (
          <tr className='text-sm text-slate-700 text-left' key={item.id}>
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