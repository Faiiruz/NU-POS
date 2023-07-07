import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/breadcrumbs/BreadCrumbs";

export default function Home() {
  const crumbs = [{ label: "Master Data" }];
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
