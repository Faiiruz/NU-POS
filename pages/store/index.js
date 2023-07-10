import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";
import Layout from "@/components/layout/Layout";
import TableStore from "@/components/table/TableStore";
import React from "react";
import { useEffect } from "react";
import AuthRepository from "@/repositories/AuthRepository";
import { useRouter } from "next/router";

const store = () => {
  const crumbs = [{ label: "Store", url: "/store" }];

  const router = useRouter();

  useEffect(() => {
    try {
      let token = localStorage.getItem("xa");
      let dataToken = JSON.parse(token);
      AuthRepository.getStatus({
        XA: dataToken,
        param: "user",
      }).then((data) => {
        if ("status" in data) {
          router.push("/login");
        }
      });
    } catch (error) {
      router.push("/login");
    }
  });

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
