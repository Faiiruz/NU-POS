import Back from "@/components/backicon/Back";
import Layout from "@/components/layout/Layout";
import DetailTransaction from "@/components/table/DetailTransaction";
import React from "react";
import { dataTransaction } from "@/components/constant/table-data";
import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";

const detail = () => {
  const crumbs = [
    { label: "Store", url: "/store" },
    { label: "Profile", url: "/store/detail" },
    { label: "Store Transaction", url: "/store/detail/transaction" },
    {
      label: "Detail Store Transaction",
      url: "/store/detail/transaction/detail",
    },
  ];
  const firstData = dataTransaction[0];

  return (
    <>
      <Layout>
        <div className="p-8">
          <Breadcrumbs crumbs={crumbs} />
          {firstData && (
            <div className="flex flex-col space-y-1 tracking-wide mb-3">
              <a>No Transaction:{firstData.no}</a>
              <span>
                Date<a className="ml-[78px]"></a>:{firstData.date}
              </span>
            </div>
          )}
          <DetailTransaction />
          <div className="flex flex-col space-y-1 tracking-wide mb-3 mt-3">
            <span>
              Sub Total<a className="ml-4"></a>: {firstData.subtotal}
            </span>
            <a>Grand Total: {firstData.total}</a>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default detail;
