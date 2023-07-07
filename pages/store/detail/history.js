import Layout from "@/components/layout/Layout";
import React from "react";
import Back from "@/components/backicon/Back";
import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";
import HistoryDeposit from "@/components/table/HistoryDeposit";

const history = () => {
  const crumbs = [
    { label: "Store", url: "/store" },
    { label: "Profile", url: "/store/detail" },
    { label: "History Deposit", url: "/store/detail/history" },
  ];
  return (
    <>
      <Layout>
        <div className="p-8">
          <Breadcrumbs crumbs={crumbs} />
          <HistoryDeposit />
        </div>
      </Layout>
    </>
  );
};

export default history;
