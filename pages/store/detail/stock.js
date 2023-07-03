import Layout from '@/components/layout/Layout'
import React from 'react'
import Back from '@/components/backicon/Back';

const stock = () => {
  return (
    <>
    <Layout>
    <div className='p-8'>
            <Back/>
            <h2 className='text-2xl font-bold mb-4'>Stock Store</h2>
        </div>
    </Layout>
    </>
  )
}

export default stock