import Back from "@/components/backicon/Back";
import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";
import FormStore from "@/components/form/FormStore";
import Layout from "@/components/layout/Layout";
import React from "react";

const newStore = () => {
  const crumbs = [
    { label: "Store", url: "/store" },
    { label: "Add New Store", url: "/store/new" },
  ];
  return (
    <>
      <Layout>
        <div className="p-8">
          <Breadcrumbs crumbs={crumbs} />
          <FormStore />
        </div>
      </Layout>
    </>
  );
};

export default newStore;
