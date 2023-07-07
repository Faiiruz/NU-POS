import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";
import TableDetailOrder from "@/components/table/TableDetailOrder";
import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";

const DetailPageOrder = () => {
  const router = useRouter();
  const crumbs = [
    { label: "Order", url: "/order" },
    { label: "Detail Order", url: "/order/detail" },
  ];

  return (
    <>
      <Layout>
        <div className="p-8">
          <Breadcrumbs crumbs={crumbs} />
          <TableDetailOrder />
        </div>
      </Layout>
    </>
  );
};

export default DetailPageOrder;
