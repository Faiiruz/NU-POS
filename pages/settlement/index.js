import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";
import Layout from "@/components/layout/Layout";
import TreeTable from "@/components/treetable/TreeTableSetlle";
import React from "react";

const settlement = () => {
  const crumbs = [{ label: "Settlement", url: "/settlement" }];
  return (
    <Layout>
      <div className="p-8">
        <Breadcrumbs crumbs={crumbs} />
        <TreeTable />
      </div>
    </Layout>
  );
};

export default settlement;
