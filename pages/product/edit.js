import Back from '@/components/backicon/Back'
import EditForm from '@/components/form/EditForm'
import Layout from '@/components/layout/Layout'
import React from 'react'

const edit = () => {
  return (
    <Layout>
        <div className='p-8'>
          <Back/>
            <h2 className='text-2xl font-bold mb-2'>Edit Product</h2>
            <EditForm/>
        </div>
    </Layout>
  )
}

export default edit