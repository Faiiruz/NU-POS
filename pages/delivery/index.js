import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";
import Layout from "@/components/layout/Layout";
import TableDelivery from "@/components/table/TableDelivery";
import React from "react";

const delivery = () => {
  const crumbs = [{ label: "Delivery Notes", url: "delivery" }];
  return (
    <Layout>
      <div className="p-8">
        <Breadcrumbs crumbs={crumbs} />
        <TableDelivery />
      </div>
    </Layout>
  );
};

export default delivery;
