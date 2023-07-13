import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";
import Layout from "@/components/layout/Layout";
import Dropdown from "@/components/table/Dropdown";
import React from "react";

const newsettlement = () => {
  const crumbs = [
    { label: "Pembayaran Toko", url: "/settlement" },
    { label: "Buat Pembayaran Toko", url: "/settlement/new" },
  ];
  return (
    <Layout>
      <div className="p-8">
        <Breadcrumbs crumbs={crumbs} />
        <Dropdown />
      </div>
    </Layout>
  );
};

export default newsettlement;
