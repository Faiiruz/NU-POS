import Back from '@/components/backicon/Back'
import Layout from '@/components/layout/Layout'
import React from 'react'

const newsettlement = () => {
  return (
    <Layout>
        <div className='p-8'>
            <Back/>
            <h2 className='text-2xl font-bold mb-4'>Create Settlement</h2>
        </div>
    </Layout>
  )
}

export default newsettlement