import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";
import Layout from "@/components/layout/Layout";
import TableStore from "@/components/table/TableStore";
import React from "react";

const store = () => {
  const crumbs = [{ label: "Store", url: "/store" }];
  return (
    <Layout>
      <div className="p-8">
        <Breadcrumbs crumbs={crumbs} />
        <TableStore />
      </div>
    </Layout>
  );
};

export default store;
