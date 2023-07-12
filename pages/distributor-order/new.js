import React from 'react'
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";

const AddnewOrder = () => {
    const crumbs = [
        { label: "Order Distributor", url: "/distributor-order" },
        { label: "Add Order", url: "/distributor-order/new"}
    ];

  return (
    <>
    <Layout>
      <div className="p-8 ">
        <Breadcrumbs crumbs={crumbs} />
          
      </div>
    </Layout>
  </>
  )
}

export default AddnewOrder