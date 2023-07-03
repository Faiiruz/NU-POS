import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import { tableDelivery } from '@/components/constant/table-data';
import Back from '@/components/backicon/Back';
import TreeTable from '@/components/treetable/TreeTable';

const DetailPageDelivery = () => {
  const router = useRouter();

  const firstData  = tableDelivery[0]

  return (
    <>
    <Layout>
    <div className="p-8">
       <Back/>
          <h2 className="text-2xl font-bold mb-4">Detail Delivery Notes</h2>
          {firstData && (
            <div className='flex flex-col tracking-wide space-y-1 mb-3'>
              <a>No Delivery: {firstData.delivery}</a>
              <a>Date: {firstData.date}</a>
              <a>Outlet: {firstData.outlet}</a>
              <a>Status: {firstData.info}</a>
            </div>
          )}
          <TreeTable/>
        </div>
    </Layout>
    </>
  );
};

export default DetailPageDelivery;