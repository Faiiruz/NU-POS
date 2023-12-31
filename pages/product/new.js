import Back from "@/components/backicon/Back";
import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";
import Form from "@/components/form/Form";
import Layout from "@/components/layout/Layout";
import React from "react";

const newproduct = () => {
  const crumbs = [
    { label: "Produk", url: "/product" },
    { label: "Tambahkan Produk", url: "/product/new" },
  ];
  return (
    <>
      <Layout>
        <div className="p-8">
          <Breadcrumbs crumbs={crumbs} />
          <Form />
        </div>
      </Layout>
    </>
  );
};

export default newproduct;
