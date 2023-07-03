import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import DetailStore from '@/components/form/DetailStore';
import Back from '@/components/backicon/Back';

const DetailPageStore = () => {
  const router = useRouter();
  const { outlet, owner } = router.query;

  return (
    <>
    <Layout>
    <div className='p-8'>
        <Back/>
      <h2 className='text-2xl font-bold mb-4'>Profile Store</h2>
        <DetailStore/>
    </div>
    </Layout>
    </>
  );
};

export default DetailPageStore;