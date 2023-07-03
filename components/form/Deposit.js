import React, { useEffect, useState } from 'react'
import { tableStore } from '../constant/table-data'
import { useRouter } from 'next/router'

const Deposit = () => {
  const router = useRouter()
  const { id } = router.query;

  const [formData, setFormData] = useState({
    deposit: ''
  });

    const firstData = tableStore[0]

    useEffect(() => {
      const selectedProduct = tableStore.find((product) => product.id === Number(id));

      if (selectedProduct) {
        setFormData(selectedProduct);
      }
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const updatedDataDeposit = tableStore.map((product) => {
          if (product.id === Number(id)) {
            return {
              ...product,
              ...formData,
            };
          }
          return product;
        });
    
        // Simulasikan penyimpanan data produk yang diperbarui
        // bisa ke database atau penyimpanan lokal seperti localStorage
        // disini kita hanya akan menyimpan dalam variabel productData
        // pastikan Anda melakukan penyimpanan yang sesuai dengan kebutuhan aplikasi Anda
        // atau gunakan state management seperti Redux untuk mengelola data
        // untuk keperluan simulasi, buat variabel lokal dan jangan ubah variabel tableProduct
        const updatedAddDeposit = [...updatedDataDeposit];
    
        // Redirect ke halaman produk setelah berhasil mengupdate
        router.push('/store');
      };

  return (
    <div>
        {firstData && (
            <div className='flex flex-col space-y-1 tracking-wide mb-4'>
                <a>Outlet Name:{firstData.outlet}</a>
                <a>Owner Name: {firstData.owner}</a>
            </div>
        )}
        <form className='max-w-sm' onSubmit={handleSubmit}>
        <label className="block mb-2 text-sm font-bold" >Nominal Deposit:</label>
          <input
            className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
            type="text"
            id="deposit"
            name="deposit"
            value={formData.deposit}
            onChange={handleInputChange}
          />
          <button className='border border-gray-300 mt-4 rounded-md' type="submit">Submit</button>
          </form>
    </div>
  )
}

export default Deposit