import Breadcrumbs from '@/components/breadcrumbs/BreadCrumbs'
import Layout from '@/components/layout/Layout'
import React from 'react'

const Distributor = () => {
    const crumbs = [{ label: "Distributor", url: "/distributor" }];
  return (
    <Layout>
        <div className='p-8'>
        <Breadcrumbs crumbs={crumbs}/>
        </div>
    </Layout>
  )
}

export default Distributor