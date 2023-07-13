import Back from "@/components/backicon/Back";
import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";
import EditForm from "@/components/form/EditForm";
import Layout from "@/components/layout/Layout";
import React from "react";

const edit = () => {
  const crumbs = [
    { label: "Produk", url: "/product" },
    { label: "Edit Produk", url: "/product/edit" },
  ];
  return (
    <Layout>
      <div className="p-8">
        <Breadcrumbs crumbs={crumbs} />
        <EditForm />
      </div>
    </Layout>
  );
};

export default edit;
