import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";
import Layout from "@/components/layout/Layout";
import DropdownTreeTable from "@/components/treetable/Dropdown";
import React from "react";

const newdelivery = () => {
  const crumbs = [
    { label: "Delivery Notes", url: "/delivery" },
    { label: "Add New Delivery Notes", url: "/delivery/new" },
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
