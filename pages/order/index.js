import { tableData } from '@/components/constant/table-data'
import Layout from '@/components/layout/Layout'
import Table from '@/components/table/Table'
import React from 'react'

const order = () => {
  return (
    <>
    <Layout>
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">Order</h2>
          <Table data={tableData} />
        </div>
    </Layout>
    </>
  )
}

export default order