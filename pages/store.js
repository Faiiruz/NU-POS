import Layout from '@/components/Layout/Layout'
import TableStore from '@/components/Table/tableStore'
import React from 'react'

const store = () => {
  return (
    <>
        <div className="mt-[53px] ml-[235px] bg-white w-auto p-4">
      Store
    </div>
    <Layout/>
    <TableStore/>
    </>
  )
}

export default store