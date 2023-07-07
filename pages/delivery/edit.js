import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";
import Layout from "@/components/layout/Layout";
import React from "react";

const edit = () => {
  const crumbs = [
    { label: "Delivery Notes", url: "/delivery" },
    { label: "Edit Delivery", url: "/delivery/edit" },
  ];

  return (
    <Layout>
      <div className="p-8">
        <Breadcrumbs crumbs={crumbs} />
      </div>
    </Layout>
  );
};

export default edit;
