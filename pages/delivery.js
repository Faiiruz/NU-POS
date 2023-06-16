import Layout from '@/components/Layout/Layout'
import TableDelivery from '@/components/Table/tableDelivery'
import React from 'react'

const delivery = () => {
  return (
    <>
        <div className="mt-[53px] ml-[235px] bg-white w-screen p-4">
      Delivery Notes
    </div>
    <Layout/>
    <TableDelivery/>
    </>
  )
}

export default delivery