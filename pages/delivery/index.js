import Layout from '@/components/layout/Layout'
import TableDelivery from '@/components/table/TableDelivery'
import React from 'react'

const delivery = () => {
  return (
    <Layout>
        <div className='p-8'>
            <h2 className='text-2xl font-bold mb-4'>Delivery Notes</h2>
            <TableDelivery/>
        </div>
    </Layout>
  )
}

export default delivery