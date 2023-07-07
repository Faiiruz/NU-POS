import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";
import { tableData } from "@/components/constant/table-data";
import Layout from "@/components/layout/Layout";
import Table from "@/components/table/Table";
import React from "react";

const order = () => {
  const crumbs = [{ label: "Order", url: "/order" }];
  return (
    <>
      <Layout>
        <div className="p-8">
          <Breadcrumbs crumbs={crumbs} />
          <Table data={tableData} />
        </div>
      </Layout>
    </>
  );
};

export default order;
