import Layout from "@/components/layout/Layout";
import React from "react";
import Back from "@/components/backicon/Back";
import Deposit from "@/components/form/Deposit";
import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";

const deposit = () => {
  const crumbs = [
    { label: "Store", url: "/store" },
    { label: "Profile", url: "/store/detail" },
    { label: "Add Deposit", url: "/store/detail/deposit" },
  ];
  return (
    <>
      <Layout>
        <div className="p-8">
          <Breadcrumbs crumbs={crumbs} />
          <Deposit />
        </div>
      </Layout>
    </>
  );
};

export default deposit;
