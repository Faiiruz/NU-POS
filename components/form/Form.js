import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  tableProduct,
  konsinyasiOptions,
  categoryOptions,
  levelOptions,
} from "../constant/table-data";
import ProductRepository from "@/repositories/ProductRepository";

const Form = () => {
  const router = useRouter();
  const { id } = router.query;
  const [productData, setProductData] = useState([])

  // const [formData, setFormData] = useState({
  //   sku: "",
  //   product: "",
  //   category: "",
  //   image: "",
  //   barcode: "",
  //   konsinyasi: "",
  //   price1: "",
  //   price2: "",
  //   level: "",
  // });

  const [previewImage, setPreviewImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedChildCategory, setSelectedChildCategory] = useState("");

  useEffect(() => {
    // Temukan data produk berdasarkan id
    const selectedProduct = tableProduct.find(
      (product) => product.id === Number(id)
    );

    if (selectedProduct) {
      setFormData(selectedProduct);
      setPreviewImage(selectedProduct.image);
      setSelectedCategory(selectedProduct.category);
      setSelectedChildCategory(selectedProduct.childCategory || "");
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

  const handleKonsinyasiChange = (e) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      konsinyasi: value,
    }));
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setSelectedCategory(value);
    setSelectedChildCategory("");
    setFormData((prevFormData) => ({
      ...prevFormData,
      category: value,
    }));
  };

  const handleChildCategoryChange = (e) => {
    const { value } = e.target;
    setSelectedChildCategory(value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      childCategory: value,
    }));
  };

  const handleLevelChange = (e) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      level: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        let token = localStorage.getItem("xa");
        let dataToken = JSON.parse(token);
        ProductRepository.postProduct({ xa: dataToken }, 
        data, {
          name: "Minuman Non-Alkohol",
          sku: "ZG011AQA",
          barcode: "CBA-5678",
          category: 20,
          category_name: "Aqua",
          volume: 700,
          volume_unit: "ML",
          unit: "GLASS",
          status: 1,
          konsinyasi: 1
  })
        .then((data) => {
          setProductData(data);
          console.log(data);
        });
      } catch (error) {
        console.error(error);
      } 
      router.push('/product')
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-gray-100">
        <div className=" p-6 bg-white rounded-md shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold" htmlFor="sku">
                SKU:
              </label>
              <input
                className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
                type="text"
                id="sku"
                name="sku"
                value={productData.sku}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold" htmlFor="product">
                Product:
              </label>
              <input
                className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
                type="text"
                id="product"
                name="product"
                value={productData.product}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold"
                htmlFor="category"
              >
                Category:
              </label>
              <select
                className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
                id="category"
                name="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="">-- Pilih Category --</option>
                {categoryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            {selectedCategory &&
              categoryOptions.find(
                (option) => option.value === selectedCategory
              )?.children && (
                <div className="mb-4">
                  <select
                    className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
                    id="childCategory"
                    name="childCategory"
                    value={selectedChildCategory}
                    onChange={handleChildCategoryChange}
                  >
                    <option value="">-- Pilih Child Category --</option>
                    {categoryOptions
                      .find((option) => option.value === selectedCategory)
                      ?.children.map((childOption) => (
                        <option
                          key={childOption.value}
                          value={childOption.value}
                        >
                          {childOption.label}
                        </option>
                      ))}
                  </select>
                </div>
              )}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold" htmlFor="image">
                Image:
              </label>
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
                  style={{ maxWidth: "200px" }}
                />
              </div>
            )}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold" htmlFor="barcode">
                Barcode:
              </label>
              <input
                className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
                type="text"
                id="barcode"
                name="barcode"
                value={productData.barcode}
                onChange={handleInputChange}
              />
            </div>
          </form>
        </div>
      </div>
      <div>
        <div className="p-6 bg-white rounded-md shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold"
                htmlFor="konsinyasi"
              >
                Konsinyasi:
              </label>
              <select
                className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
                id="konsinyasi"
                name="konsinyasi"
                value={productData.konsinyasi}
                onChange={handleKonsinyasiChange}
              >
                <option value="">-- Pilih Konsinyasi --</option>
                {konsinyasiOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold" htmlFor="price1">
                Distributor Price:
              </label>
              <input
                className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
                type="text"
                id="price1"
                name="price1"
                value={productData.price1}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold" htmlFor="price2">
                Selling Price:
              </label>
              <input
                className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
                type="text"
                id="price2"
                name="price2"
                value={productData.price2}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold" htmlFor="level">
                Level:
              </label>
              <select
                className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
                id="level"
                name="level"
                value={productData.level}
                onChange={handleLevelChange}
              >
                <option value="">-- Pilih Level --</option>
                {levelOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-end">
              <button
                className="w-32 px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                type="submit"
              >
                Save Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
