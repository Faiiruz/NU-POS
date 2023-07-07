import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";
import Back from "@/components/backicon/Back";
import TreeTable from "@/components/treetable/TreeTable";
import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";

const DetailPageDelivery = () => {
  const router = useRouter();
  const crumbs = [
    { label: "Delivery Notes", url: "/delivery" },
    { label: "Detail Delivery Notes", url: "/delivery/detail" },
  ];
  return (
    <>
      <Layout>
        <div className="p-8">
          <Breadcrumbs crumbs={crumbs} />
          <TreeTable />
        </div>
      </Layout>
    </>
  );
};

export default DetailPageDelivery;
