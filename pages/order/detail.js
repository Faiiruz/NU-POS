import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import TableDetailOrder from '@/components/table/TableDetailOrder';
import { tableData } from '@/components/constant/table-data';
import Back from '@/components/backicon/Back';

const DetailPageOrder = () => {
  const router = useRouter();

  const firstData  = tableData[0]

  return (
    <>
    <Layout>
    <div className="p-8">
      <Back/>
          <h2 className="text-2xl font-bold mb-4">Detail Order</h2>
          {firstData && (
            <div className='flex flex-col space-y-1 mb-3 tracking-wide'>
              <a>Outlet: {firstData.outlet}</a>
              <a>Owner: {firstData.owner}</a>
              <a>Status Order: {firstData.info}</a>
              <a>Date: {firstData.date}</a>
            </div>
          )}
          <h1></h1>
          <TableDetailOrder/>
        </div>
    </Layout>
    </>
  );
};

export default DetailPageOrder;