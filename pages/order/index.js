import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";
import { tableData } from "@/components/constant/table-data";
import Layout from "@/components/layout/Layout";
import Table from "@/components/table/Table";
import React, { useEffect } from "react";
import AuthRepository from "@/repositories/AuthRepository";
import { useRouter } from "next/router";

const Order = () => {
  const crumbs = [{ label: "Order", url: "/order" }];
  const Router = useRouter();

  useEffect(() => {
    try {
      let token = localStorage.getItem("xa");
      let dataToken = JSON.parse(token);
      AuthRepository.getStatus({
        XA: dataToken,
        param: "user",
      }).then((data) => {
        if ("status" in data) {
          Router.push("/login");
        }
      });
    } catch (error) {
      Router.push("/login");
    }
  }, []);

  return (
    <>
      <Layout>
        <div className="p-8">
          <Breadcrumbs crumbs={crumbs} />
          <Table/>
        </div>
      </Layout>
    </>
  );
};

export default Order;
