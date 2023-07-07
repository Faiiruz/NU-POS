import Layout from "@/components/layout/Layout";
import React from "react";
import Back from "@/components/backicon/Back";
import StockStore from "@/components/table/StockStore";
import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";

const stock = () => {
  const crumbs = [
    { label: "Store", url: "/store" },
    { label: "Profile", url: "/store/detail" },
    { label: "Stocks Store", url: "/store/detail/stock" },
  ];
  return (
    <>
      <Layout>
        <div className="p-8">
          <Breadcrumbs crumbs={crumbs} />
          <StockStore />
        </div>
      </Layout>
    </>
  );
};

export default stock;
