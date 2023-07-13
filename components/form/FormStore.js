import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { tableStore, provinces } from "../constant/table-data";
import OrganizationRepository from "@/repositories/OrganizationRepository";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppContext } from "../context/AppContext";

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
  const [passwordError, setPasswordError] = useState("")
  const [userData, setUserData] = useState([]);
  const [formErrors, setFormErrors] = useState({});

  const keyContext = 'tableStore'
  const contextData = useAppContext(keyContext)
  const {addContext, removeContext } = contextData

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

  useEffect(() => {
    // const response = await fetchData(1, 123);
     fetchData(1, 123)
     .then(response => {
       setRegionData(response);
     })
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    let hasErrors = false;

    if (!userData.password){
      errors.password = "Password is required"
      hasErrors = true
      toast.error("Please fill in the Password field");
    }

    if (!userData._uname_admin){
      errors._uname_admin = "User Name is required"
      hasErrors = true
      toast.error("Please fill in the User Name field");
    }
  
    if (!userData.org_name) {
      errors.org_name = "Outlet Name is required";
      hasErrors = true;
      toast.error("Please fill in the Outlet Name field");
    }
  
    if (!userData.name) {
      errors.name = "Owner Name is required";
      hasErrors = true;
      toast.error("Please fill in the Owner Name field");
    }
  
    if (!userData.org_email) {
      errors.org_email = "Email is required";
      hasErrors = true;
      toast.error("Please fill in the Email field");
    }

    if (!userData.org_phone){
      errors.org_phone = "Phone Number is required"
      hasErrors = true
      toast.error("Please fill in the Phone Number field");
    }

    if (!userData.org_address){
      errors.org_address = "Address is required"
      hasErrors = true
      toast.error("Please fill in the Address field");
    }

    if (!userData.org_province_name){
      errors.org_province_name = "Province is required"
      hasErrors = true
      toast.error("Please fill in the Province field");
    }

    if (!userData.org_regency_city_name){
      errors.org_regency_city_name = "Regency is required"
      hasErrors = true
      toast.error("Please fill in the Regency field");
    }

    // if (!userData.org_district_name){
    //   errors.org_district_name = "District is required"
    //   hasErrors = true
    //   toast.error("Please fill in the District field");
    // }

    // if (!userData.org_sub_district){
    //   errors.org_sub_district_name = "Sub District is required"
    //   hasErrors = true
    //   toast.error("Please fill in the Sub District field");
    // }

    if (userData.password !== userData.rePassword) {
      errors.password = "Passwords do not match";
      errors.rePassword = "Passwords do not match";
      hasErrors = true;
      toast.error("Passwords do not match");
    }
    // Jika ada kesalahan, atur state pesan kesalahan dan tampilkan notifikasi toast
    if (hasErrors) {
      setFormErrors(errors);
      return;
    }
    // Reset pesan kesalahan jika validasi berhasil
    setFormErrors({});
    try {
      let token = localStorage.getItem("xa");
      let dataToken = JSON.parse(token);
      userData.authority = 8;
      const response = await OrganizationRepository.postOrganization({
        data: userData,
        XA: dataToken
      });

      console.log(response); // Menampilkan respons ke konsol
      console.log("1231412");
      if (response && response['data']) {
        console.log(contextData);
        console.log(contextData[keyContext]);
        // let newData = contextData[keyContext].unshift(response['data'])
        // console.log(newData);
        // addContext(keyContext, newData)
        toast.success("Data has been successfully submitted");
        // router.push("/store");
      } else {
        console.error("Failed to add store:", response.error);
        toast.error("Failed to add store");
      }
    } catch (error) {
      console.error("Error in request:", error);
      toast.error("An error occurred");
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
              className="w-3/4 px-2 py-1 border border-gray-300 rounded-md focus:outline-non"
              onChange={handleProvinceChange}
              name="org_province_name"
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
            className="w-3/4 px-2 py-1 border border-gray-300 rounded-md focus:outline-non"
              value={selectedRegency}
              onChange={handleRegencyChange}
              disabled={!selectedProvince}
              name="org_regency_city_name"
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
            className="w-3/4 px-2 py-1 border border-gray-300 rounded-md focus:outline-non"
              value={selectedDistrict}
              onChange={handleDistrictChange}
              disabled={!selectedRegency}
              name="org_district_name"
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
            className="w-3/4 px-2 py-1 border border-gray-300 rounded-md focus:outline-non"
              value={selectedSubdistrict}
              onChange={handleSubdistrictChange}
              disabled={!selectedDistrict}
              name="org_sub_district_name"
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
            className="w-3/4 px-2 py-1 border border-gray-300 rounded-md focus:outline-non"
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
              value={userData.rePassword}
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
      <ToastContainer />
    </div>
  );
};

export default FormStore;
