import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { tableStore, provinces } from "../constant/table-data";
import OrganizationRepository from "@/repositories/OrganizationRepository";

const FormStore = () => {
  const router = useRouter();
  const { id } = router.query;
  const [regionData, setRegionData] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [regencyData, setRegencyData] = useState([]);
  const [selectedRegency, setSelectedRegency] = useState(null);
  const [districtData, setDistrictData] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [subdisrictData, setSubdistrictData] = useState([]);
  const [selectedSubdistrict, setSelectedSubdistrict] = useState(null);
  const [selectedPostalCode, setSelectedPostalCode] = useState(null);
  const [selectedUserAccess, setSelectedUserAccess] = useState("");
  const [userData, setUserData] = useState([]);

  const fetchData = async (type, subtype) => {
    try {
      let token = localStorage.getItem("xa");
      let dataToken = JSON.parse(token);
      return OrganizationRepository.getRegion(
        { XA: dataToken },
        type,
        subtype
      ).then((data) => {
        console.log(data);
        return data["data"];
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(async () => {
    const response = await fetchData(1, 123);
    console.log(response);
    setRegionData(response);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await OrganizationRepository.postOrganization({
        xa: localStorage.getItem("xa"), // Menggunakan token XA yang sesuai
        data: userData, // Menggunakan data pengguna dari state
      });

      console.log(response); // Menampilkan respons ke konsol

      if (response && response.success) {
        // Tangani permintaan berhasil
        // Misalnya, mengalihkan pengguna ke halaman lain
        router.push("/store");
      } else {
        // Tangani permintaan gagal atau kesalahan
        // Misalnya, menampilkan pesan kesalahan kepada pengguna
        console.error("Gagal menambahkan toko:", response.error);
      }
    } catch (error) {
      // Tangani kesalahan yang terjadi pada permintaan
      console.error("Kesalahan pada permintaan:", error);
    }
  };

  const handleProvinceChange = async (event) => {
    const selectedProvince = event.target.value;
    const response = await fetchData(2, selectedProvince);
    console.log(response);
    setSelectedProvince(selectedProvince);
    const selectedIndex = event.target.selectedIndex;
    const selectedOption = event.target.options[selectedIndex];
    const org_province_name = selectedOption.getAttribute("org_province_name");

    setRegencyData(response);
    setSelectedDistrict(null);
    setSelectedSubdistrict(null);
    setSelectedPostalCode("");
    setUserData((prevUserData) => ({
      ...prevUserData,
      [event.target.name]: event.target.value,
    }));
    setUserData((prevUserData) => ({
      ...prevUserData,
      ["org_province_name"]: org_province_name,
    }));
  };

  const handleRegencyChange = async (event) => {
    const selectedRegency = event.target.value;
    const response = await fetchData(3, selectedRegency);
    console.log(response);
    setSelectedRegency(selectedRegency);
    const selectedIndex = event.target.selectedIndex;
    const selectedOption = event.target.options[selectedIndex];
    const org_regency_city_name = selectedOption.getAttribute(
      "org_regency_city_name"
    );
    setDistrictData(response);
    setSelectedSubdistrict(null);
    setSelectedPostalCode("");
    setUserData((prevUserData) => ({
      ...prevUserData,
      ["org_regency_city_name"]: org_regency_city_name,
    }));
  };

  const handleDistrictChange = async (event) => {
    const selectedDistrict = event.target.value;
    const response = await fetchData(4, selectedDistrict);
    const selectedIndex = event.target.selectedIndex;
    const selectedOption = event.target.options[selectedIndex];
    const org_sub_district_name = selectedOption.getAttribute(
      "org_sub_district_name"
    );
    setSelectedDistrict(selectedDistrict);
    console.log(response);
    setSubdistrictData(response);
    setSelectedPostalCode("");
    setUserData((prevUserData) => ({
      ...prevUserData,
      ["org_sub_district_name"]: org_sub_district_name,
    }));
  };

  const handleSubdistrictChange = async (event) => {
    const selectedIndex = event.target.selectedIndex;
    const selectedOption = event.target.options[selectedIndex];
    const postalCode = selectedOption.getAttribute("postalCode");

    setSelectedSubdistrict(event.target.value);
    setSelectedPostalCode(postalCode);

    //   setSelectedSubdistrict(selectedSubdistrict);
    //   setSelectedPostalCode("");
    //   setUserData((prevUserData) => ({
    //     ...prevUserData,
    //     [event.target.name]: event.target.value,
    //   }));
  };

  const handleUserAccessChange = (event) => {
    const selectedUserAccess = event.target.value;
    setSelectedUserAccess(selectedUserAccess);
  };

  const handlerChange = (event) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-6 bg-white rounded-md shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="flex mb-4">
            <label
              className="w-1/4 text-right pr-4 text-sm font-bold"
              htmlFor="outlet"
            >
              Outlet Name
            </label>
            <input
              className="w-3/4 px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
              type="text"
              name="org_name"
              value={userData.org_name}
              onChange={handlerChange}
            />
          </div>
          <div className="flex mb-4">
            <label
              className="w-1/4 text-right pr-4 text-sm font-bold"
              htmlFor="owner"
            >
              Owner Name
            </label>
            <input
              className="w-3/4 px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
              type="text"
              id="owner"
              name="name"
              value={userData.name}
              onChange={handlerChange}
            />
          </div>
          <div className="flex mb-4">
            <label
              className="w-1/4 text-right pr-4 text-sm font-bold"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-3/4 px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
              type="text"
              id="email"
              name="org_email"
              value={userData.org_email}
              onChange={handlerChange}
            />
          </div>
          <div className="flex mb-4">
            <label
              className="w-1/4 text-right pr-4 text-sm font-bold"
              htmlFor="no"
            >
              Phone Number
            </label>
            <input
              className="w-3/4 px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
              type="text"
              id="no"
              name="org_phone"
              value={userData.org_phone}
              onChange={handlerChange}
            />
          </div>
          <div className="flex mb-4">
            <label
              className="w-1/4 text-right pr-4 text-sm font-bold"
              htmlFor="province"
            >
              Provinsi
            </label>
            <select
              value={regionData.value}
              onChange={handleProvinceChange}
              name="org_province"
            >
              <option value="">Pilih provinsi</option>
              {regionData.map((item) => (
                <option
                  key={item.id}
                  value={item.id}
                  org_province_name={item.value}
                >
                  {item.value}
                </option>
              ))}
            </select>
          </div>
          <div className="flex mb-4">
            <label
              className="w-1/4 text-right pr-4 text-sm font-bold"
              htmlFor="regency"
            >
              Kabupaten/Kota
            </label>
            <select
              value={selectedRegency}
              onChange={handleRegencyChange}
              disabled={!selectedProvince}
              name="org_regency_city"
            >
              <option value="">Pilih kabupaten/kota</option>
              {regencyData.map((item) => (
                <option
                  key={item.id}
                  value={item.id}
                  org_regency_city_name={item.value}
                >
                  {item.value}
                </option>
              ))}
            </select>
          </div>
          <div className="flex mb-4">
            <label
              className="w-1/4 text-right pr-4 text-sm font-bold"
              htmlFor="district"
            >
              Kecamatan
            </label>
            <select
              value={selectedDistrict}
              onChange={handleDistrictChange}
              disabled={!selectedRegency}
              name="org_district"
            >
              <option value="">Pilih kecamatan</option>
              {districtData.map((item) => (
                <option
                  key={item.id}
                  value={item.id}
                  org_sub_district_name={item.value}
                >
                  {item.value}
                </option>
              ))}
            </select>
          </div>
          <div className="flex mb-4">
            <label
              className="w-1/4 text-right pr-4 text-sm font-bold"
              htmlFor="subdistrict"
            >
              Kelurahan/Desa
            </label>
            <select
              value={selectedSubdistrict}
              onChange={handleSubdistrictChange}
              disabled={!selectedDistrict}
              name="org_sub_district"
            >
              <option value="">Pilih kelurahan</option>
              {subdisrictData.map((item) => (
                <option
                  key={item.id}
                  value={item.id}
                  postalCode={item.kode_pos}
                >
                  {item.value}
                </option>
              ))}
            </select>
          </div>
          <div className="flex mb-4">
            <label
              className="w-1/4 text-right pr-4 text-sm font-bold"
              htmlFor="postalCode"
            >
              Postal Code
            </label>
            <input
              type="form"
              value={selectedPostalCode}
              disabled
              name="org_postalCode"
            />
          </div>
        </form>
      </div>
      <div className="p-6 bg-white rounded-md shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="flex mb-4">
            <label
              className="w-1/4 text-right pr-4 text-sm font-bold"
              htmlFor="place"
            >
              Address
            </label>
            <input
              className="w-3/4 px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
              type="text"
              id="place"
              name="org_address"
              value={userData.org_address}
              onChange={handlerChange}
            />
          </div>
          <label
            className="w-1/4 text-right pr-4 text-sm font-bold"
            htmlFor="userAccess"
          >
            User Access
          </label>
          <div className="flex mb-4">
            <label
              className="w-1/4 text-right pr-4 text-sm font-bold"
              htmlFor="userEmail"
            >
              User Name
            </label>
            <input
              className="w-3/4 px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
              type="email"
              id="userEmail"
              name="_uname_admin"
              value={userData._uname_admin}
              onChange={handlerChange}
            />
          </div>

          <div className="flex mb-4">
            <label
              className="w-1/4 text-right pr-4 text-sm font-bold"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-3/4 px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handlerChange}
            />
          </div>

          <div className="flex mb-4">
            <label
              className="w-1/4 text-right pr-4 text-sm font-bold"
              htmlFor="rePassword"
            >
              Re-Password
            </label>
            <input
              className="w-3/4 px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
              type="password"
              id="rePassword"
              name="rePassword"
              value={userData.password}
              onChange={handlerChange}
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
