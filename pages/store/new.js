import Back from '@/components/backicon/Back'
import FormStore from '@/components/form/FormStore'
import Layout from '@/components/layout/Layout'
import React from 'react'

const newStore = () => {
  return (
    <>
    <Layout>
        <div className='p-8'>
            <Back/>
            <h2 className='text-2xl font-bold mb-4'>Add New Store</h2>
            <FormStore/>
        </div>
    </Layout>
    </>
  )
}

export default newStore