import Layout from '@/components/Layout/Layout'
import React from 'react'
import TableOrder from '@/components/Table/tableOrder'

const order = () => {
  return (
    <>
        <div className="mt-[53px] ml-[235px] bg-white w-screen p-4">
      Order
    </div>
    <Layout/>
    <TableOrder/>
    </>
  )
}

export default order