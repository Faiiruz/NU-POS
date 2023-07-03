import Back from '@/components/backicon/Back'
import Form from '@/components/form/Form'
import Layout from '@/components/layout/Layout'
import React from 'react'

const newproduct = () => {
  return (
    <>
    <Layout>
        <div className='p-8'>
            <Back/>
            <h2 className='text-2xl font-bold mb-4'>Add New Product</h2>
            <Form/>
        </div>
    </Layout>
    </>
  )
}

export default newproduct