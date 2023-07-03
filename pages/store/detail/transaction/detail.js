import Back from '@/components/backicon/Back'
import Layout from '@/components/layout/Layout'
import DetailTransaction from '@/components/table/DetailTransaction'
import React from 'react'
import { dataTransaction } from '@/components/constant/table-data'

const detail = () => {

  const firstData = dataTransaction[0]

  return (
    <>
    <Layout>
        <div className='p-8'>
            <Back/>
            <div>
            <h2 className='text-2xl font-bold'>Detail Transaction Store</h2>
            {firstData && (
              <div className='flex flex-col space-y-1 tracking-wide mb-3'>
                <a>No Transaction:{firstData.no}</a>
                <a>Date:{firstData.date}</a>
              </div>
            )}
            <DetailTransaction/>
            <div className='flex flex-col space-y-1 tracking-wide mb-3'>
              <a>Sub Total: {firstData.subtotal}</a>
              <a>Discount: {firstData.discount1}</a>
              <a>Grand Total: {firstData.total}</a>
            </div>
            </div>
            
        </div>
    </Layout>
    </>
  )
}

export default detail