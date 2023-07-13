import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";
import Layout from "@/components/layout/Layout";
import DropdownTreeTable from "@/components/treetable/Dropdown";
import React from "react";

const newdelivery = () => {
  const crumbs = [
    { label: "Surat Jalan Toko", url: "/delivery" },
    { label: "Buat Surat Jalan Toko", url: "/delivery/new" },
  ];

  return (
    <Layout>
      <div className="p-8 ">
        <Breadcrumbs crumbs={crumbs} />
        <DropdownTreeTable />
      </div>
    </Layout>
  );
};

export default newdelivery;
