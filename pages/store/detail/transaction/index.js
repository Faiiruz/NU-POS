import Layout from '@/components/layout/Layout'
import React from 'react'
import Back from '@/components/backicon/Back'
import StoreTransaction from '@/components/table/StoreTransaction'

const index = () => {
  return (
    <>
    <Layout>
    <div className='p-8'>
            <Back/>
            <h2 className='text-2xl font-bold mb-4'>Transaction Store</h2>
            <StoreTransaction/>
        </div>
    </Layout>
    </>
  )
}

export default index