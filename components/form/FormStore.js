import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { tableStore, provinces } from "../constant/table-data";

const FormStore = () => {
  const router = useRouter();
  const { id } = router.query;

  const [formData, setFormData] = useState({
    outlet: "",
    owner: "",
    email: "",
    no: "",
    province: "",
    regency: "",
    subdisrict: "",
    code: "",
    place: "",
  });

  useEffect(() => {
    // Temukan data produk berdasarkan id
    const selectedProduct = tableStore.find(
      (product) => product.id === Number(id)
    );

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

    const AddNewStore = tableStore.map((store) => {
      if (store.id === Number(id)) {
        return {
          ...store,
          ...formData,
        };
      }
      return store;
    });

    const AddDataStore = [...AddNewStore];

    // Redirect ke halaman produk setelah berhasil mengupdate
    router.push("/store");
  };

  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedRegency, setSelectedRegency] = useState("");
  const [selectedSubdistrict, setSelectedSubdistrict] = useState("");
  const [selectedPostalCode, setSelectedPostalCode] = useState("");

  const handleProvinceChange = (event) => {
    const selectedProvince = event.target.value;
    setSelectedProvince(selectedProvince);
    setSelectedRegency("");
    setSelectedSubdistrict("");
    setSelectedPostalCode("");
  };

  const handleRegencyChange = (event) => {
    const selectedRegency = event.target.value;
    setSelectedRegency(selectedRegency);
    setSelectedSubdistrict("");
    setSelectedPostalCode("");
  };

  const handleSubdistrictChange = (event) => {
    const selectedSubdistrict = event.target.value;
    setSelectedSubdistrict(selectedSubdistrict);
    setSelectedPostalCode("");
  };

  const handlePostalCodeChange = (event) => {
    const selectedPostalCode = event.target.value;
    setSelectedPostalCode(selectedPostalCode);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-6 bg-white rounded-md shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold" htmlFor="sku">
              Outlet Name
            </label>
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
            <label className="block mb-2 text-sm font-bold" htmlFor="owner">
              Owner Name
            </label>
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
            <label className="block mb-2 text-sm font-bold" htmlFor="email">
              Email
            </label>
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
            <label className="block mb-2 text-sm font-bold" htmlFor="no">
              Phone Number
            </label>
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
            <label className="block mb-2 text-sm font-bold" htmlFor="province">
              Province
            </label>
            <select value={selectedProvince} onChange={handleProvinceChange}>
              <option value="">Pilih provinsi</option>
              {provinces.map((province, index) => (
                <option key={index} value={province.name}>
                  {province.name}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
      <div className="p-6 bg-white rounded-md shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            {selectedProvince && (
              <>
                <label className="block mb-2 text-sm font-bold">
                  Kabupaten/Kota:
                </label>
                <select value={selectedRegency} onChange={handleRegencyChange}>
                  <option value="">Pilih kabupaten/kota</option>
                  {provinces
                    .find((province) => province.name === selectedProvince)
                    .regencies.map((regency, index) => (
                      <option key={index} value={regency.name}>
                        {regency.name}
                      </option>
                    ))}
                </select>
              </>
            )}
          </div>
          <div className="mb-4">
            {selectedRegency && (
              <>
                <label className="block mb-2 text-sm font-bold">
                  Kecamatan:
                </label>
                <select
                  value={selectedSubdistrict}
                  onChange={handleSubdistrictChange}
                >
                  <option value="">Pilih kecamatan</option>
                  {provinces
                    .find((province) => province.name === selectedProvince)
                    .regencies.find(
                      (regency) => regency.name === selectedRegency
                    )
                    .subdistricts.map((subdistrict, index) => (
                      <option key={index} value={subdistrict.name}>
                        {subdistrict.name}
                      </option>
                    ))}
                </select>
              </>
            )}
          </div>
          <div className="mb-4">
            {selectedSubdistrict && (
              <>
                <label className="block mb-2 text-sm font-bold">
                  Kode Pos:
                </label>
                <input
                  type="text"
                  value={selectedPostalCode}
                  onChange={handlePostalCodeChange}
                  placeholder="Kode pos"
                />
              </>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold" htmlFor="place">
              Address
            </label>
            <input
              className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
              type="text"
              id="place"
              name="place"
              value={formData.place}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-end">
            <button
              className="flex items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              type="submit"
            >
              Add Store
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormStore;
