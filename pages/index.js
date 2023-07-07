import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";
import { useEffect } from "react";
import AuthRepository from "@/repositories/AuthRepository";

export default function Home() {
  const crumbs = [{ label: "Dashboard" }];

  useEffect(() => {
    AuthRepository.getStatus({
      XA: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiemlkYW5lLmdudXNhQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiNmFmNzI3ZjVjNDEzNTIzMzQxZmQ2MDg1ODlhYzJjNTk3MDhkMTlmMSJ9.uCxU-w39DTX_7n3PeqCi2mi1F8O1MZe_GTqV43EVH5c",
      param: "user",
    }).then((data) => console.log(data));
  });

  return (
    <>
      <Layout>
        <div className="p-8">
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </Layout>
    </>
  );
}
