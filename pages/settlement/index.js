import Layout from '@/components/layout/Layout'
import TreeTable from '@/components/treetable/TreeTableSetlle'
import React from 'react'

const settlement = () => {
  return (
    <Layout>
      <div className='p-8'>
        <h2 className='text-2xl font-bold mb-4'>Settlement</h2>
        <TreeTable/>
      </div>
    </Layout>
  )
}

export default settlement