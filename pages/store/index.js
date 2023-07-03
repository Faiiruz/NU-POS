import Layout from '@/components/layout/Layout'
import TableStore from '@/components/table/TableStore'
import React from 'react'

const store = () => {
  return (
    <Layout>
        <div className='p-8'>
            <h2 className='text-2xl font-bold mb-4'>Store</h2>
            <TableStore/>
        </div>
    </Layout>
  )
}

export default store