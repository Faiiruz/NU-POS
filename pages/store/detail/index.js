import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";
import DetailStore from "@/components/form/DetailStore";
import Back from "@/components/backicon/Back";
import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";

const DetailPageStore = () => {
  const router = useRouter();
  const { outlet, owner } = router.query;
  const crumbs = [
    { label: "Store", url: "/store" },
    { label: "Profile", url: "/store/detail" },
  ];
  return (
    <>
      <Layout>
        <div className="p-8">
          <Breadcrumbs crumbs={crumbs} />
          <DetailStore />
        </div>
      </Layout>
    </>
  );
};

export default DetailPageStore;
