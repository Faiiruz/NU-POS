import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { tableStore } from '../constant/table-data';


const FormStore = () => {
  const router = useRouter();
  const { id } = router.query;

  const [formData, setFormData] = useState({
    outlet: "",
    owner: "",
    email: "",
    no: "",
    provinsi: "",
    regency: "",
    subdisrict: "",
    code: "",
    place: "",
  });

  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    // Temukan data produk berdasarkan id
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

    const AddNewStore = tableStore.map((product) => {
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
    const AddDataStore = [...AddNewStore];

    // Redirect ke halaman produk setelah berhasil mengupdate
    router.push('/store');
  };

  return (
    <div>
      <form className='max-w-sm' onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold" htmlFor="sku">Outlet Name</label>
          <input
            className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
            type="text"
            id="outlet"
            name="outlet"
            value={formData.outlet}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold" htmlFor="owner">Owner Name</label>
          <input
          className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
            type="text"
            id="owner"
            name="owner"
            value={formData.owner}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold" htmlFor="email">Email</label>
          <input
          className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold" htmlFor="no">Phone Number</label>
          <input
            className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
            type="text"
            id="no"
            name="no"
            value={formData.no}
            onChange={handleInputChange}
          />
        </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold" htmlFor="province">Province</label>
        <input
        className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
          type="text"
          id="province"
          name="province"
          value={formData.provinsi}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold" htmlFor="regency">Regency</label>
        <input
        className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
          type="text"
          id="regency"
          name="regency"
          value={formData.regency}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold" htmlFor="subdisrict">SubDisrict</label>
        <input
        className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
          type="text"
          id="subdisrict"
          name="subdisrict"
          value={formData.subdisrict}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold" htmlFor="code">Postal Code</label>
        <input
        className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
          type="text"
          id="code"
          name="code"
          value={formData.code}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold" htmlFor="place">Address</label>
        <input
        className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
          type="text"
          id="place"
          name="place"
          value={formData.place}
          onChange={handleInputChange}
        />
      </div>
        <button className='border border-gray-300 rounded-md p-2' type="submit">Add Store</button>
      </form>
    </div>
  );
};

export default FormStore;
