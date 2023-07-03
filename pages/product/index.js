import Layout from '@/components/layout/Layout'
import TableProduct from '@/components/table/TableProduct'
import React from 'react'

const product = () => {
  return (
    <Layout>
        <div className='p-8'>
            <h2 className='text-2xl font-bold mb-4'>Product</h2>
            <TableProduct/>
        </div>
    </Layout>
  )
}

export default product