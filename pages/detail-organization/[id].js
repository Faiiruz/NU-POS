import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";
import {
  AiOutlineFileText,
  AiFillShopping,
  AiOutlinePlus,
  AiOutlineCopy,
} from "react-icons/ai";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";
import OrganizationRepository from "@/repositories/OrganizationRepository";

const DetailStore = () => {
  const router = useRouter();
  const id = router.query['id']
  console.log(id);
  const [getDetail, setGetDetail] = useState([])
  const crumbs = [
    { label: "Store", url: "/store" },
    { label: "Profile", url: "/store/detail" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        let token = localStorage.getItem("xa");
        let dataToken = JSON.parse(token);
        OrganizationRepository.getDetailOrganization({ XA: dataToken }, id )
        .then((data) => {
          setGetDetail(data);
        });
      } catch (error) {
        console.error(error);
      }
    };
    if(id) {
    fetchData()
    }
  }, [id]);

  const handleAViewTransaction = () => {
    router.push(`/store/detail/transaction`);
  };

  const handleAStoreStock = () => {
    router.push(`/store/detail/stock`);
  };

  const handleADepositStore = () => {
    router.push(`/store/detail/deposit`);
  };

  const handleHistoryDeposit = () => {
    router.push(`/store/detail/history`);
  };
  return (
    <Layout>
        <div className="p-8">
        <Breadcrumbs crumbs={crumbs} />
    <div className="p-6 bg-white rounded-md shadow-md">
      {getDetail && (
        <div>
          <div className="mb-4">
            <label className="ml-[10px]  mb-2 text-sm font-bold">
              Outlet Name: 
            </label>
            <a className="w-full ml-3 px-2 py-1  rounded-md focus:outline-none">
              {getDetail.org_name}
            </a>
          </div>
          <div className="mb-4">
            <label className="ml-[10px]  mb-2 text-sm font-bold">
              Owner Name:
            </label>
            <a className="w-full ml-3 px-2 py-1   rounded-md focus:outline-none">
              {getDetail.org_desc}
            </a>
          </div>
          <div className="mb-4">
            <label className="ml-[60px]  mb-2 text-sm font-bold">Email:</label>
            <a className="w-full ml-3 px-2 py-1   rounded-md focus:outline-none">
              {getDetail.org_email}
            </a>
          </div>
          <div className="mb-4">
            <label className=" mb-2 text-sm font-bold">Phone Number:</label>
            <a className="w-full ml-3 px-2 py-1   rounded-md focus:outline-none">
              {getDetail.org_phone}
            </a>
          </div>
          <div className="mb-4">
            <label className="ml-[40px] mb-2 text-sm font-bold" htmlFor="sku">
              Province:
            </label>
            <a className="w-full ml-3 px-2 py-1   rounded-md focus:outline-none">
              {getDetail.org_province}
            </a>
          </div>
          <div className="mb-4">
            <label className="ml-[40px] mb-2 text-sm font-bold" htmlFor="sku">
              Regency:
            </label>
            <a className="w-full ml-3 px-2 py-1   rounded-md focus:outline-none">
              {getDetail.org_regency_city}
            </a>
          </div>
          <div className="mb-4">
            <label className="ml-[30px] mb-2 text-sm font-bold" htmlFor="sku">
              SubDisrict:
            </label>
            <a className="w-full ml-3 px-2 py-1   rounded-md focus:outline-none">
              {getDetail.org_sub_district}
            </a>
          </div>
          <div className="mb-4">
            <label className="ml-[30px] mb-2 text-sm font-bold" htmlFor="sku">
              Disrict:
            </label>
            <a className="w-full ml-3 px-2 py-1   rounded-md focus:outline-none">
              {getDetail.org_district}
            </a>
          </div>
          <div className="mb-4">
            <label className="ml-[20px] mb-2 text-sm font-bold" htmlFor="sku">
              Postal Code:
            </label>
            <a className="w-full ml-3 px-2 py-1   rounded-md focus:outline-none">
              {getDetail.org_postalCode}
            </a>
          </div>
          <div className="mb-4">
            <label className="ml-[45px]  mb-2 text-sm font-bold" htmlFor="sku">
              Address:
            </label>
            <a className="w-full ml-3 px-2 py-1   rounded-md focus:outline-none">
              {getDetail.org_address}
            </a>
          </div>
        </div>
      )}
      <button
        onClick={handleAViewTransaction}
        className="flex items-center px-4 py-2 mb-4 border border-transparent rounded-md text-sm font-medium text-slate-500"
      >
        <AiOutlineFileText size={20} className="mr-2" />
        View Transaction
      </button>
      <button
        onClick={handleAStoreStock}
        className="flex items-center px-4 py-2 mb-4 border border-transparent rounded-md text-sm font-medium text-slate-500"
      >
        <AiFillShopping size={20} className="mr-2" />
        View Store Stock
      </button>
      <button
        onClick={handleADepositStore}
        className="flex items-center px-4 py-2 mb-4 border border-transparent rounded-md text-sm font-medium text-slate-500"
      >
        <AiOutlinePlus size={20} className="mr-2" />
        Add Deposit
      </button>
      <button
        onClick={handleHistoryDeposit}
        className="flex items-center px-4 py-2 mb-4 border border-transparent rounded-md text-sm font-medium text-slate-500"
      >
        <AiOutlineCopy size={20} className="mr-2" />
        History Deposit
      </button>
    </div>
    </div>
    </Layout>
  );
};

export default DetailStore;
