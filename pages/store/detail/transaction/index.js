import Layout from "@/components/layout/Layout";
import React from "react";
import Back from "@/components/backicon/Back";
import StoreTransaction from "@/components/table/StoreTransaction";
import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";

const index = () => {
  const crumbs = [
    { label: "Store", url: "/store" },
    { label: "Profile", url: "/store/detail" },
    { label: "Store Transaction", url: "/store/transaction" },
  ];
  return (
    <>
      <Layout>
        <div className="p-8">
          <Breadcrumbs crumbs={crumbs} />
          <StoreTransaction />
        </div>
      </Layout>
    </>
  );
};

export default index;
