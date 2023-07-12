import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";
import { useEffect } from "react";
import AuthRepository from "@/repositories/AuthRepository";
import { useRouter } from "next/router";
import TableDistributor from "@/components/table/TableDistributor";

const DistributorOrder = () => {
  const crumbs = [{ label: "Order Distributor" }];

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
    <>
      <Layout>
        <div className="p-8 ">
          <Breadcrumbs crumbs={crumbs} />
            <TableDistributor/>
        </div>
      </Layout>
    </>
  );
}

export default DistributorOrder