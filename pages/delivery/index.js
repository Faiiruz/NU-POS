import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";
import Layout from "@/components/layout/Layout";
import TableDelivery from "@/components/table/TableDelivery";
import React from "react";
import { useEffect } from "react";
import AuthRepository from "@/repositories/AuthRepository";
import { useRouter } from "next/router";

const Delivery = () => {
  const crumbs = [{ label: "Surat Jalan Toko", url: "delivery" }];
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
    <Layout>
      <div className="p-8 ">
        <Breadcrumbs crumbs={crumbs} />
        <TableDelivery />
      </div>
    </Layout>
  );
};

export default Delivery;
