import Layout from '@/components/layout/Layout'
import React from 'react'
import Back from '@/components/backicon/Back';
import Deposit from '@/components/form/Deposit';

const deposit = () => {
  return (
    <>
    <Layout>
    <div className='p-8'>
            <Back/>
            <h2 className='text-2xl font-bold'>Add Deposit</h2>
            <Deposit/>
        </div>
    </Layout>
    </>
  )
}

export default deposit