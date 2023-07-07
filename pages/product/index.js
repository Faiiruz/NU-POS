import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";
import Layout from "@/components/layout/Layout";
import TableProduct from "@/components/table/TableProduct";
import React from "react";

const product = () => {
  const crumbs = [{ label: "Product", url: "/product" }];
  return (
    <Layout>
      <div className="p-8">
        <Breadcrumbs crumbs={crumbs} />
        <TableProduct />
      </div>
    </Layout>
  );
};

export default product;
