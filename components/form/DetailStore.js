import React from "react";
import { tableStore } from "../constant/table-data";
import { useRouter } from "next/router";
import {
  AiOutlineFileText,
  AiFillShopping,
  AiOutlinePlus,
  AiOutlineCopy,
} from "react-icons/ai";

const DetailStore = () => {
  const firstData = tableStore[0];
  const router = useRouter();

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
    <div className="p-6 bg-white rounded-md shadow-md h-screen 2xl:h-[700px]">
      {firstData && (
        <div>
          <div className="mb-4">
            <label className="ml-[10px]  mb-2 text-sm font-bold">
              Outlet Name:
            </label>
            <a className="w-full ml-3 px-2 py-1  rounded-md focus:outline-none">
              {firstData.outlet}
            </a>
          </div>
          <div className="mb-4">
            <label className="ml-[10px]  mb-2 text-sm font-bold">
              Owner Name:
            </label>
            <a className="w-full ml-3 px-2 py-1   rounded-md focus:outline-none">
              {firstData.owner}
            </a>
          </div>
          <div className="mb-4">
            <label className="ml-[60px]  mb-2 text-sm font-bold">Email:</label>
            <a className="w-full ml-3 px-2 py-1   rounded-md focus:outline-none">
              {firstData.email}
            </a>
          </div>
          <div className="mb-4">
            <label className=" mb-2 text-sm font-bold">Phone Number:</label>
            <a className="w-full ml-3 px-2 py-1   rounded-md focus:outline-none">
              {firstData.no}
            </a>
          </div>
          <div className="mb-4">
            <label className="ml-[40px] mb-2 text-sm font-bold" htmlFor="sku">
              Province:
            </label>
            <a className="w-full ml-3 px-2 py-1   rounded-md focus:outline-none">
              {firstData.provinsi}
            </a>
          </div>
          <div className="mb-4">
            <label className="ml-[40px] mb-2 text-sm font-bold" htmlFor="sku">
              Regency:
            </label>
            <a className="w-full ml-3 px-2 py-1   rounded-md focus:outline-none">
              {firstData.regency}
            </a>
          </div>
          <div className="mb-4">
            <label className="ml-[30px] mb-2 text-sm font-bold" htmlFor="sku">
              SubDisrict:
            </label>
            <a className="w-full ml-3 px-2 py-1   rounded-md focus:outline-none">
              {firstData.subdisrict}
            </a>
          </div>
          <div className="mb-4">
            <label className="ml-[20px] mb-2 text-sm font-bold" htmlFor="sku">
              Postal Code:
            </label>
            <a className="w-full ml-3 px-2 py-1   rounded-md focus:outline-none">
              {firstData.code}
            </a>
          </div>
          <div className="mb-4">
            <label className="ml-[45px]  mb-2 text-sm font-bold" htmlFor="sku">
              Address:
            </label>
            <a className="w-full ml-3 px-2 py-1   rounded-md focus:outline-none">
              {firstData.place}
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
  );
};

export default DetailStore;
