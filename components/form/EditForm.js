import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { tableProduct } from '../constant/table-data';

const EditForm = () => {
  const router = useRouter();
  const { id } = router.query;

  const [formData, setFormData] = useState({
    sku: '',
    product: '',
    category: '',
    image: '',
    barcode: '',
    konsinyasi: '',
    price1: '',
    price2: '',
    level: '',
    info: '',
  });

  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    // Temukan data produk berdasarkan id
    const selectedProduct = tableProduct.find((product) => product.id === Number(id));

    if (selectedProduct) {
      setFormData(selectedProduct);
      setPreviewImage(selectedProduct.image);
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          image: reader.result, // Set URL gambar dalam formData
        }));
        setPreviewImage(reader.result); // Set URL gambar untuk ditampilkan
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProductData = tableProduct.map((product) => {
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
    const updatedTableProduct = [...updatedProductData];

    // Redirect ke halaman produk setelah berhasil mengupdate
    router.push('/product');
  };

  return (
    <div>
      <form className='max-w-sm' onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold" htmlFor="sku">SKU:</label>
          <input
            className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
            type="text"
            id="sku"
            name="sku"
            value={formData.sku}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold" htmlFor="product">Product:</label>
          <input
          className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
            type="text"
            id="product"
            name="product"
            value={formData.product}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold" htmlFor="category">Category:</label>
          <input
          className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold" htmlFor="image">Image:</label>
          <input
            className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        {previewImage && (
          <div className="mb-4">
            <img
              src={previewImage}
              alt="Preview"
              className="w-full rounded-md"
              style={{ maxWidth: '200px' }}
            />
          </div>
        )}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold" htmlFor="barcode">Barcode:</label>
        <input
        className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
          type="text"
          id="barcode"
          name="barcode"
          value={formData.barcode}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold" htmlFor="konsinyasi">Konsinyasi:</label>
        <input
        className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
          type="text"
          id="konsinyasi"
          name="konsinyasi"
          value={formData.konsinyasi}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold" htmlFor="price1">Distributor Price:</label>
        <input
        className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
          type="text"
          id="price1"
          name="price1"
          value={formData.price1}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold" htmlFor="price2">Selling Price:</label>
        <input
        className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
          type="text"
          id="price2"
          name="price2"
          value={formData.price2}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold" htmlFor="level">Level:</label>
        <input
        className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
          type="text"
          id="level"
          name="level"
          value={formData.level}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold" htmlFor="info">Info:</label>
        <input
        className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
          type="text"
          id="info"
          name="info"
          value={formData.info}
          onChange={handleInputChange}
        />
      </div>
        <button className='border border-gray-300 rounded-md' type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default EditForm;
